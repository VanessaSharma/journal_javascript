function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.subTime = moment();
}

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
