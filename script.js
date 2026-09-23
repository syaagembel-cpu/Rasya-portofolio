/* =========================================
   RASYA PORTFOLIO JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =========================
       LOADER
    ========================= */

    const loader =
        document.getElementById("loader");

    if (loader) {

        window.addEventListener("load", () => {

            setTimeout(() => {

                loader.classList.add("hide");

            }, 800);

        });

    }



    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navMenu =
        document.querySelector(".nav-menu");


    if (menuToggle && navMenu) {

        menuToggle.addEventListener(
            "click",
            () => {

                menuToggle.classList.toggle("active");

                navMenu.classList.toggle("active");

            }
        );


        document
            .querySelectorAll(".nav-menu a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        menuToggle.classList.remove(
                            "active"
                        );

                        navMenu.classList.remove(
                            "active"
                        );

                    }
                );

            });

    }



    /* =========================
       TYPING
    ========================= */

    const typing =
        document.querySelector(".typing");


    if (typing) {

        const texts = [

            "Pelajar TKJ",
            "Web Developer",
            "Technology Enthusiast",
            "Future Entrepreneur",
            "Network Enthusiast"

        ];


        let textIndex = 0;
        let charIndex = 0;
        let deleting = false;


        function typeEffect() {

            const current =
                texts[textIndex];


            if (!deleting) {

                typing.textContent =
                    current.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;


                if (
                    charIndex >=
                    current.length
                ) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1800
                    );

                    return;

                }

            } else {

                typing.textContent =
                    current.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;


                if (charIndex <= 0) {

                    deleting = false;

                    textIndex++;

                    if (
                        textIndex >=
                        texts.length
                    ) {

                        textIndex = 0;

                    }

                }

            }


            setTimeout(
                typeEffect,
                deleting ? 50 : 100
            );

        }


        typeEffect();

    }



    /* =========================
       THEME
    ========================= */

    const themeToggle =
        document.getElementById(
            "theme-toggle"
        );


    if (themeToggle) {

        const savedTheme =
            localStorage.getItem(
                "rasya-theme"
            );


        if (
            savedTheme ===
            "light"
        ) {

            document.body.classList.add(
                "light-mode"
            );

            updateThemeIcon();

        }


        themeToggle.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "light-mode"
                );


                const isLight =
                    document.body.classList.contains(
                        "light-mode"
                    );


                localStorage.setItem(
                    "rasya-theme",
                    isLight
                        ? "light"
                        : "dark"
                );


                updateThemeIcon();

            }
        );

    }


    function updateThemeIcon() {

        if (!themeToggle) return;


        const icon =
            themeToggle.querySelector("i");


        if (!icon) return;


        const isLight =
            document.body.classList.contains(
                "light-mode"
            );


        icon.className =
            isLight
                ? "fas fa-sun"
                : "fas fa-moon";

    }



    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        revealElements.length
    ) {

        const observer =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add("active");

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );

    }



    /* =========================
       SKILL BAR
    ========================= */

    const skillBars =
        document.querySelectorAll(
            ".skill-progress"
        );


    if (skillBars.length) {

        const skillObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                const bar =
                                    entry.target;


                                const width =
                                    bar.dataset.width;


                                if (width) {

                                    bar.style.width =
                                        width + "%";

                                }


                                observer.unobserve(
                                    bar
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.5
                }
            );


        skillBars.forEach(
            bar => {

                skillObserver.observe(
                    bar
                );

            }
        );

    }



    /* =========================
       CUSTOM CURSOR
    ========================= */

    const cursor =
        document.querySelector(
            ".cursor"
        );

    const follower =
        document.querySelector(
            ".cursor-follower"
        );


    if (
        cursor &&
        follower &&
        window.innerWidth > 768
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let followerX = 0;
        let followerY = 0;


        document.addEventListener(
            "mousemove",
            e => {

                mouseX = e.clientX;
                mouseY = e.clientY;


                cursor.style.left =
                    mouseX + "px";

                cursor.style.top =
                    mouseY + "px";

            }
        );


        function animateCursor() {

            followerX +=
                (mouseX - followerX) *
                0.12;

            followerY +=
                (mouseY - followerY) *
                0.12;


            follower.style.left =
                followerX + "px";

            follower.style.top =
                followerY + "px";


            requestAnimationFrame(
                animateCursor
            );

        }


        animateCursor();


        const clickable =
            document.querySelectorAll(
                "a, button, .tilt-card"
            );


        clickable.forEach(
            element => {

                element.addEventListener(
                    "mouseenter",
                    () => {

                        cursor.classList.add(
                            "hover"
                        );

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    () => {

                        cursor.classList.remove(
                            "hover"
                        );

                    }
                );

            }
        );

    }



    /* =========================
       3D CARD
    ========================= */

    const cards =
        document.querySelectorAll(
            ".tilt-card"
        );


    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            e => {

                if (
                    window.innerWidth <=
                    768
                ) return;


                const rect =
                    card.getBoundingClientRect();


                const x =
                    e.clientX -
                    rect.left;


                const y =
                    e.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    ((y - centerY) /
                    centerY) * -4;


                const rotateY =
                    ((x - centerX) /
                    centerX) * 4;


                card.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });



    /* =========================
       PARTICLES
    ========================= */

    const canvas =
        document.getElementById(
            "particles"
        );


    if (canvas) {

        const ctx =
            canvas.getContext(
                "2d"
            );


        let particles = [];


        function resizeCanvas() {

            canvas.width =
                window.innerWidth;

            canvas.height =
                window.innerHeight;

        }


        resizeCanvas();


        window.addEventListener(
            "resize",
            resizeCanvas
        );


        class Particle {

            constructor() {

                this.x =
                    Math.random() *
                    canvas.width;


                this.y =
                    Math.random() *
                    canvas.height;


                this.size =
                    Math.random() *
                    2 + 0.5;


                this.speedX =
                    (Math.random() - 0.5) *
                    0.4;


                this.speedY =
                    (Math.random() - 0.5) *
                    0.4;

            }


            update() {

                this.x +=
                    this.speedX;

                this.y +=
                    this.speedY;


                if (
                    this.x < 0 ||
                    this.x > canvas.width
                ) {

                    this.speedX *= -1;

                }


                if (
                    this.y < 0 ||
                    this.y > canvas.height
                ) {

                    this.speedY *= -1;

                }

            }


            draw() {

                ctx.beginPath();


                ctx.arc(
                    this.x,
                    this.y,
                    this.size,
                    0,
                    Math.PI * 2
                );


                ctx.fillStyle =
                    "rgba(0,229,255,0.65)";


                ctx.fill();

            }

        }


        function createParticles() {

            particles = [];


            const amount =
                Math.min(
                    90,
                    Math.floor(
                        window.innerWidth /
                        15
                    )
                );


            for (
                let i = 0;
                i < amount;
                i++
            ) {

                particles.push(
                    new Particle()
                );

            }

        }


        createParticles();


        window.addEventListener(
            "resize",
            createParticles
        );


        function connectParticles() {

            for (
                let a = 0;
                a < particles.length;
                a++
            ) {

                for (
                    let b = a + 1;
                    b < particles.length;
                    b++
                ) {

                    const dx =
                        particles[a].x -
                        particles[b].x;


                    const dy =
                        particles[a].y -
                        particles[b].y;


                    const distance =
                        Math.sqrt(
                            dx * dx +
                            dy * dy
                        );


                    if (
                        distance < 110
                    ) {

                        ctx.beginPath();


                        ctx.strokeStyle =
                            `rgba(
                                0,
                                229,
                                255,
                                ${1 - distance / 110}
                            )`;


                        ctx.lineWidth =
                            0.4;


                        ctx.moveTo(
                            particles[a].x,
                            particles[a].y
                        );


                        ctx.lineTo(
                            particles[b].x,
                            particles[b].y
                        );


                        ctx.stroke();

                    }

                }

            }

        }


        function animateParticles() {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );


            particles.forEach(
                particle => {

                    particle.update();

                    particle.draw();

                }
            );


            connectParticles();


            requestAnimationFrame(
                animateParticles
            );

        }


        animateParticles();

    }



    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );


    const navLinks =
        document.querySelectorAll(
            ".nav-menu a"
        );


    function updateNavigation() {

        let current = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    href === "#" + current
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "scroll",
        updateNavigation
    );



    /* =========================
       SCROLL TOP
    ========================= */

    const scrollTop =
        document.querySelector(
            ".scroll-top"
        );


    if (scrollTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.scrollY > 500
                ) {

                    scrollTop.classList.add(
                        "show"
                    );

                } else {

                    scrollTop.classList.remove(
                        "show"
                    );

                }

            }
        );


        scrollTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }



    /* =========================
       SMOOTH SCROLL
    ========================= */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(anchor => {

            anchor.addEventListener(
                "click",
                function(e) {

                    const id =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        id === "#" ||
                        id === ""
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            id
                        );


                    if (target) {

                        e.preventDefault();


                        target.scrollIntoView({
                            behavior:
                                "smooth",
                            block:
                                "start"
                        });

                    }

                }
            );

        });



    /* =========================
       YEAR
    ========================= */

    const year =
        document.getElementById(
            "year"
        );


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }



    /* =========================
       IMAGE ERROR HANDLER
    ========================= */

    document
        .querySelectorAll(
            "img"
        )
        .forEach(img => {

            img.addEventListener(
                "error",
                () => {

                    img.style.background =
                        "linear-gradient(135deg,#071114,#10282d)";

                    img.style.objectFit =
                        "cover";

                }
            );

        });

});