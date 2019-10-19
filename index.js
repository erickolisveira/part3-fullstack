const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const PORT = 3001;

app.use(bodyParser.json());

morgan.token('data', (req, res) => {
      return JSON.stringify(req.body);
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data', {
   skip: (req, res) => {
      return req.method !== 'POST'
   }
}))

let persons = [
   {
     name: "Arto Hellas",
     number: "040-123456",
     id: 1
   },
   {
     name: "Ada Lovelace",
     number: "39-44-5323523",
     id: 2
   },
   {
     name: "Erick",
     number: "5555",
     id: 3
   }

];

app.get('/info', (req,res) => {
   res.send(`<p>Phonebook has info for ${persons.length} people</p>
   <p>${new Date()}</p>`);
});

app.get('/api/persons', (req, res) => {
   res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
   const id = Number(req.params.id);
   const person = persons.find(person => person.id === id);
   if(person) {
      res.json(person)
   } else {
      res.status(404).end();
   }
});

app.delete('/api/persons/:id', (req, res) => {
   const id = Number(req.params.id);
   persons = persons.filter(person => person.id !== id);
   res.status(204).end();
});

const generateId = () => {
   let min = Math.ceil(1);
   let max = Math.floor(10000);
   return Math.floor(Math.random() * (max - min)) + min;
}

app.post('/api/persons', (req, res) => {
   const body = req.body;
   if(!body) {
      return res.status(400).json({
         error: 'content missing',
      });
   }
   if (!body.name || !body.number) {
      return res.status(400).json({
         error: 'name or number is missing',
      });
   }
   if(persons.find(person => person.name === body.name)) {
      return res.status(400).json({
         error: 'name must be unique',
      });
   }
   const newPerson = {
      name: body.name,
      number: body.number,
      id: generateId(),
   }
   persons = persons.concat(newPerson);
   res.json(newPerson);
});

const unknownEndpoint = (request, response) => {
   response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}` );
})

