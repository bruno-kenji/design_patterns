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
        var catName = 'Kitty ' + i;
        var imgSrc = this.getImgSrc(catName);

        model.add(catName, imgSrc);
      }

      catWrapperView.init();
      catListView.init();
      adminView.init();
    },

    getImgSrc: function(catName) {
      var imgSrc;
      switch(catName) {
        case "Kitty 0":
          imgSrc = 'https://goo.gl/2YWnjj';
          break;
        case "Kitty 1":
          imgSrc = 'https://goo.gl/2Wm1Qb';
          break;
        case "Kitty 2":
          imgSrc = 'https://goo.gl/z9QPEZ';
          break;
        case "Kitty 3":
          imgSrc = 'http://goo.gl/dpdWr3';
          break;
        case "Kitty 4":
          imgSrc = 'http://goo.gl/ZWQUtT';
          break;
      }
      return imgSrc;
    },

    getCats: function() {
      return model.cats;
    },

    getCurrentCat: function() {
      return model.currentCat;
    },

    setCurrentCat: function(cat) {
      model.currentCat = cat;
    },

    increaseCounter: function() {
      model.currentCat.clickCount++;
      catWrapperView.updateCounter();
    }
  };

  var catListView = {

    init: function() {
      this.$catList = $('.cat-list');

      this.render();
    },

    render: function() {
      var cats = octopus.getCats();

      this.$catList.empty();
      for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];

        var $catRow = $('<li>').addClass('.cat-link').html(cat.name);

        $catRow.on('click', (function(cat) {
          return function() {
            octopus.setCurrentCat(cat);
            catWrapperView.render();
          }
        })(cat));

        this.$catList.append($catRow);
      }
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

  var adminView = {
    init: function() {
      this.$adminButton  = $('.admin-btn');
      this.$adminMenu    = $('.admin-menu');
      this.$adminList    = $('.admin-list');
      this.$saveButton   = $('.admin-save-btn');
      this.$cancelButton = $('.admin-cancel-btn');

      this.setupBindings();
      this.render();
    },

    setupBindings: function() {
      var self = this;

      this.$adminButton.on('click', function() {
        self.$adminMenu.toggleClass('hide');
      });
      
    },

    render: function() {
      var currentCat = octopus.getCurrentCat();

    }
  }

  octopus.init(5);
});