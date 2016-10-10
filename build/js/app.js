(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.subTime = moment();
};

// module.exports = Entry;

Entry.prototype.countVowels = function() {
  return (this.body.match(/[aeiou]/gi) || []).length;
};

Entry.prototype.countCons = function() {
  return (this.body.match(/[b-df-hj-np-tv-z]/gi) || []).length;
};

Entry.prototype.getTeaser = function() {
  var teaserWords = this.body.split(/\s+/).slice(0,8);
  var output = "";
  for(i = 0; i < teaserWords.length; i++) {
    output += teaserWords[i];
    if (teaserWords[i].search(/[\.\?\!]/g) != -1) {
      break;
    } else {
      output += " ";
    }
  }
  return output;
};
exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
