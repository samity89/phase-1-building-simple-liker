// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likeButton = document.querySelectorAll('span.like-glyph')
// const errorModal = document.querySelector("#modal")

function likeListener(likeButton) {
  likeButton.addEventListener("click", (e) => {
    mimicServerCall()
    .then(() => {
      if (e.target.innerText === EMPTY_HEART) {
        e.target.innerText = FULL_HEART
        e.target.className = "activated-heart"
      }
      else if (e.target.innerText === FULL_HEART) {
        e.target.innerText = EMPTY_HEART
        e.target.className = ""
      }
    })
    .catch((error) => {
      const errorModal = document.querySelector("#modal")    
      errorModal.className = ""
      setTimeout(() => errorModal.className = "hidden", 3000);
      console.log(errorModal)
    })
  })
}

addEventListener("DOMContentLoaded", likeButton.forEach(likeListener))

// When the user clicks on an empty heart
// - Invokes mimicServerCall
// - When the server returns a success status:
// --- Change const from EMPTY_HEART to FULL_HEART
// --- Add the .activated-heart class to make the heart appear red
// - Account for when the "server" returns a failure status. Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
// --- Displays error modal by removing the hidden class
// --- Displays server error message in the modal
// --- Uses setTimeOut function to hide the modal (restore the hidden .class)
// When the user clicks on a full heart
// - Change const FULL_HEART back to EMPTY_HEART
// - remove the .activated-heart class
// Only manipulate the DOM once the server request responds. Do not make the heart full until you're inside a successful .then block.
// eventListener "DOMContentLoaded"

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
