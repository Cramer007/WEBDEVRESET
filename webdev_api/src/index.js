// Import the framework and instantiate it
import Fastify from 'fastify'
import dotenv from 'dotenv'
import { connect } from './db/connect.js'
import User from './users/user-model.js'
import {compareHash, getHashFromClearText} from './utils/crypto.js'

dotenv.config()

const port = process.env.PORT

const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/api/hello', async function handler (request, reply) {
  return { hello: 'world' }
})

const validUsername = 'stan'
const validPassword = 'stan'


fastify.post('/api/users', async function handler (request, reply) {
    const {username, password: clearPassword,email } = request.body; // Récupération des identifiants envoyés
    const password = getHashFromClearText(clearPassword)
    const user = new User({username, hash, email})
    await user.save()
    reply.status(201).send(user)
    // 201 only for post methodes
    return user
})

fastify.post('/api/token', async function handler (request, reply) {
  const user = await User.find({ username: request.body.username})
  const password = request.body.password
  
  if(!user.comparePassword(password)){
    reply.send(401)
    return{
      error: 401,
      message: 'Invalid credentials'
    }
  }

  return{
    token: crateJWT()
  }
})

function createJWT(){
  return 'todo'
}

// Run the server!
try {
  await connect()
  await fastify.listen({ port })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}