var enterButton = document.querySelector('#enter');
var websiteList = document.querySelector('#website-list');
var readButton = document.querySelector('#read-button');
var deleteButton = document.querySelector('#delete-button');
var websiteTab = document.querySelector('.website-tab');



// When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section
function CreateTab() {
  // this.title = title;
  // this.url = url;
  var article = document.createElement('article');
  article.setAttribute('id', 'website-tab');
  var h2 = document.createElement('h2');
  h2.innerText = "jhgjh";
  var hr1 = document.createElement('hr');
  hr1.setAttribute('id', 'horizontal-line');
  var a = document.createElement('a');
  a.innerText = "www.newexample.com"
  var hr2 = document.createElement('hr');
  hr2.setAttribute('id', 'horizontal-line');
  var read = document.createElement('button');
  read.setAttribute('class', 'website-tab-buttons');
  read.innerText = "Read";
  var remove = document.createElement('button');
  remove.setAttribute('class', 'website-tab-buttons');
  remove.setAttribute('id', 'delete-button');
  remove.innerText = "Delete";

  article.appendChild(h2);
  article.appendChild(hr1);
  article.appendChild(a);
  article.appendChild(hr2);
  article.appendChild(read);
  article.appendChild(remove);

websiteList.insertBefore(article, websiteList.firstChild);

}

enterButton.addEventListener('click', function() {
  event.preventDefault();
  CreateTab();
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
