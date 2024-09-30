// alert("hello world");

document.addEventListener("DOMContentLoaded", function () {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.5, // 50% of the element is visible
        rootMargin: "0px 0px -50px 0px" // triggers a little before the element is fully in view
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible'); // add animation class when in view
            } else {
                entry.target.classList.remove('fade-in-visible'); // remove animation class when out of view
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
const button=document.getElementById('btn2');
const button1=document.getElementById('btn1');
// const rainbowColors = [
//     '#FF0000', // Red
//     '#FF7F00', // Orange
//     '#FFFF00', // Yellow
//     '#00FF00', // Green
//     '#0000FF', // Blue
//     '#4B0082', // Indigo
//     '#8B00FF'  // Violet
// ];
function moveSlider(buttonNumber) {
    const sliderBg = document.querySelector('.slider-bg');
    const frame = document.getElementById('contentFrame');
    const loadScreen = document.querySelector('.load-screen');

    // Set up loading screen appearance
    loadScreen.classList.add('slide-in');
    loadScreen.style.borderTopLeftRadius = '0%';
    loadScreen.style.borderTopRightRadius = '0%';
    
    // Show loading screen
    loadScreen.style.display = 'block';

    

        if (buttonNumber === 'Work.html') {
            // Move the background to Button 1
            sliderBg.style.transform = 'translateX(0)';
            button1.style.opacity = '0.65'; 
            button.style.opacity = '1'; 
            button1.style.fontWeight = 'bold';
            button.style.fontWeight = 'normal';
            button.style.color = 'black';
           frame.src=buttonNumber;
            // Show workpage and hide playpage
            document.querySelector('.workpage').style.display = 'block';
            document.querySelector('.playpage').style.display = 'none';
        } else if (buttonNumber === 'Play.html') {
            // Move the background to Button 2
            sliderBg.style.transform = 'translateX(100%)';
            button.style.backgroundImage = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)';
            button1.style.fontWeight = 'normal'; 
            button.style.color = 'transparent'; // Hide original color
            button.style.backgroundClip = 'text'; // Clip the gradient to the text
            button1.style.opacity = '1'; 
            button.style.fontWeight = 'bold'; 
            button.style.opacity = '0.65'; 
             frame.src=buttonNumber;
            // Show playpage and hide workpage
            document.querySelector('.workpage').style.display = 'none';
            document.querySelector('.playpage').style.display = 'block';
        }

        // Hide loading screen after content is loaded
        loadScreen.style.display = 'none';
    // }, 3000); // Delay to simulate loading time
}


document.addEventListener("DOMContentLoaded", function() {
    // Simulate a delay for demonstration (you can remove or adjust this in actual usage)
    const welcomeMessages = [
        "Welcome",      // English
        "Bienvenido",   // Spanish
        "Bienvenue",    // French
        "Willkommen",   // German
        "Benvenuto",    // Italian
        "欢迎",         // Chinese
        "ようこそ",      // Japanese
        "환영합니다",     // Korean
        "Добро пожаловать", // Russian
        "Bem-vindo",    // Portuguese
        "مرحبا",         // Arabic
        "स्वागत हे",      // Hindi
      ];
    
      let messageIndex = 0;
      const welcomeMessageElement = document.getElementById('welcomeMessage');
    
      // Function to update the welcome message
      function updateWelcomeMessage() {
        welcomeMessageElement.textContent = welcomeMessages[messageIndex];
        messageIndex = (messageIndex + 1) % welcomeMessages.length; // Loop through the array
      }
    
      // Update the message every 1 second
      const messageInterval = setInterval(updateWelcomeMessage, 200);
    setTimeout(function() {
      // Slide up the loading screen
      document.querySelector('.loading-screen').classList.add('slide-up');
      
      document.querySelector('.loading-screen').style.borderBottomLeftRadius = '50% 100px';
      document.querySelector('.loading-screen').style.borderBottomRightRadius = '50% 100px';
      setTimeout(function() {
        document.querySelector('.loading-screen').style.display='none';
        document.querySelector('.main-content').style.display = 'block';
        // document.body.style.overflow = 'auto'; // Re-enable scrolling if needed
        clearInterval(messageInterval);
      }, 500); // This timeout matches the CSS transition duration (0.5s)
      
    }, 3000); // Adjust 3000 milliseconds (3 seconds) as needed
  });
  
  document.addEventListener('DOMContentLoaded',()=>
{
    setTimeout(() => {
        
        document.querySelector('.load-screen').classList.add('.slide-in');
    
        document.querySelector('.load-screen').style.borderTopLeftRadius=' 0%';
        document.querySelector('.load-screen').style.borderTopRightRadius='0%';
        setTimeout(() => {
            document.querySelector('.load-screen').style.dipslay='block';
        }, 6000);
    }, 6000);
})


// function cycleRainbowColors(element) {
//     let i = 0;
//     const interval = setInterval(() => {
//         element.style.color = rainbowColors[i % rainbowColors.length]; // Cycle through the rainbow colors
//         i++;
//         if (i === rainbowColors.length) {
//             clearInterval(interval); // Stop after one complete cycle
//         }
//     }, 300); // Change color every 300 milliseconds
// }
// if(document.getElementById('btn1').innerText==='WORK')
// {
// moveSlider('WORK');
// }
// else{
// moveSlider('PLAY');
// }


const packets = document.querySelectorAll('.packet');
const intro = document.getElementById('intro1');
let isScrolling = false;


let lastMouseX = null;
let lastMouseY = null;

intro.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  if (lastMouseX !== null && lastMouseY !== null) {
    // Calculate the change in mouse position
    const deltaX = mouseX - lastMouseX;
    const deltaY = mouseY - lastMouseY;

    // Move each packet based on the mouse movement
    packets.forEach((packet, index) => {
      // Get the current transform values
      const transform = getComputedStyle(packet).transform;
      let matrix = transform === 'none' ? [1, 0, 0, 1, 0, 0] : transform.match(/matrix\(([^)]+)\)/)[1].split(', ').map(Number);

      // Update the position of the packet
      const newX = matrix[4] + deltaX;
      const newY = matrix[5] + deltaY;

      // Apply the updated transform to the packet
      packet.style.transform = `matrix(${matrix[0]}, ${matrix[1]}, ${matrix[2]}, ${matrix[3]}, ${newX}, ${newY})`;
    });
  }

  // Update the last mouse position
  lastMouseX = mouseX;
  lastMouseY = mouseY;
});

