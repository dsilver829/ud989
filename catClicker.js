function Cat(name) {
  this.name = name;
  $("#names").append(this.cell(this.name));

  this.image = $("<img>");
  this.image.attr('src', this.name.toLowerCase() + ".jpg");
  var cell = this.cell().append(this.image);
  $("#images").append(cell);
  this.image.click(this.increment.bind(this));

  this.count = 0;
  this.counter = this.cell(this.count.toString());
  $("#counters").append(this.counter);
};

Cat.prototype = {
  cell: function(text) {
    return $('<td></td>').text(text);
  },
  increment: function() {
    this.count += 1;
    this.counter.text(this.count.toString());
  }
};

$(document).ready(function() {
  new Cat("Cat");
  new Cat("Chewie");
});
