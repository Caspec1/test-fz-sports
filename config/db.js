import mongoose from 'mongoose'

const dbConnect = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conection = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    });

    const url = `${conection.connection.host}:${conection.connection.port}`;
    console.log(`MongoDB conectado en ${url}`)
} catch (error) {
    console.error(error);
    process.exit(1);
}
}

export default dbConnect
