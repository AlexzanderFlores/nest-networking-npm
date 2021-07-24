import { RedisClient } from 'redis'
import redisConn from '../redis'
import { cleanUp } from '../cleanUp'

describe('redis connection', () => {
  let connection: RedisClient

  beforeAll(async () => {
    connection = await redisConn()
  })

  afterAll(async () => {
    cleanUp()
  })

  test('should return a truthy object for the redis connection', () => {
    expect(connection).toBeTruthy()
  })

  test('should return an object with a quit method', () => {
    expect(connection).toHaveProperty('quit')
  })
})
