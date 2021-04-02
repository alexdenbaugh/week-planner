var $addEntryButton = document.querySelector('.main-button');
var $modalContainer = document.querySelector('.modal-container');
var $submitButton = document.getElementById('#submit-button');

function handleClick(event) {
  $modalContainer.classList.remove('hidden');
}

$addEntryButton.addEventListener('click', handleClick);
$submitButton.addEventListener('click', handleClick);
