$(document).ready(function() {
  var self = this;

  /* Primary Functions */
  function createElements() {
    this.$counter1 = $('<div>').attr('id','counter1').addClass('counter').html(0).hide();
    this.$counter2 = $('<div>').attr('id','counter2').addClass('counter').html(0).hide();

    $('#cat1').append($counter1);
    $('#cat2').append($counter2);
  }

  function setupBindings() {
    $('.cat').on("click", function() {
      increaseCounter($(this));
      counterAnimation($(this))
    });
  }
  createElements();
  setupBindings();

  /* Secondary Functions */
  function increaseCounter($el) {
    var $counter = $el.find('.counter');
    var clickCount = parseInt($counter.html()) + 1;
    $counter.html(clickCount);
    $el.closest('.cat-wrapper').find('.clicks').empty().append("Clicks: " + clickCount.toString());
  }

  function counterAnimation($el) {
    var $counter = $el.closest('.cat-wrapper').find('.clicks');
    $counter.addClass('ativou');
    setTimeout(function() {
      $counter.removeClass('ativou');
    }, 300 )
  }
});