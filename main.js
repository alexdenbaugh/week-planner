var data = {
  entries: [],
  editing: null,
  nextEntryID: 1
};

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
  data.entries.unshift(object);

}

$addEntryForm.addEventListener('submit', handleSubmit);

var $dOfWeek = document.querySelector('.days-of-week');
$dOfWeek.addEventListener('click', daySelector);

function daySelector(event) {
  var dayArray = []
  var selectDay = event.target.getAttribute('data-day')

  // for (var i = 0; i < data.entries.length; i++) {
  //   data.entries[i].day
  //   if (data.entries[i].day === selectDay) {
  //     dayArray.push(data.entries[i].day)
  //   }
  // }
  // console.log(data.entries[i].day)
}
