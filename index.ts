import getKeys from './getKeys'
import mongo from './mongo'
import { getConnection } from './redis'

const redis = getConnection

export { getKeys, mongo, redis }
