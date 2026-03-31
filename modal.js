// bug 요소들 가져오기
const bugs = document.querySelectorAll('.bug');

// 각 bug에 이벤트 등록
bugs.forEach(bug => {

    // bug 위에 hover하면
    bug.addEventListener('mouseover', () => {
        isPaused = true; // 버그 이동 멈춤 (script.js에 전역으로 선언된 isPaused에 접근)

        // modal 속성으로 연결된 모달 찾기
        const modalId = bug.dataset.modal;
        const modal = document.getElementById(modalId);

        // 모달 표시
        modal.style.display = 'flex';
    });

    // 마우스를 벗어나면
    bug.addEventListener('mouseleave', () => {
        isPaused = false;   // 버그들 다시 이동
    });
});

// 닫기 버튼 클릭 시 모달 닫기
const closeBtns = document.querySelectorAll('.close');
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 가장 가까운 부모 모달 찾아서 숨김
        btn.closest('.modal').style.display = 'none';
    });
});

// 모달 바깥 영역 클릭 시 닫기
const modals = document.querySelectorAll('.modal');
// 각각의 모달에 대해 반복
modals.forEach(modal => {
    // 이벤트 (모달 영역 어디든 클릭하면) 발생
    modal.addEventListener('click', (e) => {
        // 모달 배경을 클릭했을 때만 닫힘
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});