function Cat(name) {
  this.name = name;
  this.link = $('<a href="#"></a>').text(this.name);
  var item = $('<li></li>').html(this.link);

  this.nameDiv = this.div().text(this.name);

  this.image = $("<img>");
  this.image.attr('src', this.name.toLowerCase() + ".jpg");
  this.image.click(this.increment.bind(this));
  this.imageDiv = this.div().html(this.image);

  this.count = 0;
  this.countDiv = this.div().text(this.count);

  this.cat = this.div();
  this.cat.css("display", "none");
  this.cat.append(this.nameDiv);
  this.cat.append(this.imageDiv);
  this.cat.append(this.countDiv);

  this.link.click(function() {
    $('#cat').children().css("display", "none");
    this.cat.css("display", "");
  }.bind(this));
  
  $('#names').append(item);
  $('#cat').append(this.cat);
};

Cat.prototype = {
  div: function() {
    return $('<div></div>');
  },
  increment: function() {
    this.count += 1;
    this.countDiv.text(this.count.toString());
  }
};

$(document).ready(function() {
  cats = ["Cat", "Chewie", "Jetske", "Tom", "Jerry"];
  for(var i = 0; i < cats.length; i++) {
    new Cat(cats[i]);
  }
});
