/* =========================================================
   AGENTFLOW
   ADVANCED JAVASCRIPT ENGINE
   ========================================================= */


/* =========================================================
   MODULE DATA
   ========================================================= */

const modules = [

    {
        id: "status",
        number: "01",
        icon: "◉",
        name: "Agent Status Monitoring",
        description:
            "Monitor the health, status and operational condition of AI agents.",

        templates: [
            {
                name: "Status 01",
                path: "agent status/status 01/index.html"
            },
            {
                name: "Status 02",
                path: "agent status/status 02/index.html"
            },
            {
                name: "Status 03",
                path: "agent status/status 03/index.html"
            },
            {
                name: "Status 04",
                path: "agent status/status 04/index.html"
            }
        ]
    },


    {
        id: "activity",
        number: "02",
        icon: "▶",
        name: "AI Agent Activity Log",
        description:
            "Track agent tasks, execution history and real-time activity.",

        templates: [
            {
                name: "Template 01",
                path: "agent activiy log/template 01/index.html"
            },
            {
                name: "Template 02",
                path: "agent activiy log/template 02/index.html"
            },
            {
                name: "Template 03",
                path: "agent activiy log/template 03/index.html"
            },
            {
                name: "Template 04",
                path: "agent activiy log/template 04/index.html"
            }
        ]
    },


    {
        id: "dashboard",
        number: "03",
        icon: "◎",
        name: "AI Agent Dashboard",
        description:
            "Access and manage different AI agent dashboard interfaces.",

        templates: [
            {
                name: "Dashboard Four",
                path: "agent dashboard/four/index.html"
            },
            {
                name: "Dashboard One",
                path: "agent dashboard/one/index.html"
            },
            {
                name: "Dashboard Three",
                path: "agent dashboard/three/index.html"
            },
            {
                name: "Dashboard Two",
                path: "agent dashboard/two/index.html"
            }
        ]
    },


    {
        id: "agent-list",
        number: "04",
        icon: "▣",
        name: "Agent List",
        description:
            "Browse and manage available AI agents.",

        templates: [
            {
                name: "Template 1",
                path: "templates/agent-list/temp1/index.html"
            },
            {
                name: "Template 2",
                path: "templates/agent-list/temp2/index.html"
            },
            {
                name: "Template 3",
                path: "templates/agent-list/temp3/index.html"
            },
            {
                name: "Template 4",
                path: "templates/agent-list/temp4/index.html"
            }
        ]
    },


    {
        id: "agent-profile",
        number: "05",
        icon: "◇",
        name: "Agent Profile",
        description:
            "View detailed information about individual AI agents.",

        templates: [
            {
                name: "Template 5",
                path: "templates/agent-profile/temp5/index.html"
            },
            {
                name: "Template 6",
                path: "templates/agent-profile/temp6/index.html"
            },
            {
                name: "Template 7",
                path: "templates/agent-profile/temp7/index.html"
            },
            {
                name: "Template 8",
                path: "templates/agent-profile/temp8/index.html"
            }
        ]
    },


    {
        id: "agent-configuration",
        number: "06",
        icon: "⚙",
        name: "Agent Configuration",
        description:
            "Configure AI agent settings and behavior.",

        templates: [
            {
                name: "Template 9",
                path: "templates/agent-configuration/temp9/index.html"
            },
            {
                name: "Template 10",
                path: "templates/agent-configuration/temp10/index.html"
            },
            {
                name: "Template 11",
                path: "templates/agent-configuration/temp11/index.html"
            },
            {
                name: "Template 12",
                path: "templates/agent-configuration/temp12/index.html"
            }
        ]
    },


    {
        id: "agent-permissions",
        number: "07",
        icon: "◈",
        name: "Agent Permissions",
        description:
            "Manage permissions and access controls for agents.",

        templates: [
            {
                name: "Template 13",
                path: "templates/agent-permissions/temp13/index.html"
            },
            {
                name: "Template 14",
                path: "templates/agent-permissions/temp14/index.html"
            },
            {
                name: "Template 15",
                path: "templates/agent-permissions/temp15/index.html"
            },
            {
                name: "Template 16",
                path: "templates/agent-permissions/temp16/index.html"
            }
        ]
    },


    {
        id: "agent-task-queue",
        number: "08",
        icon: "≡",
        name: "Agent Task Queue",
        description:
            "Monitor and manage queued agent tasks.",

        templates: [
            {
                name: "Queue 1",
                path: "templates/agent-task-queue/queue 1/index.html"
            },
            {
                name: "Queue 2",
                path: "templates/agent-task-queue/queue 2/index.html"
            },
            {
                name: "Queue 3",
                path: "templates/agent-task-queue/queue 3/index.html"
            },
            {
                name: "Queue 4",
                path: "templates/agent-task-queue/queue 4/index.html"
            }
        ]
    },


    {
        id: "execution-history",
        number: "09",
        icon: "◷",
        name: "Agent Execution History",
        description:
            "Review completed and historical agent executions.",

        templates: [
            {
                name: "History 1",
                path:
                    "templates/agent-execution-history/history 1/index.html"
            },
            {
                name: "History 2",
                path:
                    "templates/agent-execution-history/history 2/index.html"
            },
            {
                name: "History 3",
                path:
                    "templates/agent-execution-history/history 3/index.html"
            },
            {
                name: "History 4",
                path:
                    "templates/agent-execution-history/history 4/index.html"
            }
        ]
    },


    {
        id: "execution-timeline",
        number: "10",
        icon: "⌁",
        name: "Agent Execution Timeline",
        description:
            "Visualize the timeline of agent execution events.",

        templates: [
            {
                name: "Timeline 1",
                path:
                    "templates/agent-execution-timeline/timeline 1/index.html"
            },
            {
                name: "Timeline 2",
                path:
                    "templates/agent-execution-timeline/timeline 2/index.html"
            },
            {
                name: "Timeline 3",
                path:
                    "templates/agent-execution-timeline/timeline 3/index.html"
            },
            {
                name: "Timeline 4",
                path:
                    "templates/agent-execution-timeline/timeline 4/index.html"
            }
        ]
    },


    {
        id: "error-retry",
        number: "11",
        icon: "⚠",
        name: "Agent Error & Retry",
        description:
            "Handle agent failures, errors and retry operations.",

        templates: [
            {
                name: "Template 1",
                path:
                    "templates/agent-error-retry/temp 1/index.html"
            },
            {
                name: "Template 2",
                path:
                    "templates/agent-error-retry/temp 2/index.html"
            },
            {
                name: "Template 3",
                path:
                    "templates/agent-error-retry/temp 3/index.html"
            },
            {
                name: "Template 4",
                path:
                    "templates/agent-error-retry/temp 4/index.html"
            }
        ]
    },


    {
        id: "approval",
        number: "12",
        icon: "✓",
        name: "Agent Approval Interface",
        description:
            "Review and approve AI agent actions and requests.",

        templates: [
            {
                name: "Approval 1",
                path:
                    "agent control/Agent Approval Interface/index.html"
            },
            {
                name: "Approval 2",
                path:
                    "agent control/Agent Approval Interface/template-2/index.html"
            },
            {
                name: "Approval 3",
                path:
                    "agent control/Agent Approval Interface/template-3/index.htm"
            },
            {
                name: "Approval 4",
                path:
                    "agent control/Agent Approval Interface/template-4/index.html"
            }
        ]
    },


    {
        id: "human-loop",
        number: "13",
        icon: "↔",
        name: "Human-in-the-Loop Workflow",
        description:
            "Manage workflows requiring human review and intervention.",

        templates: [
            {
                name: "Workflow 1",
                path:
                    "agent control/human-in-the-loop work flow/index.html"
            },
            {
                name: "Workflow 2",
                path:
                    "agent control/human-in-the-loop work flow/template-2/index.html"
            },
            {
                name: "Workflow 3",
                path:
                    "agent control/human-in-the-loop work flow/template-3/index.html"
            },
            {
                name: "Workflow 4",
                path:
                    "agent control/human-in-the-loop work flow/template-4/index.html"
            }
        ]
    },


    {
        id: "multi-agent",
        number: "14",
        icon: "⛓",
        name: "Multi-Agent Workflow",
        description:
            "Coordinate multiple AI agents in collaborative workflows.",

        templates: [
            {
                name: "Workflow 1",
                path:
                    "agent control/multi-agent workflow/template-1/index.html"
            },
            {
                name: "Workflow 2",
                path:
                    "agent control/multi-agent workflow/template-2/index.html"
            },
            {
                name: "Workflow 3",
                path:
                    "agent control/multi-agent workflow/template-3/index.html"
            },
            {
                name: "Workflow 4",
                path:
                    "agent control/multi-agent workflow/template-4/index.html"
            }
        ]
    }

];



