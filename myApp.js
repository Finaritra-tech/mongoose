require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("✅ MongoDB connected successfully!");
});

let Person;

const personSchema = new mongoose.Schema({
  name:{
    type: String,
    required : true
  },
  age : Number,
  favoriteFoods :[String] 
});

Person = mongoose.model('Person', personSchema);


const createAndSavePerson = (done) => {
  var fifi =   new Person({name: "Fifi", age: 19, favoriteFoods: ["chicken nuggets", "seafood"]});
  fifi.save(function(err, data){
    if(err){
      return console.error(err);
    }
    else 
     done(null, data);
  })
};

  var arrayOfPeople = [
    {name: "John", age: 20, favoriteFoods: ["pizza", "pasta"]},
    {name: "Jane", age: 25, favoriteFoods: ["salad", "sushi"]},
    {name: "Mike", age: 30, favoriteFoods: ["steak", "fries"]}
  ]

const createManyPeople = (arrayOfPeople, done) => {

  arrayOfPeople.save(function(err, data){
    if(err){
      return console.error(err);
    }
    else
      done(null, data);
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
