const Redis = require('redis')

const DEFAULT_EXP = 3600
const redisClient = Redis.createClient({
    password: 'y9jaRN0yLcucEnpRIRbnhnWoErDyVkUt',
    socket: {
        host: 'redis-15665.c252.ap-southeast-1-1.ec2.cloud.redislabs.com',
        port: 15665
    }
})

const connectRedis = async () => {
    await new Promise((resolve, reject) => {
        redisClient.on('connect', () => {
            console.log('Connected to Redis')
            resolve()
        })
        redisClient.on('error', (err) => {
            console.error('Error connecting to Redis:', err)
            reject(err)
        })
    })
}

connectRedis()

module.exports = {
    redisClient,
    DEFAULT_EXP
}
