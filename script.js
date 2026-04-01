// 벌레 이동 상태를 관리하는 변수 - false:이동 중, true: 정지
let isPaused = false;

document.addEventListener('DOMContentLoaded', () => {

    // .bug 클래스를 가진 모든 요소 선택 (NodeList)
    const bugs = document.querySelectorAll('.bug');

    // 버그들을 랜덤으로 위치시키는 함수
    function moveRandomly() {
        // 일시정지 상태면 실행하지 않음
        if (isPaused) return;

        // 현재 브라우저 화면 크기 가져오기
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // 각 bug 요소를 순회하면서 위치 변경
        bugs.forEach(bug => {
            // 화면 범위 내 랜덤으로 좌표 생성 (50px은 크기 여유를 위해)
            const x = Math.random() * (windowWidth - 50);
            const y = Math.random() * (windowHeight - 50);
            const angle = Math.random() * 360;
            // CSS 위치 값 적용
            bug.style.left = `${x}px`;
            bug.style.top = `${y}px`;
            bug.style.transform = `rotate(${angle}deg)`;
        });
    }

    // 최초 1회 즉시 실행
    // 이 코드를 호출하지 않으면 bug 요소들이 초기 위치에 자리함
    // 따라서 페이지 로드 직후 실행하여 각 요소들은 랜덤 위치로 배치
    moveRandomly();
    // 1.5초마다 반복 실행 -> 계속 랜덤 이동
    setInterval(moveRandomly, 2000);
});