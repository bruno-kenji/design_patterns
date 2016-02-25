$(document).ready(function() {
  var self = this;

  function createElements() {
    this.$counter1 = $('<div>').attr('id','counter1').addClass('counter').html(0).hide();
    this.$counter2 = $('<div>').attr('id','counter2').addClass('counter').html(0).hide();

    $('#cat1').append($counter1);
    $('#cat2').append($counter2);
  }

  function setupBindings() {
    $('.cat').on("click", function() {
      increaseCounter($(this));
    });
  }

  function increaseCounter($el) {
    var $counter = $el.find('.counter');
    var clickCount = parseInt($counter.html()) + 1;
    $counter.html(clickCount);
    $el.closest('.cat-wrapper').find('.clicks').empty().append("Clicks: " + clickCount.toString());
  }

  createElements();
  setupBindings();
});