/* ================================
   CURSOR GLOW
================================ */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function (event) {

    if (cursorGlow) {

        cursorGlow.style.left = event.clientX + "px";

        cursorGlow.style.top = event.clientY + "px";

    }

});



/* ================================
   SCROLL TO MODULES
================================ */

function scrollToModules() {

    const modules = document.getElementById("modules");

    if (modules) {

        modules.scrollIntoView({
            behavior: "smooth"
        });

    }

}



/* ================================
   SCROLL TO SYSTEM
================================ */

function scrollToSystem() {

    const system = document.getElementById("system");

    if (system) {

        system.scrollIntoView({
            behavior: "smooth"
        });

    }

}



/* ================================
   SHOW TEMPLATES
================================ */

function showTemplates(type) {

    const panels = document.querySelectorAll(".template-panel");

    panels.forEach(function (panel) {

        panel.classList.remove("active");

    });


    const selectedPanel =
        document.getElementById(type + "-templates");


    if (selectedPanel) {

        selectedPanel.classList.add("active");


        setTimeout(function () {

            selectedPanel.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }

}



/* ================================
   CLOSE TEMPLATES
================================ */

function closeTemplates() {

    const panels = document.querySelectorAll(".template-panel");

    panels.forEach(function (panel) {

        panel.classList.remove("active");

    });


    const modules = document.getElementById("modules");

    if (modules) {

        modules.scrollIntoView({
            behavior: "smooth"
        });

    }

}



/* ================================
   COUNTERS
================================ */

const counters =
    document.querySelectorAll(".counter");


const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target =
                    parseInt(
                        counter.getAttribute("data-target")
                    );


                let current = 0;


                const increment =
                    target / 60;


                const updateCounter = function () {

                    current += increment;


                    if (current < target) {

                        counter.textContent =
                            Math.floor(current);

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent =
                            target;

                    }

                };


                updateCounter();

                observer.unobserve(counter);

            }

        });

    }, {
        threshold: 0.5
    });


counters.forEach(function (counter) {

    observer.observe(counter);

});



/* ================================
   NAVBAR SCROLL EFFECT
================================ */

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".navbar");


    if (!navbar) {
        return;
    }


    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 40px rgba(0,0,0,0.25)";

    } else {

        navbar.style.boxShadow = "none";

    }

});