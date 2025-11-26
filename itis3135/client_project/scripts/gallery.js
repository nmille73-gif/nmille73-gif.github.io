//Creates objects out of the images
const images = [
    { src: 'images/girl_brutal.jpg', alt: 'Girl Brutal', title: 'Girl Brutal' },
    { src: 'images/tristinza.jpg', alt: 'Tristinza Band', title: 'Tristinza Band' },
    { src: 'images/lovin_life_1.jpg', alt: "Lovin' Life Music Fest", title: "Lovin' Life Music Fest" },
    { src: 'images/therapy_dog.jpg', alt: 'Therapy Dog', title: 'Therapy Dog' },
    { src: 'images/skaterboard_1.jpg', alt: 'Skateboarder', title: 'Skateboarder' },
    { src: 'images/guitar.jpg', alt: 'Guitar', title: 'Guitar' },
    { src: 'images/skateboard_2.jpg', alt: 'Skateboarder 2', title: 'Skateboarder 2' },
    { src: 'images/bmx.jpg', alt: 'BMX Rider', title: 'BMX Rider' },
    { src: 'images/hopscotch_2.jpg', alt: 'Hopscotch Music Fest', title: 'Hopscotch Music Fest' }
];
//Establishes an index
let currentIndex = 0;
//Creates variables for images, indexes, and the buttons
const galleryImg = document.getElementById('gallery-img');
const currentIndexSpan = document.getElementById('current-index');
const totalImagesSpan = document.getElementById('total-images');
const imageTitleDiv = document.getElementById('image-title');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const thumbnailContainer = document.getElementById('thumbnails');
//Sets total number of images
totalImagesSpan.textContent = images.length;

//Updates the active window for the thumbnail by using the current index to grab the corresponding thumbnail image
function updateActiveThumbnail() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, idx) => {
        if (idx === currentIndex) {
            thumb.classList.add('thumbnail-active');
        } else {
            thumb.classList.remove('thumbnail-active');
        }
    });
}

//Shows the image in the popup box and calls updateActiveThumbnail to ensure the thumbnail matches active image
function showImage(index) {
    currentIndex = index;
    galleryImg.src = images[index].src;
    galleryImg.alt = images[index].alt;
    currentIndexSpan.textContent = index + 1;
    imageTitleDiv.textContent = images[index].title;
    updateActiveThumbnail();
}

//Creates an thumbnail for each image and adds them to a list of thumbnails to be iterated through
function createThumbnails() {
    images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.className = 'thumbnail';
        if (index === 0) img.classList.add('thumbnail-active');
        
        img.onclick = () => showImage(index);
        thumbnailContainer.appendChild(img);
    });
}

//Programs next button to go to next image when clicked
nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
};

//Programs previous button to go back to the last image when clicked
prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
};

//Programs next and previous buttons to also respond to arrow keys in addition to clicks
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextBtn.click();
    } else if (e.key === 'ArrowLeft') {
        prevBtn.click();
    }
});

createThumbnails();
        showImage(0);

