const synchronizeDotsWithImage = (images, picture) => {
    const dots = document.getElementsByClassName('dot');
    const currentIndex = images.indexOf(picture.src);

    for(let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    dots[currentIndex].classList.add('active');
} 

export default synchronizeDotsWithImage;