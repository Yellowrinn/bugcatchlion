// .bug 클래스를 가진 모든 벌레 요소 선택
const bugs = document.querySelectorAll('.bug');

// 각 벌레에 클릭 이벤트 등록
bugs.forEach((bug, index) => {
    bug.addEventListener("click", () => {
        isPaused = true; // script.js의 전역 변수 isPaused를 true로 변경 (벌레 이동 멈춤)

        // 클릭한 벌레의 data-modal 속성값 읽기
        const modalId = bug.dataset.modal; // "modal1", "modal2" ...
        // 해당 id를 가진 모달 요소 찾기
        const targetModal = document.getElementById(modalId);
        // 모달 표시
        targetModal.style.display = 'flex';
    });
});

// 닫기 버튼 (.close) 선택
const closeBtns = document.querySelectorAll('.close');
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 클릭한 닫기 버튼에서 가장 가까운 부모 .modal 요소를 찾아 숨김
        btn.closest('.modal').style.display = 'none';
        isPaused = false; // 클로즈 버튼 누르고 모달 닫고 나서 벌레 이동 재개
    });
});

// 바깥 영역 클릭 시 닫기
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        // e.target : 실제 클릭된 요소
        // modal_body가 아닌 배경 클릭 시 닫힘
        if (e.target === modal) {
            modal.style.display = 'none';
            isPaused = false; // 벌레 이동 재개
        }
    });
});