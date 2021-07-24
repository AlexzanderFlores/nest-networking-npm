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

const connectToMongo = async () => {
  if (!key) {
    key = (await getKeys()).mongo_uri
  }

  return (await mongoose.connect(key, getConnectionOptions())).connection
}

export default connectToMongo
