const openFormBtn = document.getElementById('feedbackBtn');
const closeFormBtn = document.getElementById('closeFormBtn');
const feedbackModal = document.getElementById('feedbackModal');
const mainContent = document.getElementById('mainContent');
const feedbackForm = document.getElementById('feedbackForm');
const successMessage = document.getElementById('successMessage');

openFormBtn.addEventListener('click', () => {
    feedbackModal.classList.add('show');
    mainContent.classList.add('blur'); // Add blur effect to main content
  });
  
  // Close the feedback form
  closeFormBtn.addEventListener('click', () => {
    feedbackModal.classList.remove('show');
    mainContent.classList.remove('blur'); // Remove blur effect
  });
  
  // Close form when clicking outside of the form content
  window.addEventListener('click', (e) => {
    if (e.target === feedbackModal) {
      feedbackModal.classList.remove('show');
      mainContent.classList.remove('blur');
    }
  });
  
  // Handle form submission
  feedbackForm.addEventListener('submit', async(e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    // You can process the form data here (e.g., send it to a server)
  
    // Show the success message
    successMessage.style.display = 'block';
    successMessage.style.opacity = '1'; // Make the message visible
  
    // Hide the success message after a delay
    setTimeout(() => {
      feedbackModal.classList.remove('show');
      mainContent.classList.remove('blur'); // Remove blur effect
      successMessage.style.display = 'none'; // Hide the message
      successMessage.style.opacity = '0'; // Reset opacity
      feedbackForm.reset(); // Reset form fields
    }, 900); // Adjust time (2000 ms = 2 seconds) as needed
    
    
   const name= document.getElementById('name').value;
   const email= document.getElementById('email').value;
   const message= document.getElementById('message').value;
   await fetch('/api/feedBackForm',{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify({name,email,message})
   });
   feedbackForm.reset();
  });

