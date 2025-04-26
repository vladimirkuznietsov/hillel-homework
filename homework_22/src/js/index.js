import syncDots from './loop.js'
import '../styles/home.scss'

const images = [
    'https://cdn.pixabay.com/photo/2025/02/26/09/50/river-9432587_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/01/22/16/43/countryside-9352596_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/02/21/11/06/woman-9421843_1280.jpg',
    'https://cdn.pixabay.com/photo/2025/02/15/21/04/house-9409916_1280.jpg'
]

const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');
let currentImg = document.getElementById('current-img');
const dotsContainer = document.getElementById('dots');

images.forEach((image, index) => {
    let dot = document.createElement('div');
    dot.className = 'dot';
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        currentImg.src = images[index];
        syncDots(images, currentImg);
        updateButtons();
    });
    dotsContainer.appendChild(dot);
});

const updateButtons = () => {
    const currentIndex = images.indexOf(currentImg.src);
    if (currentIndex === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }

    if (currentIndex === images.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
};

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

    updateButtons();
    syncDots(images, currentImg);
});

prevBtn.addEventListener('click', () => {
    if(images.indexOf(currentImg.src) > 0) {
        currentImg.src = images[images.indexOf(currentImg.src) - 1];
        nextBtn.style.display = 'block';

        if(images.indexOf(currentImg.src) === 0) {
            prevBtn.style.display = 'none';
        }
    }

    syncDots(images, currentImg);
});


