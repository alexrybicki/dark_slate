var card = document.querySelector('.card');
if (card !== undefined && card !== null) {
  card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
 })
};
var element = document.getElementById('back-link');
  if (element !== undefined && element !== null) {
    element.setAttribute('href', document.referrer);
    element.onclick = function() {
      history.back();
      return false;
  }
};
