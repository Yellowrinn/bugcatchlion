document.addEventListener('DOMContentLoaded', () => {
    const bugs = [
        document.getElementById('bug1'),
        document.getElementById('bug2'),
        document.getElementById('bug3'),
        document.getElementById('bug4')
    ]

    function moveRandomly() {

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        bugs.forEach(bug => {
            if (!bug) return;
            const x = Math.random() * (windowWidth - 50);
            const y = Math.random() * (windowHeight - 50);
            bug.style.left = `${x}px`;
            bug.style.top = `${y}px`
        });
    }

    moveRandomly();
    setInterval(moveRandomly, 1500);
});