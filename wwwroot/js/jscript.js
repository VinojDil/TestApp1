
document.addEventListener("DOMContentLoaded", function () {
    const videoElement = document.getElementById("videoElement");
    const fallbackImage = document.getElementById("fallbackImage");

    // Check if video source is valid
    videoElement.onerror = function () {
        videoElement.classList.add("d-none"); // Hide video if not valid
        fallbackImage.classList.remove("d-none"); // Show fallback image
    };

    // If video element has no source
    if (!videoElement.querySelector("source").getAttribute("src")) {
        videoElement.classList.add("d-none"); // Hide video
        fallbackImage.classList.remove("d-none"); // Show fallback image
    }
});

// JavaScript to change button to Thank you message
document.getElementById('findOutMoreButton').addEventListener('click', function () {
    const emailInput = document.getElementById('emailInput');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const findOutMoreButton = document.getElementById('findOutMoreButton');

    // If input is not empty, change button to "Thank you"
    if (emailInput.value) {
        // Hide button and input, show thank you message
        findOutMoreButton.style.display = 'none';
        emailInput.style.display = 'none';
        thankYouMessage.style.display = 'block';
    }
});

//Changing text boxes starting positions
window.onload = function () {
    // Function to adjust text boxes based on their height
    adjustTextBoxesPosition();
};

/*
function adjustTextBoxesPosition() {
    // Get the height of each box
    var box1 = document.getElementById('box1');
    var box2 = document.getElementById('box2');
    var box3 = document.getElementById('box3');
    var box4 = document.getElementById('box4');

    var box1Height = box1.offsetHeight;
    
    // Position second box (box2) after the first box + 5% gap
    var topBox2 = (box1.offsetTop + box1Height + window.innerHeight * 0.05);
    box2.style.top = topBox2 + 'px';

    // Position third box (box3) after the second box + 5% gap
    var box2Height = box2.offsetHeight;
    var topBox3 = (topBox2 + box2Height + window.innerHeight * 0.25);
    box3.style.top = topBox3 + 'px';

    // Position fourth box (box4) after the third box + 5% gap
    var box3Height = box3.offsetHeight;
    var topBox4 = (topBox3 + box3Height + window.innerHeight * 0.05);
    box4.style.top = topBox4 + 'px';
}
*/