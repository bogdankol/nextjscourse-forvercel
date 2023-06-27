import { MongoClient } from 'mongodb'

export default async function handler(req: any, res: any) {
  if(req.method === 'POST') {
    const { email, name, message } = req.body

    if(!email || !name || !name.trim().length || !message || !message.trim().length) {
      return res.status(422).json({ message: 'some data is missing'})
    }

    let client: any 

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_username}@${process.env.mongodb_cluster}/`
    console.log({connectionString})
    try {
      client = new MongoClient(connectionString)
      await client.connect()
      console.log('Connected to db')
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }

    const collection = client.db(process.env.mongodb_db).collection('messages')

    try {
      await collection.insertOne({
        email,
        name,
        message
      })

      client.close()

      return res.status(201).json({ message: 'success', newMessage: {
        email,
        name,
        message
      }})
      
    } catch (error) {
      client.close()
      
      return res.status(500).json({
        message: error.message
      })
    }
  }
}