/* =========================================================
   DOM
   ========================================================= */

const moduleList =
    document.getElementById("moduleList");

const templatePanels =
    document.getElementById("templatePanels");

const cursorGlow =
    document.getElementById("cursorGlow");

const navbar =
    document.getElementById("navbar");



/* =========================================================
   PAGE LOADER
   ========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            const loader =
                document.getElementById(
                    "pageLoader"
                );

            if (loader) {

                loader.classList.add(
                    "hidden"
                );

            }

        }, 700);

    }
);



/* =========================================================
   CREATE MODULE CARDS
   ========================================================= */

function createModules() {

    if (!moduleList) return;


    moduleList.innerHTML = "";


    modules.forEach(
        (module) => {


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "module";


            card.dataset.id =
                module.id;


            card.innerHTML = `

                <div class="module-spotlight"></div>

                <div class="module-shine"></div>


                <div class="module-number">

                    ${module.number}

                </div>


                <div class="module-icon">

                    ${module.icon}

                </div>


                <div class="module-info">

                    <h3>

                        ${module.name}

                    </h3>


                    <p>

                        ${module.description}

                    </p>

                </div>


                <div class="module-arrow">

                    ↗

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    showTemplates(
                        module.id
                    );

                }
            );


            moduleList.appendChild(
                card
            );

        }
    );


    enableCardEffects();

}



/* =========================================================
   CREATE TEMPLATE PANELS
   ========================================================= */

function createTemplatePanels() {

    if (!templatePanels) return;


    templatePanels.innerHTML = "";


    modules.forEach(
        (module) => {


            const panel =
                document.createElement(
                    "div"
                );


            panel.className =
                "template-panel";


            panel.id =
                `${module.id}-templates`;


            panel.style.display =
                "none";


            let cards = "";


            module.templates.forEach(
                (template,index) => {


                    const path =
                        encodeURI(
                            template.path
                        );


                    cards += `

                        <a
                            class="template-card"
                            href="./${path}"
                        >

                            <span class="template-number">

                                TEMPLATE
                                ${String(index + 1)
                                    .padStart(2,"0")}

                            </span>


                            <h3>

                                ${template.name}

                            </h3>


                            <p>

                                ${module.name}
                                interface.

                            </p>


                            <span class="template-link">

                                Open Template →

                            </span>

                        </a>

                    `;

                }
            );


            panel.innerHTML = `

                <div class="template-header">

                    <div>

                        <span class="section-tag">

                            ${module.number}
                            / TEMPLATES

                        </span>


                        <h2>

                            ${module.name}

                        </h2>

                    </div>


                    <button
                        class="close-btn"
                        type="button"
                    >

                        ✕ Close

                    </button>

                </div>


                <div class="template-grid">

                    ${cards}

                </div>

            `;


            const close =
                panel.querySelector(
                    ".close-btn"
                );


            close.addEventListener(
                "click",
                closeTemplates
            );


            templatePanels.appendChild(
                panel
            );

        }
    );

}



/* =========================================================
   SHOW TEMPLATES
   ========================================================= */

function showTemplates(id) {

    document
        .querySelectorAll(
            ".template-panel"
        )
        .forEach(
            panel => {

                panel.style.display =
                    "none";

            }
        );


    const panel =
        document.getElementById(
            `${id}-templates`
        );


    if (!panel) {

        console.error(
            "Template panel missing:",
            id
        );

        return;

    }


    panel.style.display =
        "block";


    setTimeout(
        () => {

            panel.scrollIntoView({

                behavior:
                    "smooth",

                block:
                    "start"

            });

        },
        100
    );

}



/* =========================================================
   CLOSE TEMPLATES
   ========================================================= */

function closeTemplates() {

    document
        .querySelectorAll(
            ".template-panel"
        )
        .forEach(
            panel => {

                panel.style.display =
                    "none";

            }
        );

}



/* =========================================================
   ADVANCED 3D CARD EFFECT
   ========================================================= */

function enableCardEffects() {

    const cards =
        document.querySelectorAll(
            ".module"
        );


    cards.forEach(
        card => {


            const spotlight =
                card.querySelector(
                    ".module-spotlight"
                );


            card.addEventListener(
                "mousemove",
                event => {


                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        ((y - centerY)
                        / centerY) * -7;


                    const rotateY =
                        ((x - centerX)
                        / centerX) * 7;


                    card.style.transform = `

                        perspective(1200px)

                        rotateX(${rotateX}deg)

                        rotateY(${rotateY}deg)

                        translateZ(25px)

                        translateY(-10px)

                        scale(1.015)

                    `;


                    if (spotlight) {

                        spotlight.style.left =
                            `${x}px`;

                        spotlight.style.top =
                            `${y}px`;

                    }

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        }
    );

}



/* =========================================================
   CURSOR GLOW
   ========================================================= */

function enableCursor() {

    if (!cursorGlow) return;


    let mouseX = 0;

    let mouseY = 0;

    let glowX = 0;

    let glowY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;

        }
    );


    function animate() {

        glowX +=
            (mouseX - glowX) * .12;

        glowY +=
            (mouseY - glowY) * .12;


        cursorGlow.style.left =
            `${glowX}px`;

        cursorGlow.style.top =
            `${glowY}px`;


        requestAnimationFrame(
            animate
        );

    }


    animate();

}



/* =========================================================
   PARTICLE ENGINE
   ========================================================= */

function initParticles() {

    const canvas =
        document.getElementById(
            "particleCanvas"
        );


    if (!canvas) return;


    const ctx =
        canvas.getContext("2d");


    let particles = [];


    function resize() {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;


        createParticles();

    }


    function createParticles() {

        particles = [];


        const amount =
            Math.min(
                90,
                Math.floor(
                    window.innerWidth / 18
                )
            );


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            particles.push({

                x:
                    Math.random()
                    * canvas.width,

                y:
                    Math.random()
                    * canvas.height,

                size:
                    Math.random()
                    * 1.8 + .4,

                speedX:
                    (Math.random() - .5)
                    * .25,

                speedY:
                    (Math.random() - .5)
                    * .25,

                alpha:
                    Math.random()
                    * .5 + .1

            });

        }

    }


    function draw() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        particles.forEach(
            particle => {


                particle.x +=
                    particle.speedX;


                particle.y +=
                    particle.speedY;


                if (
                    particle.x < 0 ||
                    particle.x > canvas.width
                ) {

                    particle.speedX *= -1;

                }


                if (
                    particle.y < 0 ||
                    particle.y > canvas.height
                ) {

                    particle.speedY *= -1;

                }


                ctx.beginPath();


                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );


                ctx.fillStyle =
                    `rgba(0,234,255,${particle.alpha})`;


                ctx.fill();

            }
        );


        connectParticles();


        requestAnimationFrame(
            draw
        );

    }


    function connectParticles() {

        for (
            let i = 0;
            i < particles.length;
            i++
        ) {


            for (
                let j = i + 1;
                j < particles.length;
                j++
            ) {


                const dx =
                    particles[i].x -
                    particles[j].x;


                const dy =
                    particles[i].y -
                    particles[j].y;


                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );


                if (
                    distance < 120
                ) {

                    const opacity =
                        .07 *
                        (1 - distance / 120);


                    ctx.beginPath();


                    ctx.moveTo(
                        particles[i].x,
                        particles[i].y
                    );


                    ctx.lineTo(
                        particles[j].x,
                        particles[j].y
                    );


                    ctx.strokeStyle =
                        `rgba(0,234,255,${opacity})`;


                    ctx.lineWidth =
                        .5;


                    ctx.stroke();

                }

            }

        }

    }


    window.addEventListener(
        "resize",
        resize
    );


    resize();

    draw();

}



/* =========================================================
   COUNTER ANIMATION
   ========================================================= */

function initCounters() {

    const counters =
        document.querySelectorAll(
            ".counter"
        );


    const observer =
        new IntersectionObserver(
            entries => {


                entries.forEach(
                    entry => {


                        if (
                            !entry.isIntersecting
                        ) {

                            return;

                        }


                        const element =
                            entry.target;


                        const target =
                            Number(
                                element.dataset.target
                            );


                        let current = 0;


                        const duration =
                            1300;


                        const start =
                            performance.now();


                        function update(
                            timestamp
                        ) {


                            const progress =
                                Math.min(
                                    (timestamp - start)
                                    / duration,
                                    1
                                );


                            const eased =
                                1 -
                                Math.pow(
                                    1 - progress,
                                    3
                                );


                            current =
                                Math.floor(
                                    eased * target
                                );


                            element.textContent =
                                current;


                            if (
                                progress < 1
                            ) {

                                requestAnimationFrame(
                                    update
                                );

                            }

                            else {

                                element.textContent =
                                    target;

                            }

                        }


                        requestAnimationFrame(
                            update
                        );


                        observer.unobserve(
                            element
                        );

                    }
                );

            },
            {
                threshold: .7
            }
        );


    counters.forEach(
        counter =>
            observer.observe(counter)
    );

}



/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function initReveal() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    const observer =
        new IntersectionObserver(
            entries => {


                entries.forEach(
                    entry => {


                        if (
                            entry.isIntersecting
                        ) {

                            const delay =
                                entry.target
                                    .dataset
                                    .delay ||
                                0;


                            setTimeout(
                                () => {

                                    entry.target
                                        .classList
                                        .add(
                                            "visible"
                                        );

                                },
                                Number(delay)
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: .12
            }
        );


    elements.forEach(
        element =>
            observer.observe(element)
    );

}



/* =========================================================
   NAVBAR SCROLL
   ========================================================= */

function initNavbar() {

    function update() {

        if (
            window.scrollY > 50
        ) {

            navbar.classList.add(
                "scrolled"
            );

        }

        else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        update,
        {
            passive: true
        }
    );


    update();

}



/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const links =
        document.querySelectorAll(
            ".nav-link"
        );


    const observer =
        new IntersectionObserver(
            entries => {


                entries.forEach(
                    entry => {


                        if (
                            entry.isIntersecting
                        ) {


                            links.forEach(
                                link => {

                                    link.classList
                                        .remove(
                                            "active"
                                        );

                                }
                            );


                            const active =
                                document.querySelector(
                                    `.nav-link[href="#${entry.target.id}"]`
                                );


                            if (active) {

                                active.classList
                                    .add(
                                        "active"
                                    );

                            }

                        }

                    }
                );

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(
        section =>
            observer.observe(section)
    );

}



/* =========================================================
   MAGNETIC BUTTONS
   ========================================================= */

function initMagneticButtons() {

    const buttons =
        document.querySelectorAll(
            ".magnetic"
        );


    buttons.forEach(
        button => {


            button.addEventListener(
                "mousemove",
                event => {


                    const rect =
                        button.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    button.style.transform =
                        `translate(${x * .12}px,${y * .12}px)`;

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "";

                }
            );

        }
    );

}



/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeTemplates();

        }

    }
);



/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

function scrollToModules() {

    const section =
        document.getElementById(
            "modules"
        );


    if (section) {

        section.scrollIntoView({

            behavior:
                "smooth",

            block:
                "start"

        });

    }

}


function scrollToSystem() {

    const section =
        document.getElementById(
            "system"
        );


    if (section) {

        section.scrollIntoView({

            behavior:
                "smooth",

            block:
                "start"

        });

    }

}



/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        createModules();


        createTemplatePanels();


        enableCursor();


        initParticles();


        initCounters();


        initReveal();


        initNavbar();


        initActiveNavigation();


        initMagneticButtons();


    }
);
