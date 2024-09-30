let mainButton = document.getElementById('btnn');
let slider = document.getElementById('slider');

// When clicking on the button, slide in and modify border-radius after sliding
mainButton.addEventListener('click', () => {
    // Slide the menu in and start with curved corners
    slider.style.right = "0"; 
    slider.style.borderTopLeftRadius = "90%"; 
    slider.style.borderBottomLeftRadius = "90%"; 

    // After 200ms, make the borders square
    setTimeout(() => {
        slider.style.borderTopLeftRadius = "0%"; 
        slider.style.borderBottomLeftRadius = "0%"; 
    }, 80); // Adjusted the time to make the curve visible
});

// When the close button is clicked, first add the curve, then slide out
document.getElementById('closeBtn').addEventListener('click', () => {
    // First, restore the curved borders
    slider.style.borderTopLeftRadius = "90%"; 
    slider.style.borderBottomLeftRadius = "90%";

    // Then slide the menu out after a small delay
    setTimeout(() => {
        slider.style.right = "-900px"; // Slide the menu out after the curve is applied
    }, 50); // Wait for the curve to appear before sliding out
});