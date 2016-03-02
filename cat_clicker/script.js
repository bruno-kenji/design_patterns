$(document).ready(function() {

  /* Primary Functions */
  function createElements() {
    var numOfCats = 5;
    this.$catLink = [];

    for (var i = 0; i < numOfCats; i++) {
      this.$catLink[i] = $('<li>').addClass('cat-link').attr('id', 'cat-link-' + i).attr('clicks', 0).attr('imgSrc', "").html('Kitty ' + i);

      $('.cat-list').append(this.$catLink[i]);
      updateImageByCatName(this.$catLink[i]);
    }

    this.$hiddenCatName = $("<div>").attr('id', 'hidden-cat-name').html("").hide();
    this.$hiddenCat     = $("<div>").attr('id', 'hidden-cat').html("").hide();

    $('.cat-wrapper').append(this.$hiddenCatName);
    $('.cat-wrapper').append(this.$hiddenCat);
  }

  function setupBindings() {
    var self = this;

    $('#cat-pic').on("click", function() {
      increaseCounter();      
      counterAnimation($(this));
      updateAdminMenu();
    });
    
    $('.cat-link').on("click", function(e) {
      var catName = e.target.innerHTML;

      updateCounter($(this));
      updateName(catName);
      updateImageByImgSrc($(this).attr('imgSrc'));
      updateAdminMenu();
    });

    $('.admin-btn').on('click', function() {
      $('.admin-menu').toggleClass('hide');
    });

    $('.admin-cancel-btn').on('click', function() {
      $('.admin-menu').addClass('hide');
      updateAdminMenu(self.$hiddenCat);
    });

    $('.admin-save-btn').on('click', function() {
      $('.admin-menu').addClass('hide');
      updateCat();
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

    $counter.addClass('activated');
    setTimeout(function() {
      $counter.removeClass('activated');
    }, 300 );
  }

  function updateAdminMenu() {
    $('.admin-cat-name-input').val(this.$hiddenCatName.html());
    $('.admin-img-src-input') .val(this.$hiddenCat.attr('imgSrc'));
    $('.admin-clicks-input')  .val(this.$hiddenCat.attr('clicks'));
  }

  function updateCat() {
    var clicks = $('.admin-clicks-input')  .val();
    var imgSrc = $('.admin-img-src-input') .val();
    var name   = $('.admin-cat-name-input').val();

    this.$hiddenCat.attr('clicks', clicks);
    this.$hiddenCat.html(name);
    this.$hiddenCatName.html(name);

    updateCounter(this.$hiddenCat);
    updateName(name);
    updateImageByImgSrc(imgSrc);
  }

  function updateCounter($catLink) {
    this.$hiddenCat = $catLink;

    $('.cat-wrapper').find('#clicks').html('Clicks: ' + this.$hiddenCat.attr('clicks'));
  }

  function updateName(catName) {
    this.$hiddenCatName.html(catName);

    $('.cat-wrapper').find('h3').html(this.$hiddenCatName.html());
  }

  function updateImageByImgSrc(imgSrc) {
    this.$hiddenCat.attr('imgSrc', imgSrc);

    $('.cat-wrapper').find('img').attr('src', imgSrc);
  }

  function updateImageByCatName($catLink) {
    var catImg = $('.cat-wrapper').find('img');
    var name = $catLink.html();

    switch(name) {
      case "Kitty 0":
        $catLink.attr('imgSrc', 'https://goo.gl/2YWnjj');
        break;
      case "Kitty 1":
        $catLink.attr('imgSrc', 'https://goo.gl/2Wm1Qb');
        break;
      case "Kitty 2":
        $catLink.attr('imgSrc', 'https://goo.gl/z9QPEZ');
        break;
      case "Kitty 3":
        $catLink.attr('imgSrc', 'http://goo.gl/dpdWr3');
        break;
      case "Kitty 4":
        $catLink.attr('imgSrc', 'http://goo.gl/ZWQUtT');
        break;
    }
  }
});