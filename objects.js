function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
  }


var BellBoy1 = new BellBoy("raju", 25, true, ["hindi","telugu","malyalam"]);


function HouseKeeper (name, age, workEXperience, previouslyWorkedAt, languagesKnown, clean) {
  name = this.name;
  age = this.age;
  workEXperience = this.workExperience;
  previouslyWorkedAt = this.previouslyWorkedAt;
  languagesKnown = this.languagesKnown;
  clean = function (){
   alert("cleaning in progress ....");
  }

}

var HouseKeeper1 = new HouseKeeper("sony", 30, true, ["the park", "dolphin", "novotel"]);