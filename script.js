let expandButton = document.getElementById('expand-button');
let sidebar = document.getElementById('sidebar');

expandButton.addEventListener('click', function() {
    expandButton.classList.toggle('expanded');
    sidebar.classList.toggle('expanded');
});






const textArray = [  "Businesses",  "Websites",  "Graphics",  "Workflows"];

const textContainer = document.getElementById("animation-text");
const cursor = document.getElementById("animation-cursor");

let currentTextIndex = 0;

function typeText() {
    const currentText = textArray[currentTextIndex];
    const textLength = currentText.length;
    let i = 0;

    const intervalId = setInterval(() => {
        textContainer.textContent += currentText[i];
        i++;

        if (i === textLength) {
            clearInterval(intervalId);
            setTimeout(deleteText, 1000);
        }
    }, 120);
}

function deleteText() {
    const currentText = textArray[currentTextIndex];
    const textLength = currentText.length;

    const intervalId = setInterval(() => {
        textContainer.textContent = textContainer.textContent.slice(0, -1);

        if (textContainer.textContent === "") {
            clearInterval(intervalId);
            currentTextIndex++;
            if (currentTextIndex === textArray.length) {
                currentTextIndex = 0;
            }
            setTimeout(typeText, 1200);
        }
    }, 100);
}

typeText();

particlesJS("particles-js", {
    "particles": {
    "number": {
        "value": 507,
            "density": {
            "enable": true,
                "value_area": 1104.8066982851817
        }
    },
    "color": {
        "value": "#ffffff"
    },
    "shape": {
        "type": "circle",
            "stroke": {
            "width": 0,
                "color": "#ffffff"
        },
        "polygon": {
            "nb_sides": 3
        },
        "image": {
            "src": "img/github.svg",
                "width": 100,
                "height": 100
        }
    },
    "opacity": {
        "value": 0.5287289198936227,
            "random": false,
            "anim": {
            "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
        }
    },
    "size": {
        "value": 0,
            "random": true,
            "anim": {
            "enable": false,
                "speed": 0,
                "size_min": 0,
                "sync": false
        }
    },
    "line_linked": {
        "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
    },
    "move": {
        "enable": true,
            "speed": 5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
            "enable": false,
                "rotateX": 946.9771699587272,
                "rotateY": 1200
        }
    }
},
    "interactivity": {
    "detect_on": "canvas",
        "events": {
        "onhover": {
            "enable": true,
                "mode": "repulse"
        },
        "onclick": {
            "enable": true,
                "mode": "push"
        },
        "resize": true
    },
    "modes": {
        "grab": {
            "distance": 400,
                "line_linked": {
                "opacity": 1
            }
        },
        "bubble": {
            "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
        },
        "repulse": {
            "distance": 56.84540486109416,
                "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
    }
},
    "retina_detect": true
});





