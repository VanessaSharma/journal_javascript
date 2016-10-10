$(document).ready(function() {
  $ ('#entry').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    $('#entry').hide();
    $('#result').prepend('<p> thank you,' + name + 'your entry is being calculated</p>');
  });
});
