require('dotenv').config()
module.exports = {
    'type': "mongodb",
    'host': process.env.MONGO_HOST,
    'port': parseInt(process.env.MONGO_PORT),
    'username': process.env.MONGO_USERNAME,
    'password': process.env.MONGO_PASSWORD,
    'database': process.env.MONGO_DATABASE,
    seeds: [
        'src/seeds/**/*.seed.ts'
    ],
    entities: ['src/entity/*.{js,ts}']
}