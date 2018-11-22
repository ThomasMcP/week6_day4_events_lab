document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);
  // const resetForm = document.querySelector('#new-item-form');
  // resetForm.addEventListener('submit', deleteForm);

})

const handleFormSubmit = function (event) {
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;
  createBookItem(title, author, category);

}



const createBookItem = function (title, author, category) {
  const createDivElement = document.createElement('div');
  const deleteForm = document.getElementById('new-item-form').reset();

  const readingList = document.querySelector('#reading-list')
  readingList.appendChild(createDivElement);

  const createH2 = document.createElement('h2');
  createH2.textContent = title;
  createDivElement.appendChild(createH2)

  const createH3 = document.createElement('h3');
  createH3.textContent = author;
  createDivElement.appendChild(createH3);

  const createParagraph = document.createElement('p');
  createParagraph.textContent = category;
  createDivElement.appendChild(createParagraph);

  deleteForm;

}
