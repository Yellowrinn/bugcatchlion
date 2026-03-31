// HTML 문서가 다 읽힌 뒤에 실행되도록 설정
document.addEventListener('DOMContentLoaded', () => {

    // 'profile-card'라는 클래스를 가진 모든 요소를 가져옴
    const cards = document.querySelectorAll('.modal_body');

    // 3. 찾아낸 카드들을 하나씩 꺼내어 각각에게 이벤트리스너 추가
    //이벤트리스너란 특정 이벤트가 발생 했을 때 실행 되는 함수
    cards.forEach(card => {
        // 마우스를 올렸을 때 클래스 추가
        card.addEventListener('mouseenter', () => {
            // CSS에 미리 정의해둔 'active-shadow' 클래스를 카드에 추가
            card.classList.add('active-shadow');
        });

        // 마우스를 뗐을 때 클래스 제거
        card.addEventListener('mouseleave', () => {
            // 'active-shadow' 클래스를 카드에서 제거
            card.classList.remove('active-shadow');
        });
    });
});