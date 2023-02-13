import { Schema, model } from "mongoose"

// Esquema de usuario para autenticación
const userSchema = Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true
  }
)

const user = model('user', userSchema)

export default user
