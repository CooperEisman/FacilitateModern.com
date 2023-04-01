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