import { getSecretId, fetchKeys, KeyTypes } from '../getKeys'

const properties = [
  'stripe_api_key',
  'stripe_startup',
  'stripe_agency',
  'stripe_enterprise',
  'stripe_startup_yearly',
  'stripe_agency_yearly',
  'stripe_enterprise_yearly',
  'cognito_pool_id',
  'mongo_uri',
  'redis_uri',
  'api_gateway_usage_plan',
  'api_gateway_stage',
  'api_gateway_id',
]

describe('getKeys utility', () => {
  let keys: KeyTypes

  beforeAll(async () => {
    keys = await fetchKeys()
  })

  test('should return dev secrets by default', () => {
    expect(getSecretId()).toBe('dev_secrets')
  })

  test('should return dev secrets if false is provided', () => {
    expect(getSecretId(false)).toBe('dev_secrets')
  })

  test('should return prod secrets if true is provided', () => {
    expect(getSecretId(true)).toBe('prod_secrets')
  })

  test('keys should be an object', () => {
    expect(keys instanceof Object).toBe(true)
  })

  for (const property of properties) {
    test(`keys should contain ${property}`, () => {
      expect(keys).toHaveProperty(property)
    })
  }
})
