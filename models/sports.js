import { Schema, model } from 'mongoose'

const sportsSchema = Schema({
  deporte: {
    id: String,
    nombre: String
  },
  categoria: {
    id: String,
    canal: String,
    nombre: String
  },
  campeonato: {
    id: String,
    nombre: String
  },
  campeonatoNombreAlternativo: {
    id: String,
    nombre: String
  },
  fechaActual: String,
  equipo: [
    {
      id: String,
      nombre: String,
      sigla: String,
      paisId: String,
      paisNombre: String,
      tipo: String,
      jugadores: {
        cant: String,
        jugador: [
          {
            id: String,
            nombre: String,
            apellido: String,
            nombreCorto: String,
            ladoHabil: [],
            fechaNacimiento: String,
            horaNacimiento: [],
            edad: String,
            peso: String,
            altura: String,
            apodo: [],
            rol: {
              idRol: String,
              nombre: String,
            },
            camiseta: String,
            pais: {
              paisId: String,
              nombre: String,
            },
            provincia: [],
            clubActual: {
              id: String,
              nombre: String,
              paisId: String,
              paisNombre: String,
              paisSigla: String,
              tipo: String,
            },

            localidad: [],
          }
        ]
      },
      jugadoresDadosBaja: {
        cant: String,
        jugador: [
          {
            id: String,
            nombre: String,
            apellido: String,
            nombreCorto: String,
            ladoHabil: [],
            fechaNacimiento: String,
            horaNacimiento: [],
            edad: String,
            peso: String,
            altura: String,
            apodo: [],
            rol: {
              idRol: String,
              nombre: String,
            },
            camiseta: String,
            pais: {
              paisId: String,
              nombre: String,
            },
            provincia: [],
            clubActual: {
              id: String,
              nombre: String,
              paisId: String,
              paisNombre: String,
              paisSigla: String,
              tipo: String,
            },

            localidad: [],
          }
        ]
      }
    }
  ]
})

const sport = model('sports', sportsSchema)

export default sport
