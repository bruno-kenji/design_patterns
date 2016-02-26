$(document).ready(function() {
  /* Primary Functions */
  function createElements() {
    var numOfCats = 5;
    this.$catLink = [];

    for (var i = 0; i < numOfCats; i++) {
      this.$catLink[i] = $('<li>').addClass('cat-link').attr('id', 'cat-link-' + i).attr('catName', 'Kitty ' + i).html('Kitty ' + i);

      $('.cat-list').append(this.$catLink[i]);
    }

    this.$hiddenCatName = $("<div>").attr('id', 'hidden-cat-name').html("").hide();
    this.$hiddenCatClicks = $("<div>").attr('id', 'hidden-cat-clicks').html("").hide();

    $('.cat-wrapper').append(this.$hiddenCatName);
    $('.cat-wrapper').append(this.$hiddenCatClicks);
  }

  function setupBindings() {
    var self = this;

    $('.cat-link').on("click", function(e) {
      self.$hiddenCatName.html(e.target.innerHTML);

      $('.cat-wrapper').find('h3').html(self.$hiddenCatName.html());
      $('.cat-wrapper').find('#clicks').html(self.$hiddenCatClicks.html());

      updateImages(e.target.innerHTML);
    });

    $('.cat-pic').on("click", function(e) {
      increaseCounter($(this));
      counterAnimation($(this));
      self.$catClicks = $("div").attr('id', 'hidden-cat-clicks').html
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

  function updateImages(catName) {
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