var enterButton = document.querySelector('#enter');
var websiteList = document.querySelector('#website-list');
var readButton = document.querySelector('#read-button');
var deleteButton = document.querySelector('#delete-button');
var websiteTab = document.querySelector('.website-tab');
var websiteTitle = document.querySelector('#website-title');
var websiteURL = document.querySelector('#website-url');


// When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section
function createTab() {

  var article = document.createElement('article');
  article.setAttribute('class', 'website-tab');

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

  var read = document.createElement('button');
  read.setAttribute('class', 'website-tab-buttons');
  read.innerText = "Read";

  createDeleteButton();

  article.appendChild(h2);
  article.appendChild(hr1);
  article.appendChild(a);
  article.appendChild(hr2);
  article.appendChild(read);
  // article.appendChild(deleteButton);


websiteList.insertBefore(article, websiteList.firstChild);

function createDeleteButton() {
  deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'website-tab-buttons');
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



// When the user clicks on the “Mark as Read” button:

readButton.addEventListener('click', function() {
  if (websiteTab.classList.contains('read')) {
    websiteTab.setAttribute('class', 'website-tab');
    readButton.removeAttribute('id', 'read-button-read');
  } else {
    websiteTab.setAttribute('class', 'read');
    readButton.setAttribute('id', 'read-button-read');
  }
});



  // A class of .read should be added to the bookmark
  
  // If it already has the class of .read, it should be removed

// When the user clicks on the “Remove” button, the link should be removed from the page
