var BeerSong = function() {};

BeerSong.prototype.sing = function(first, second) {
  var song = "";
  if (second) {
    song = this.verse(first) + "\n" +
           this.verse(first - 1 ) + "\n" +
           this.verse(second);
  } else {
    var verses = [];
    var beerCount = first;
    for (var i = 0; i < first; i++) {
      verses.push(this.verse(beerCount) + "\n");
      beerCount = beerCount - 1;
    }
    verses.push(this.verse(0));
    song = verses.join("");
  }
  return song;
};

BeerSong.prototype.verse = function(number) {
  return verseNumber(number, "first") + bottle(number) +
         " of beer on the wall, " +
         verseNumber(number, "second") + bottle(number) +
         takeOrBuy(number) +
         verseNumber(number - 1, "second") +
         bottle(number - 1) + " of beer on the wall.\n";
};

function takeOrBuy(number) {
  var part = " of beer.\nTake" + oneOrIt(number) +
             "down and pass it around, ";
  if (number === 0) {
    part = " of beer.\nGo to the store and buy some more, ";
  }
  return part;
}

function bottle(number) {
  var bottle = " bottles";
  if (number === 1) {
    bottle = " bottle";
  }
  return bottle;
}

function verseNumber(number, position) {
  var verseNumber = number;
  var pos = position;
  if (number === 0) {
    if (position === "first") {
      verseNumber = "No more";
    } else if (position === "second") {
      verseNumber = "no more";
    }
  } else if (number === -1) {
    verseNumber = "99";
  }
  return verseNumber;
}

function oneOrIt(number) {
  var which = " one ";
  if (number === 1) {
    which = " it ";
  }
  return which;
}

module.exports = BeerSong;
