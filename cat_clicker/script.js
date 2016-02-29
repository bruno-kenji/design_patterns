$(document).ready(function() {

  /* Primary Functions */
  function createElements() {
    var numOfCats = 5;
    this.$catLink = [];

    for (var i = 0; i < numOfCats; i++) {
      this.$catLink[i] = $('<li>').addClass('cat-link').attr('id', 'cat-link-' + i).attr('clicks', 0).html('Kitty ' + i);

      $('.cat-list').append(this.$catLink[i]);
    }

    this.$hiddenCat = $("<div>").attr('id', 'hidden-cat').html("").hide();
    this.$hiddenCatName = $("<div>").attr('id', 'hidden-cat-name').html("").hide();

    $('.cat-wrapper').append(this.$hiddenCat);
    $('.cat-wrapper').append(this.$hiddenCatName);
  }

  function setupBindings() {
    $('#cat-pic').on("click", function(e) {
      increaseCounter();      
      counterAnimation($(this));
    });
    
    $('.cat-link').on("click", function(e) {
      var catName = e.target.innerHTML;

      updateCounter($(this));
      updateName(catName);
      updateImage(catName);
    });
  }

  createElements();
  setupBindings();

  /* Secondary Functions */
  function increaseCounter() {
    var clicks;

    this.$hiddenCat.attr('clicks') == "" ? clicks = 0 : clicks = parseInt(this.$hiddenCat.attr('clicks'));
    this.$hiddenCat.attr('clicks', (clicks + 1));

    $('.cat-wrapper').find('#clicks').html('Clicks: ' + this.$hiddenCat.attr('clicks'));
  }

  function counterAnimation($catImg) {
    var $counter = $catImg.closest('.cat-wrapper').find('#clicks');

    $counter.addClass('ativou');
    setTimeout(function() {
      $counter.removeClass('ativou');
    }, 300 )
  }

  function updateCounter($catLink) {
    this.$hiddenCat = $catLink;

    $('.cat-wrapper').find('#clicks').html('Clicks: ' + this.$hiddenCat.attr('clicks'));
  }

  function updateName(catName) {
    this.$hiddenCatName.html(catName);

    $('.cat-wrapper').find('h3').html(this.$hiddenCatName.html());
  }

  function updateImage(catName) {
    this.$catImg = $('.cat-wrapper').find('img');

    switch(catName) {
      case "Kitty 0":
        this.$catImg.attr('src', 'https://goo.gl/2YWnjj');
        break;
      case "Kitty 1":
        this.$catImg.attr('src', 'https://goo.gl/2Wm1Qb');
        break;
      case "Kitty 2":
        this.$catImg.attr('src', 'https://goo.gl/z9QPEZ');
        break;
      case "Kitty 3":
        this.$catImg.attr('src', 'http://goo.gl/dpdWr3');
        break;
      case "Kitty 4":
        this.$catImg.attr('src', 'http://goo.gl/ZWQUtT');
        break;
    }
  }
});