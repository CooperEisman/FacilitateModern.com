const textArray = [  "Businesses",  "Websites",  "Graphics",  "Workflows"];

const textContainer = document.getElementById("animation-text");

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
            setTimeout(deleteText, 1500);
        }
    }, 120);
}

function deleteText() {
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
    }, 18);
}

typeText();