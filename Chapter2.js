const photos = ["0201.jpg", "0202.jpg", "0203.jpg", "0204.jpg", "0205.jpg", "0206.jpg", "0207.jpg", "0208.jpg", "0209.jpg", "0210.jpg", "0211.jpg"];
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
    window.location.href = 'Quiz2.html';
}

document.addEventListener("DOMContentLoaded", showPhoto);
