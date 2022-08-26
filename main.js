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
