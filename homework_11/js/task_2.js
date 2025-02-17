const text = document.getElementById('text-block');
const btn = document.getElementById('btn');
let originalColor = true;

btn.addEventListener('click', function () {
    if (originalColor) {
        text.style.color = 'magenta';
    } else {
        text.style.color = 'crimson';
    }
    originalColor = !originalColor;
});