import redisPackage, { RedisClient } from 'redis'
import getKeys from './getKeys'
import cleanUp from './cleanUp'

export const getUri = async () => {
  const { redis_uri } = await getKeys()
  return redis_uri
}

const connectToRedis = async (): Promise<RedisClient> => {
  return await new Promise(async (resolve, reject) => {
    const client = redisPackage.createClient({ url: await getUri() })

    client.on('error', (err: Error | null) => {
      console.log('Redis connection error:', err)
      client.quit()
      reject({
        err,
      })
    })

    client.on('ready', () => {
      cleanUp(() => {
        client.quit()
      })
      resolve(client)
    })
  })
}

export default connectToRedis
