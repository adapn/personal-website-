document.addEventListener("DOMContentLoaded", () => {
    const typingTextElement = document.getElementById("typing-text");
    const textArray = [
        "Embedded Systems",
        "Digital Design",
        "PCB Design",
        "Electronics",
        "Hardware Design",
        "High Voltage Systems",
        "Power Electronics"
    ];
    const typingSpeed = 100; // Typing speed in milliseconds
    const eraseSpeed = 50; // Erasing speed in milliseconds
    const delayBetweenTexts = 1500; // Delay before starting to erase

    let textIndex = 0; // Current text index
    let charIndex = 0; // Current character index
    let isErasing = false;

    function typeText() {
        const currentText = textArray[textIndex];

        if (!isErasing) {
            // Typing effect
            typingTextElement.textContent += currentText.charAt(charIndex);
            charIndex++;

            if (charIndex === currentText.length) {
                // Finished typing the current text
                isErasing = true;
                setTimeout(typeText, delayBetweenTexts);
            } else {
                setTimeout(typeText, typingSpeed);
            }
        } else {
            // Erasing effect
            typingTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;

            if (charIndex === 0) {
                // Finished erasing, move to the next text
                isErasing = false;
                textIndex = (textIndex + 1) % textArray.length; // Loop through the text array
                setTimeout(typeText, typingSpeed);
            } else {
                setTimeout(typeText, eraseSpeed);
            }
        }
    }

    // Start the typing animation
    typeText();
});
