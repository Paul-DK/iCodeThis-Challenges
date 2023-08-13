// Read More Button

document.querySelector(".morebutton").addEventListener("click", function() {
  var readMoreDiv = document.querySelector(".read-more");
  var snippet = document.querySelector(".read-more .snippet");
  
  if (readMoreDiv.style.height === "0px" || readMoreDiv.style.height === "") {
    readMoreDiv.style.height = snippet.offsetHeight + "px";
    this.textContent = 'read less';
  } else {
    readMoreDiv.style.height = "0px";
    this.textContent = 'read more';
  }
});

// Share Button

var modal = document.getElementById("shareModal");
var btn = document.querySelector(".share");
var span = document.querySelector(".close-modal");

btn.onclick = function() {
  modal.style.display = "block";
  setTimeout(function() { modal.classList.add('show'); }, 50); // Add the class after a short delay
}

span.onclick = function() {
  modal.classList.remove('show');
  setTimeout(function() { modal.style.display = "none"; }, 500); // Remove the display after the transition
}

window.onclick = function(event) {
  if (event.target === modal) {
    modal.classList.remove('show');
    setTimeout(function() { modal.style.display = "none"; }, 500); // Remove the display after the transition
  }
}

// Close Button

const closeButton = document.querySelector('.close');
const card = document.querySelector('.card');
const body = document.querySelector('body');

const fadeOut = () => {
  card.classList.add('fade-out');
  body.classList.add('fade-out');
};

const fadeIn = () => {
  card.classList.remove('fade-out');
  body.classList.remove('fade-out');
};

closeButton.addEventListener('click', () => {
  fadeOut();
  
  setTimeout(() => {
    card.style.display = 'none';
  }, 1000);

  setTimeout(() => {
    card.style.display = 'flex';
    fadeIn();
  }, 3000);
});

// Copy Share Link to Clipboard

document.getElementById('copyButton').addEventListener('click', function() {
  var copyText = document.getElementById('shareLink');
  copyText.select();
  navigator.clipboard.writeText(copyText.value)
    .then(() => {
      alert('Link copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy link: ', err);
    });
});