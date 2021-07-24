import { SecretsManager } from 'aws-sdk'
const sm = new SecretsManager({ region: 'us-east-1' })

export interface KeyTypes {
  stripe_api_key: string
  stripe_startup: string
  stripe_agency: string
  stripe_enterprise: string
  stripe_startup_yearly: string
  stripe_agency_yearly: string
  stripe_enterprise_yearly: string
  cognito_pool_id: string
  mongo_uri: string
  redis_uri: string
  api_gateway_usage_plan: string
  api_gateway_stage: string
  api_gateway_id: string
}

let keys: KeyTypes

export const getSecretId = (prod?: boolean) =>
  prod ? 'prod_secrets' : 'dev_secrets'

export const fetchKeys = async (): Promise<KeyTypes> => {
  return await new Promise((resolve, reject) => {
    sm.getSecretValue(
      { SecretId: getSecretId(!!process.env.prod) },
      (err, data) => {
        if (err) {
          reject(err)
          return
        }

        resolve(JSON.parse(data.SecretString || ''))
      }
    )
  })
}

const getKeys = async () => {
  if (!keys) {
    keys = await fetchKeys()
  }

  return keys
}

export default getKeys
