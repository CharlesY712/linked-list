var enterButton = document.querySelector('#enter');
var bookmarkList = document.querySelector('#bookmark-list');
var readButton = document.querySelector('#read-button');
var deleteButton = document.querySelector('#delete-button');
var bookmark = document.querySelector('.bookmark');
var websiteTitle = document.querySelector('#website-title');
var websiteURL = document.querySelector('#website-url');


// When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section
function createTab() {

  var article = document.createElement('article');
  article.setAttribute('class', 'bookmark');

  var h2 = document.createElement('h2');
  h2.innerText = websiteTitle.value;

  var hr1 = document.createElement('hr');
  hr1.setAttribute('id', 'horizontal-line');

  var a = document.createElement('a');
  a.innerHTML = websiteURL.value;
  a.href = 'https://' + websiteURL.value;
  a.target = '_blank';

  var hr2 = document.createElement('hr');
  hr2.setAttribute('id', 'horizontal-line');

  createReadButton();

  createDeleteButton();

  article.appendChild(h2);
  article.appendChild(hr1);
  article.appendChild(a);
  article.appendChild(hr2);
  article.appendChild(read);
  article.appendChild(deleteButton);


bookmarkList.insertBefore(article, bookmarkList.firstChild);
}

function createDeleteButton() {
  deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'bookmark-buttons');
  deleteButton.setAttribute('id', 'delete-button');
  deleteButton.innerText = "Delete";
}

enterButton.addEventListener('click', function(event) {
  event.preventDefault();
  createTab();
  websiteTitle.value = '';
  websiteTitle.focus();
  websiteURL.value = '';
  // enterButton.disabled = true;
});

bookmarkList.addEventListener('click', function(event) {
  if (event.target.id === 'read-button') {
    console.log('read button pressed');
    event.target.parentNode.classList.toggle('read');
    event.target.classList.toggle('read-button-clicked');
  }
})



bookmarkList.addEventListener('click', function(event) {
  if (event.target.id === 'delete-button') {
    console.log('remove button pressed')
  }
})


// When the user clicks on the “Mark as Read” button:


function createReadButton () {

  read = document.createElement('button');
  read.setAttribute('class', 'bookmark-buttons');
  read.setAttribute('id', 'read-button');
  read.innerText = "Read";
}
// websiteList.addEventListener('click', function(event) {
//   console.log(event)

//   if (event.target.classList.contains('read') {
//     websiteTab.setAttribute('class', 'bookmark');
//     readButton.removeAttribute('id', 'read-button-clicked');
//   } else {
//     websiteTab.setAttribute('class', 'read');
//     readButton.setAttribute('id', 'read-button-clicked');
//   }
// });
// }


  // A class of .read should be added to the bookmark
  
  // If it already has the class of .read, it should be removed

// When the user clicks on the “Remove” button, the link should be removed from the page
