function Counter() {
  count = 0;
  $('img').click(this.increment);
}

Counter.prototype = {
  increment: function() {
    count += 1;
    $('#counter').text(count.toString());
  } 
}

$(document).ready(function() {
  var counter = new Counter();
});
