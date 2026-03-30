// isPaused는 script.js에서 선언하므로 여기서 제거

const bugs = document.querySelectorAll('.bug');

bugs.forEach(bug => {
    bug.addEventListener('mouseover', () => {
        isPaused = true;
        const modalId = bug.dataset.modal;
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });

    bug.addEventListener('mouseleave', () => {
        isPaused = false;
    });
});

// 닫기 버튼
const closeBtns = document.querySelectorAll('.close');
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').style.display = 'none'; // .yelin_introduce → .modal
    });
});

// 모달 바깥 클릭
const modals = document.querySelectorAll('.modal');  // .yelin_introduce → .modal
modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});