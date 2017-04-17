var FoodChain = function() {
  this.verseAnimals = ['fly', 'spider', 'bird', 'cat',
                       'dog', 'goat', 'cow', 'horse'];
};

FoodChain.prototype.verse = function(amount) {
  if (amount == 8) {
    return "I know an old lady who swallowed a horse.\nShe\'s dead, of course!\n";
  }
  var chain = [];
  for (var i = 0; i < amount; i++) {
    var animal = this.verseAnimals[i];
    var animal2 = this.verseAnimals[i - 1];
    if (animal2 === "spider" && amount > 2) {
      toCatch(animal2, animal, chain, amount);
    } else if (animal2) {
      toCatch(animal2, animal, chain);
    }
    if ((animal === "spider" && amount == 2) || animal === "fly" || i == (amount - 1)) {
      animalPhrase(chain, animal);
    }
    if (i == (amount - 1)) {
      sheSwallowed(chain, animal);
    }
  }
  chain.reverse();
  if (amount > 2) {
    var first = chain[0] + ".\n" + chain[1] + "!\n";
    var second = chain.splice(2, chain.length).join(".\n");
    chain = first + second;
  } else {
    chain = chain.join(".\n");
  }
  return chain;
};

function sheSwallowed(chain, animal) {
  chain.push("I know an old lady who swallowed a " + animal);
}

function toCatch(animal1, animal2, chain, count) {
  if (animal1 == "spider" && count > 2) {
    chain.push("She swallowed the " + animal2 +
                " to catch the " + animal1 +
                " that wriggled and jiggled and tickled inside her");
  } else {
    chain.push("She swallowed the " + animal2 + " to catch the " +
            animal1);
  }
}

function animalPhrase(chain, animal) {
  var animalPhrase = "";
  switch (animal) {
    case "spider":
      animalPhrase = "It wriggled and jiggled and tickled inside her";
      break;
    case "fly":
      animalPhrase = "I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n";
      break;
    case "bird":
      animalPhrase = "How absurd to swallow a bird";
      break;
    case "cat":
      animalPhrase = "Imagine that, to swallow a cat";
      break;
    case "dog":
      animalPhrase = "What a hog, to swallow a dog";
      break;
    case "goat":
      animalPhrase = "Just opened her throat and swallowed a goat";
      break;
    case "cow":
      animalPhrase = "I don\'t know how she swallowed a cow";
      break;
    default:
  }
  chain.push(animalPhrase);
}

module.exports = FoodChain;
