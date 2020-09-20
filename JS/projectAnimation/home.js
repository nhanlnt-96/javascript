var sliderPosition = 0;

function handleSliderMoving(movingType) {
    const movingContainer = document.getElementById('moving-container');
    const wrapperWidth = movingContainer.offsetWidth;
    
    if (movingType === 'left') {
        sliderPosition += wrapperWidth;
        if (sliderPosition > 0) {
            sliderPosition = -2160;
        }
    } else {
        sliderPosition -= wrapperWidth;
        if (sliderPosition < -2160) {
            sliderPosition = 0;
        }
    }

    movingContainer.style.left = `${sliderPosition}px`;
}