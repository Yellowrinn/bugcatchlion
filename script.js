document.addEventListener('DOMContentLoaded', () => {
    const bug1 = document.getElementById('bug1');
    const bug2 = document.getElementById('bug2');
    // const bug3 = document.getElementById('bug3');
    // const bug4 = document.getElementById('bug4');


    function moveRandomly() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const BUG1X = Math.random() * (windowWidth - 50);
        const BUG1Y = Math.random() * (windowHeight - 50);

        const BUG2X = Math.random() * (windowWidth - 50);
        const BUG2Y = Math.random() * (windowHeight - 50);

        // const BUG3X = Math.random() * (windowWidth - 50);
        // const BUG3Y = Math.random() * (windowHeight - 50);

        // const BUG4X = Math.random() * (windowWidth - 50);
        // const BUG4Y = Math.random() * (windowHeight - 50);


        bug1.style.left = BUG1X + 'px';
        bug1.style.top = BUG1Y + 'px';

        bug2.style.left = BUG2X + 'px';
        bug2.style.top = BUG2Y + 'px';

        // bug3.style.left = BUG3X + 'px';
        // bug3.style.top = BUG3Y + 'px';

        // bug4.style.left = BUG4X + 'px';
        // bug4.style.top = BUG4Y + 'px';
    }

    setInterval(moveRandomly, 1500);
});