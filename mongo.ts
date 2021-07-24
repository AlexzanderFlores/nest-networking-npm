import mongoose, { Connection } from 'mongoose'
import getKeys from './getKeys'
import cleanUp from './cleanUp'

let key: string

export const getConnectionOptions = () => {
  return {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
}

const connectToMongo = async (): Promise<Connection> => {
  if (!key) {
    key = (await getKeys()).mongo_uri
  }

  const connection = (await mongoose.connect(key, getConnectionOptions()))
    .connection

  cleanUp(() => {
    connection.close()
  })

  return connection
}

export default connectToMongo
