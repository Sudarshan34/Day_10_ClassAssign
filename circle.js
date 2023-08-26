
        const colors = ["red", "cyan", "yellow", "green"];
        let colortypes = 0;

        const shapes = document.querySelectorAll('.shape');
        let shapetypes = 0;

        const circle = document.getElementById('circle');
        const colorButton = document.getElementById('colorButton');
        const shapeButton = document.getElementById('shapeButton');

        colorButton.addEventListener('click', () => {
            colortypes = (colortypes + 1) % colors.length;
            circle.style.backgroundColor = colors[colortypes];
        });

        shapeButton.addEventListener('click', () => {
            shapes[shapetypes].classList.remove('active');
            shapetypes = (shapetypes + 1) % shapes.length;
            shapes[shapetypes].classList.add('active');
        });
    