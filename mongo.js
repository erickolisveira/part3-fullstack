const mongoose = require('mongoose')

if (process.argv.length < 3 ) {
  console.log('Not enough arguments!');
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://elderick:${password}@phonebook-yajra.mongodb.net/phonebook?retryWrites=true&w=majority`;
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

const personSchema = new mongoose.Schema({
  name: String,
  number: String
});
const Person = mongoose.model('Person', personSchema);

if (process.argv.length === 3) {
  Person
    .find({})
    .then(persons => {
      persons.forEach(person => {
        console.log(person);
      });
      mongoose.connection.close();
      process.exit(1);
    });
}

const name = process.argv[3];
const number = process.argv[4];
const newPerson = new Person({ name, number });

newPerson.save().then(response => {
  console.log(`Added ${name} number ${number} to phonebook.`)
  mongoose.connection.close()
});
