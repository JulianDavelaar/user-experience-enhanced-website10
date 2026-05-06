import express from 'express'

import { Liquid } from 'liquidjs';

const baseURL = 'https://fdnd-agency.directus.app/items/preludefonds_instruments'

async function haalInstrumenten(zoekterm, status) {
  let apiUrl = baseURL
  
  if (zoekterm) {
    apiUrl += `?filter[name][_icontains]=${zoekterm}`
  }
  
  if (status) {
    apiUrl += zoekterm ? '&' : '?'
    apiUrl += `filter[status][_eq]=${status}`
  }

  const apiResponse = await fetch(apiUrl)
  const apiResponseJSON = await apiResponse.json()
  return apiResponseJSON.data
}

const app = express()

app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

const engine = new Liquid()
app.engine('liquid', engine.express())
app.set('view engine', 'liquid')

app.set('views', './views')

app.get('/', async (request, response) => {
   const zoekterm = request.query.zoeken
   const status = request.query.status
   const instruments = await haalInstrumenten(zoekterm, status)

   response.render('index', {
   instruments: instruments
  })
})
  
app.get('/instrument/toevoegen', (request, response) => {
  response.render('instrument-toevoegen')
})

app.get('/instrument/innemen', (request, response) => {
  response.render('instrument-innemen')
})

app.get('/instrument/:id', async (request, response) => {

  const id = Number(request.params.id)
  const instruments = await haalInstrumenten()

  const instrument = instruments.find(function(item) {
    return item.id === id
  })

  if (!instrument) {
    response.status(404).send('Instrument niet gevonden')
    return
  }

  response.render('instrument-detail', {
    instrument
  })
})

app.post('/instrument/:id/uitlenen', async function(request, response){
  const id = Number(request.params.id)
  await fetch(`${baseURL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
    status: 'Uitgeleend'
    }),

    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  });

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
})


const instruments = await haalInstrumenten()
const instrument = instruments.find(function(item) {
  return item.id ===id
})

  response.render('instrument-detail', { instrument })
})
