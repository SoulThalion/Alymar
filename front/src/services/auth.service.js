import app from './config'

export const login = async (nombre, contrasena) => {
   try {
      const { data } = await app.post('/auth/login', {
        nombre,
        contrasena
      })
  
      return data
  
    } catch (error) {
      console.log('Error loging: ', error.message)
    }
  }
