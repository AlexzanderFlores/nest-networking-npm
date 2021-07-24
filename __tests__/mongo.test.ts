import { Connection } from 'mongoose'
import mongo, { getConnectionOptions } from '../mongo'

describe('mongo connection', () => {
  let connection: Connection

  beforeAll(async () => {
    connection = await mongo()
  })

  afterAll(() => {
    connection.close()
  })

  test('should return a truthy object for the mongo connection', () => {
    expect(connection).toBeTruthy()
  })

  test('should return an object with a close method', () => {
    expect(connection).toHaveProperty('close')
  })

  test('connection options should use new url parser', () => {
    expect(getConnectionOptions()).toHaveProperty('useNewUrlParser')
  })

  test('connection options should use find and modify', () => {
    expect(getConnectionOptions()).toHaveProperty('useFindAndModify')
  })

  test('connection options should use unified topology', () => {
    expect(getConnectionOptions()).toHaveProperty('useUnifiedTopology')
  })
})