intro.addEventListener('mouseleave', () => {
  packets.forEach((packet) => {
    // Reset each packet's position
    packet.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
  });

  // Reset mouse position tracking
  lastMouseX = null;
  lastMouseY = null;
});

window.addEventListener("scroll", () => {
    if (!isScrolling) {
        isScrolling = true;
        packets.forEach((packet, index) => {
            // Move packets out quickly when scrolling down
            switch (index) {
                case 0:
                    packet.style.transform = 'translateX(300px)';
                    break;
                case 1:
                    packet.style.transform = 'translateY(300px)';
                    break;
                case 2:
                    packet.style.transform = 'translate(200px, 200px)';
                    break;
                case 3:
                    packet.style.transform = 'translateX(-300px)';
                    break;
                case 4:
                    packet.style.transform = 'translateY(-300px)';
                    break;
                case 5:
                    packet.style.transform = 'translate(200px, -200px)';
                    break;
                case 6:
                    packet.style.transform = 'translate(-200px, 200px)';
                    break;
                case 7:
                    packet.style.transform = 'translate(-200px, -200px)';
                    break;
                case 8:
                    packet.style.transform = 'rotate(720deg)';
                    break;
                case 9:
                    packet.style.transform = 'scale(2)';
                    break;
                case 10:
                    packet.style.transform = 'scale(0.25)';
                    break;
                case 11:
                    packet.style.transform = 'translateX(300px) rotate(90deg)';
                    break;
                case 12:
                    packet.style.transform = 'translateY(300px) rotate(-90deg)';
                    break;
                case 13:
                    packet.style.transform = 'translateX(-300px) rotate(180deg)';
                    break;
                case 14:
                    packet.style.transform = 'translateY(-300px) rotate(-180deg)';
                    break;
                case 15:
                    packet.style.transform = 'translateY(-300px) rotate(60deg)';
                    break;
                case 16:
                    packet.style.transform = 'translateY(100px) rotate(-60deg)';
                    break;
                case 17:
                    packet.style.transform = 'translateY(300px) rotate(-120deg)';
                    break;
                case 18:
                    packet.style.transform = 'translateY(-380px) rotate(180deg)';
                    break;
            }
        });
    }
    clearTimeout(window.scrollTimeout);
    window.scrollTimeout = setTimeout(() => {
        isScrolling = false;
        packets.forEach((packet) => {
            // Return packets to their original positions after scrolling stops
            packet.style.transform = 'translate(0, 0)';
        });
    }, 50); // Adjust the timeout duration as needed
});


// button.addEventListener('click',()=>{
//     button.style.color='red';
// })


