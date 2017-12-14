var enterButton = document.querySelector('#enter');
var bookmarkList = document.querySelector('#bookmark-list');
var readButton = document.querySelector('#read-button');
var deleteButton = document.querySelector('.bookmark-buttons delete-button');
var bookmark = document.querySelector('.bookmark');
var websiteTitle = document.querySelector('#website-title');
var websiteURL = document.querySelector('#website-url');

websiteTitle.addEventListener('input', function(){
  if (websiteTitle.value == '' || websiteURL.value == '') {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  };
});

websiteURL.addEventListener('input', function(){
  if (websiteTitle.value == '' || websiteURL.value == '') {
    enterButton.disabled = true;
  } else {
    enterButton.disabled = false;
  };
});


websiteURL.onfocus = function() {
websiteURL.value = 'https://';
}

enterButton.addEventListener('click', function(event) {
  if (!websiteURL.validity.valid || websiteTitle.value == ""){
    return false;
  } else {
  event.preventDefault();
  createTab();
  websiteTitle.value = '';
  websiteTitle.focus();
  websiteURL.value = '';
}
});


function createTab() {
  var article = document.createElement('article');
  article.setAttribute('class', 'bookmark');

  var h2 = document.createElement('h2');
  h2.innerText = websiteTitle.value;

  var hr1 = document.createElement('hr');
  hr1.setAttribute('id', 'horizontal-line');

  var a = document.createElement('a');
  a.innerHTML = websiteURL.value;
  a.href = websiteURL.value;
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

bookmarkCount = bookmarkCount + 1;

enterButton.disabled = true;
};

function createReadButton () {
  read = document.createElement('button');
  read.setAttribute('class', 'bookmark-buttons');
  read.setAttribute('id', 'read-button');
  read.innerText = "Read";
};

bookmarkList.addEventListener('click', function(event) {
  if (event.target.id === 'read-button') {
    event.target.parentNode.classList.toggle('read');
    event.target.classList.toggle('read-button-clicked');
  };
});


function createDeleteButton() {
  deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'bookmark-buttons delete-button');
  deleteButton.innerText = "Delete";
}

bookmarkList.addEventListener('click', function(event) {
  if (event.target.className === 'bookmark-buttons delete-button') {
    event.target.parentNode.remove(bookmark);
    bookmarkCount = bookmarkCount - 1;
  }
});

// 
//  Phase 3 
// 

var bookmarkCount = 0;
// Run bookmarkCount in console for count of total number of links currently on page.

function readCounter () {
  readCount = document.querySelectorAll('.bookmark.read').length;
  return readCount;
};
// Run readCounter() in console for count of total number of read links.

function unreadCounter () {
  unreadCount = document.querySelectorAll('.bookmark').length;
  return unreadCount;
}
// Run unreadCounter() in console for count of total number of unread links.

// 
//  Phase 4
// 

function clearReadBookmarks() {
  var readArray = document.querySelectorAll('.bookmark.read');
  for (var i = 0; i < readArray.length; i++) {
    readArray[i].remove('.bookmark.read'); 
  };
};
// Run clearReadBookmarks() in console to clear all read bookmarks.
