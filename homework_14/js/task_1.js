const images = [
    'https://cdn.pixabay.com/photo/2025/02/26/09/50/river-9432587_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/01/22/16/43/countryside-9352596_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/02/21/11/06/woman-9421843_1280.jpg'
]

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');
let currentImg = document.getElementById('current-img');

nextBtn.addEventListener('click', () => {
    if(images.indexOf(currentImg.src) !== images.length - 1) {
        currentImg.src = images[images.indexOf(currentImg.src) + 1];

        if (images.indexOf(currentImg.src) === images.length - 1) {
            nextBtn.style.display = 'none';
        }
    }

    if(images.indexOf(currentImg.src) > 0) {
        prevBtn.style.display = 'block';
    }
});

prevBtn.addEventListener('click', () => {
    if(images.indexOf(currentImg.src) > 0) {
        currentImg.src = images[images.indexOf(currentImg.src) - 1];
        nextBtn.style.display = 'block';

        if(images.indexOf(currentImg.src) === 0) {
            prevBtn.style.display = 'none';
        }
    }
});

