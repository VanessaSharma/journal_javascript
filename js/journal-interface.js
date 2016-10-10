var Entry = require('./../js/journal.js').entryModule;
var entries = [];


$(document).ready(function() {

$('#journal-form').submit(function(event) {
  event.preventDefault();
  var title = $('#title').val();
  var body = $('#body').val();
  var entry = new Entry(title,body);
  entries.push(entry);
  $('#entries').children().remove();
  entries.forEach(function(entry) {
    $('#entries').append("<li>" + "<h3>" + entry.title + "</h3>" +
          "<p>" + entry.subTime.format("dddd, MMMM Do YYYY, h:mm:ss a") + "</p>" + "<p class='entryTeaser entry'>" + entry.getTeaser() + "</p>" + "<p class='entryBody entry'>" + entry.body + "</p>" + "<p class='count'><em>Vowels: " + entry.countVowels() + ", Consonants: " + entry.countCons() + "</em></p>" +
        "</li>");
        $(".entryTeaser").last().click(function() {
          $(this).toggle();
          $(this).siblings(".entryBody").toggle();
        });
        $(".entryBody").last().click(function() {
          $(this).toggle();
          $(this).siblings(".entryTeaser").toggle();
        });
    });
  });
});
    )
  }
}
