const photos = ["0101.jpg", "0102.jpg", "0103.jpg", "0104.jpg"];
let currentPhotoIndex = 0;

function showPhoto() {
    const photoElement = document.getElementById("photo");
    photoElement.src = photos[currentPhotoIndex];

    // Show/hide test button based on the current photo index
    const testButton = document.getElementById("testButton");
    testButton.style.display = currentPhotoIndex === photos.length - 1 ? "block" : "none";
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    showPhoto();
}

function previousPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    showPhoto();
}

function openTestPage() {
    // Replace 'test_page.html' with the actual source of the test page
    window.location.href = 'Quiz1.html';
}

document.addEventListener("DOMContentLoaded", showPhoto);
