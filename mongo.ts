import mongoose from 'mongoose'
import getKeys from './getKeys'

let key: string

export const getConnectionOptions = () => {
  return {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
}

export const mongo = async (runnable: Function): Promise<any> => {
  const connection = await connectToMongo()
  try {
    return await runnable(connection)
  } finally {
    connection.close()
  }
}

const connectToMongo = async () => {
  if (!key) {
    key = (await getKeys()).mongo_uri
  }

  return (await mongoose.connect(key, getConnectionOptions())).connection
}

export default connectToMongo
