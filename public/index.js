function moveSlider(buttonNumber) {
    
    
    setTimeout(() => {
        if (buttonNumber === 'Work.html') {
            document.querySelector('.workpage').style.display = 'block';
            document.querySelector('.playpage').style.display = 'none';
        } else if (buttonNumber === 'Play.html') {
            document.querySelector('.workpage').style.display = 'none';
            document.querySelector('.playpage').style.display = 'block';
        }
    }
    )}
