require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const Person = require('./models/person');
const app = express();

const PORT = process.env.PORT;

app.use(express.static('build'));

app.use(bodyParser.json());

morgan.token('data', (req, res) => {
   return JSON.stringify(req.body);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data', {
   skip: (req, res) => {
      return req.method !== 'POST'
   }
}))

app.get('/info', (req, res) => {
   res.send(`<p>Phonebook has info for ${persons.length} people</p>
   <p>${new Date()}</p>`);
});

app.get('/api/persons', (req, res) => {
   Person.find({}).then(persons => {
      res.json(persons.map(person => person.toJSON()))
   });
});

app.get('/api/persons/:id', (req, res) => {
   Person.findById(req.params.id).then(person => {
      res.json(person.toJSON());
   })
});

app.delete('/api/persons/:id', (req, res) => {
   Person.findByIdAndDelete(req.params.id).then(resp => {
      res.status(200).end();
   })
});

app.post('/api/persons', (req, res) => {
   const body = req.body;
   if (!body) {
      return res.status(400).json({
         error: 'content missing',
      });
   }
   if (!body.name || !body.number) {
      return res.status(400).json({
         error: 'name or number is missing',
      });
   }
   const newPerson = new Person({
      name: body.name,
      number: body.number,
   });
   newPerson.save().then(savedPerson => {
      res.json(savedPerson.toJSON());
   })
});

app.put('/api/persons/:id', (req, res) => {
   const body = req.body;
   const newPerson = {
      name: body.name,
      number: body.number
   }
   Person.findByIdAndUpdate(req.params.id, newPerson, {new: true})
   .then(updatedPerson => res.json(updatedPerson.toJSON()));
});

const unknownEndpoint = (request, response) => {
   response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
})

