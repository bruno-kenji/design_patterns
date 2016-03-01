$(document).ready(function() {

  var model = {
    cats: [],
    currentCat: {},
    add: function(name, imgSrc) {
      // var data = JSON.parse(model.cats);
      // data.push(cat);
      // model.cats = JSON.stringify(data);
      var data = {
        name: name,
        imgSrc: imgSrc,
        clickCount: 0
      };
      model.cats.push(data);
    }
  };

  var octopus = {

    init: function(numOfCats) {
      for(var i = 0; i < numOfCats; i++) {
        model.add('Kitty ' + i, 'https://goo.gl/2YWnjj');
      }
      model.currentCat = model.cats[0];

      catListView.init();
      catWrapperView.init();
    },

    getCats: function() {
      return model.cats;
    },

    getCurrentCat: function() {
      return model.currentCat;
    },

    increaseCounter: function() {
      model.currentCat.clickCount++;
      catWrapperView.updateCounter();
    }

  };

  var catListView = {

    init: function() {

    }
  };

  var catWrapperView = {

    init: function() {
      this.$catWrapper = $('.cat-wrapper');
      this.$catImg     = $('#cat-pic');
      this.$catName    = $('#cat-name');
      this.$counter    = $('#clicks');

      this.setupBindings();
      this.render();
    },

    setupBindings: function() {
      var self = this;

      this.$catImg.on('click', function() {
        octopus.increaseCounter();
        self.counterAnimation();
      });
    },

    updateCounter: function() {
      var currentCat = octopus.getCurrentCat();

      this.$counter.html(currentCat.clickCount);
    },

    counterAnimation: function() {
      var self = this;

      this.$counter.addClass('activated');
      setTimeout(function() {
        self.$counter.removeClass('activated');
      }, 300 );
    },

    render: function() {
      var currentCat = octopus.getCurrentCat();

      this.$counter.html(currentCat.clickCount);
      this.$catName.html(currentCat.name);
      this.$catImg.find('img').attr('src', currentCat.imgSrc);
    }
  };

  octopus.init(5);
});