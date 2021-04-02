var $addEntryButton = document.querySelector('.main-button');
var $modalContainer = document.querySelector('.modal-container');
var $addEntryForm = document.querySelector('form');

function handleClick(event) {
  $modalContainer.classList.remove('hidden');
}

$addEntryButton.addEventListener('click', handleClick);

function handleSubmit(event) {
  event.preventDefault();
  var object = {
  };
  object.dayOfWeek = $addEntryForm.elements.day.value;
  object.time = $addEntryForm.elements.time.value;
  object.description = $addEntryForm.elements.description.value;
  // console.log('object', object);
  // console.log($addEntryForm.elements);
  $modalContainer.classList.add('hidden');

}

$addEntryForm.addEventListener('submit', handleSubmit);
