let expandButton = document.getElementById('expand-button');
let sidebar = document.getElementById('sidebar');

expandButton.addEventListener('click', function() {
    expandButton.classList.toggle('expanded');
    sidebar.classList.toggle('expanded');
});

const TEXT_ROTATE_DELAY = 2000;
const TEXT_ROTATE_ITEMS = [
    "This is the first piece of text.",
    "Here is the second piece of text.",
    "This is the third text item in the rotation.",
    "Number four in the rotation of text items.",
    "And this is the fifth and final piece of text in the rotation."
];
let textRotateIndex = 0;
let textRotateTimeout;

function rotateText() {
    document.querySelector('.text-rotate').textContent = '';
    let currentText = TEXT_ROTATE_ITEMS[textRotateIndex];
    let i = 0;
    textRotateTimeout = setInterval(() => {
        if (i < currentText.length) {
            document.querySelector('.text-rotate').textContent += currentText.charAt(i);
            i++;
        } else {
            clearInterval(textRotateTimeout);
            textRotateTimeout = setTimeout(() => {
                deleteText();
            }, TEXT_ROTATE_DELAY);
        }
    }, 50);
    textRotateIndex = (textRotateIndex + 1) % TEXT_ROTATE_ITEMS.length;
}

function deleteText() {
    let currentText = document.querySelector('.text-rotate').textContent;
    let i = currentText.length - 1;
    textRotateTimeout = setInterval(() => {
        if (i >= 0) {
            let newText = currentText.slice(0, i);
            document.querySelector('.text-rotate').textContent = newText;
            i--;
        } else {
            clearInterval(textRotateTimeout);
            textRotateTimeout = setTimeout(() => {
                rotateText();
            }, TEXT_ROTATE_DELAY);
        }
    }, 30);
}

rotateText();