const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Permette ad Angular (porta 4200) di comunicare con Express (3000)
app.use(express.json());

// Mock Data iniziale basato sulla tua interfaccia Ride
let rides = [
  { id: 1, name: 'Blue Tornado', description: 'Montagna russa invertita ad alta velocità.', price: 15, fun: 10, year: 2015, image: 'https://link-immagine.it/tornado.jpg' }
];

// --- ROTTE CRUD ---

// GET: Legge tutte le rides
app.get('/api/rides', (req, res) => {
  res.json(rides);
});

// GET: Legge una singola ride
app.get('/api/rides/:id', (req, res) => {
  const ride = rides.find(r => r.id === parseInt(req.params.id));
  ride ? res.json(ride) : res.status(404).send('Ride non trovata');
});

// POST: Crea una nuova ride
app.post('/api/rides', (req, res) => {
  const newRide = {
    id: rides.length > 0 ? Math.max(...rides.map(r => r.id)) + 1 : 1,
    ...req.body
  };
  rides.push(newRide);
  res.status(201).json(newRide);
});

// PUT: Aggiorna una ride esistente
app.put('/api/rides/:id', (req, res) => {
  const index = rides.findIndex(r => r.id === parseInt(req.params.id));
  if (index !== -1) {
    rides[index] = { ...rides[index], ...req.body, id: rides[index].id };
    res.json(rides[index]);
  } else {
    res.status(404).send('Ride non trovata');
  }
});

// DELETE: Elimina una ride
app.delete('/api/rides/:id', (req, res) => {
  rides = rides.filter(r => r.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server Express in esecuzione su http://localhost:${PORT}`);
});