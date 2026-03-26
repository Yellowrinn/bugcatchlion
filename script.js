document.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('movingElement');

    function moveRandomly() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const newX = Math.random() * (windowWidth - 50);
        const newY = Math.random() * (windowHeight - 50);

        element.style.left = newX + 'px';
        element.style.top = newY + 'px';
    }

    setInterval(moveRandomly, 1000);
});