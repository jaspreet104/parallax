function scrollElements() {
    window.sr = ScrollReveal();
        sr.reveal('.navbar', {
            duration: 2000,
            origin: 'right'
        });
        sr.reveal('.showcase-left', {
            duration: 1000,
            delay: 500,
            origin: 'top',
            distance: '300px'
        });
        sr.reveal('.showcase-right', {
            duration: 1000,
            delay: 500,
            origin: 'right',
            distance: '300px'
        });

        sr.reveal('.showcase-left1', {
            duration: 1000,
            origin: 'left',
            distance: '300px',
            viewFactor: 0.2
        });
        sr.reveal('.showcase-right1', {
            duration: 1000,
            origin: 'right',
            distance: '300px',
            viewFactor: 0.2
        });
}