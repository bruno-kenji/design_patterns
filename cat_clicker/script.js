$(document).ready(function() {

  function createElements() {
    this.$counter = $('<div>').addClass('counter').html(0).hide();

    $('.cat').append($counter);
  }

  function setupBindings() {
    $('.cat').on("click", function() {
      increaseCounter();
    });
  }

  function increaseCounter() {
    var clickCount = parseInt(this.$counter.html()) + 1;

    $counter.html(clickCount);
    
    $('.clicks').empty().append("Clicks: " + clickCount.toString());
  }

  createElements();
  setupBindings();
});