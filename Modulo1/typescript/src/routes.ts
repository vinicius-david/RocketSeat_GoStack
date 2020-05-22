import { Request, Response } from 'express'
import createUser from './services/createUser'

export function sendMessage(request: Request, response: Response) {

  const user = createUser({ 
    // name: 'Vinicius', 
    email: 'vinicius@email.com', 
    password: '123',
    techs: ['NodeJS', 'ReactJS', 'React Native'],
    languages: [ 2, { title: 'JavaScript', experience: 100 }, { title: 'Python', experience: 60 } ]
  });

  console.log(user)

  return response.json({ message: 'Hello World!' })
}