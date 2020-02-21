import mongoose from 'mongoose'
const connection = {}

async function connectDb() {
    if (connection.isConnected) {
        //Utiliser une connexion database deja existante
        console.log("Using existing connection")
        return;
    }
    // Utiliser une nouvelle connexion
    const db = await mongoose.connect(process.env.MONGO_SRV, {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("DB Connected")
    connection.isConnected = db.connections[0].readyState;
}

export default connectDb;