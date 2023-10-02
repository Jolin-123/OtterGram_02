var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
// chapter 7 step 2
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';

var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail'; //adding detail calss here
// chapter 7 step 3
var TINY_EFFECT_CLASS ='is-tiny';
var ESC_KEY = "Escape"; //3



// using query to get image and title of the thumb 
function setDetails(imageUrl, titleText) {
  'use strict';

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

// function get back a tag with its' attributes 
// get back first ThumbNail's image' url 
// 'images/otter1.jpg'
function imageFromThumb(thumbnail) {  
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}


function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function (event) {
    event.preventDefault();
    // after click this even happen too 
    setDetailsFromThumb(thumb);
    //4
    showDetails();
  });
}
// after click , addThumbClickHandler call the event lisener for thumb nail pic (small pic)
// and call setDetilsFormThumb(thumb), set the same atrribute to the main picture
// ******** adding this evenLisener to each thumb nail picture

function getThumbnailsArray() {
  'use strict';

  // return a "list" of all query element 
  // not array, we need to convert it to an array 
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR); 
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

//1
// function hideDetails() {
//   'use strict';
//   document.body.classList.add(HIDDEN_DETAIL_CLASS);
// } // adding a class in classList  **

// //4 add tiny --> wait ---> remove
// function showDetails() {
//   'use strict';
//     // chapter step3
//     document.body.classList.remove(HIDDEN_DETAIL_CLASS);

//   var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
//   // chapter7 step4
//   frame.classList.add(TINY_EFFECT_CLASS);

//   // chapter7 step5 TimeOut function
//   setTimeout(function () {
//     frame.classList.remove(TINY_EFFECT_CLASS);
//     }, 50); 
// }


function showDetails() {
  'use strict';
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function () {
  frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
  }


  //2
function addKeyPressHandler() {
  'use strict';
  document.body.addEventListener('keyup', function (event) {
  event.preventDefault();
  console.log(event.key);
  if (event.key === ESC_KEY) {
    hideDetails();
    }
  });
  
  }

  
//3
function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler() ; //*** where will the handler be ?  */
}

initializeEvents();

