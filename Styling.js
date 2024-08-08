//Task 2:Writing JavaScript code to dynamically change the color of the box element when clicked.

function changeColor() {
    const box = document.getElementById('box');
    box.style.backgroundColor = "darkgreen";
}

//Task 3: Implementing additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.

function hoverEffect(element) {
    element.style.backgroundColor = 'pink';
}

function removeHoverEffect(element) {
    element.style.backgroundColor = 'cornflowerblue';
}

function changeButtonColor(button) {
    button.style.backgroundColor = button.style.backgroundColor === 'firebrick' ? 'yellow' : 'firebrick';
}

function changeTextStyle() {
    const text = document.getElementById('text');
    text.style.fontStyle = text.style.fontStyle === 'italic' ? 'normal' : 'italic';
}
