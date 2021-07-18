function scrollElements() {
    window.sr = ScrollReveal();
        sr.reveal('#section-navbar', {
            duration: 2000,
            origin: 'top'
        });
        sr.reveal('#section1-left', {
            duration: 1000,
            delay: 500,
            origin: 'top',
            distance: '300px'
        });
        sr.reveal('#section1-right', {
            duration: 1000,
            delay: 500,
            origin: 'right',
            distance: '300px'
        });
        sr.reveal('#section1-searchbar', {
            duration: 1000,
            delay: 1000,
            origin: 'bottom',
            distance: '300px'
        });

        sr.reveal('#section-meettheteam-img', {
            duration: 1000,
            origin: 'left',
            distance: '300px',
            viewFactor: 0.2
        });

        sr.reveal('#section-meettheteam-team', {
            duration: 1000,
            origin: 'right',
            distance: '300px',
            viewFactor: 0.2
        });

        sr.reveal('#section-features', {
            duration: 1000,
            origin: 'bottom',
            distance: '300px',
            viewFactor: 0.2
        });

        sr.reveal('#section-about', {
            duration: 1000,
            origin: 'top',
            distance: '300px',
            viewFactor: 0.2
        });

        // sr.reveal('.showcase-left1', {
        //     duration: 1000,
        //     origin: 'left',
        //     distance: '300px',
        //     viewFactor: 0.2
        // });
        // sr.reveal('.showcase-right1', {
        //     duration: 1000,
        //     origin: 'right',
        //     distance: '300px',
        //     viewFactor: 0.2
        // });
}