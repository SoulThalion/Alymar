import app from './config'

export const getAllUsers = async () => {
    const token = localStorage.getItem('token');
    try {
        const { data } = await app.get('/usuario', {
            headers: {
                token: token
            }
        })

        return data

    } catch (error) {
        console.log('Error loging: ', error.message)
    }
}

export const createUser = async (nombre, contrasena, tienda, role) => {
    const token = localStorage.getItem('token');

    try {
        // Realizar la solicitud POST para crear un nuevo usuario
        const { data } = await app.post('/usuario/', {
            nombre: nombre,
            contrasena: contrasena,
            tienda: tienda,
            role: role
        }, {
            headers: {
                token: token // Incluir el token en el encabezado de autorización
            }
        });

        return data; // Devolver los datos del nuevo usuario creado

    } catch (error) {
        console.error('Error al crear el usuario:', error);
        throw error; // Propagar el error para que pueda ser manejado por el código que llama a esta función
    }
};

export const updateUser = async (id, nombre, contrasena, tienda, role) => {
    const token = localStorage.getItem('token');

    try {
        // Realizar la solicitud PATCH para editar un nuevo usuario
        const userData = {
            id: id,
            nombre: nombre,
            contrasena: contrasena,
            tienda: tienda,
            role: role,
    
        };
    
        // Añadir la contraseña al objeto userData solo si no está vacía
      //  if (contrasena !== '') {
       //     userData.contrasena = contrasena;
       // }
    
        const { data } = await app.patch(`/usuario/${id}`, userData, {
            headers: {
                token: token // Incluir el token en el encabezado de autorización
            }
        });

    return data; // Devolver los datos del usuario editado

} catch (error) {
    console.error('Error al modificar el usuario:', error);
    throw error; // Propagar el error para que pueda ser manejado por el código que llama a esta función
}
};

export const deleteUser = async (id) => {
    const token = localStorage.getItem('token');
    console.log(id)
    const ide= id
    try {   
        await app.delete(`/usuario/${ide}`, {
            headers: {
                token: token // Incluir el token en el encabezado de autorización
            }
        });
        

    return "User deleted"

} catch (error) {
    console.error('Error al borrar el usuario:', error);
    throw error; // Propagar el error para que pueda ser manejado por el código que llama a esta función
}
};

export const getUserById = async (id) => {
    const token = localStorage.getItem('token');
    const ide = id
    try {
        const { data } = await app.get(`/user/${ide}`, {
            headers: {
                token: token // Incluir el token en el encabezado de autorización
            }
        });


        return data

    } catch (error) {
        console.error('Error al borrar el usuario:', error);
        throw error; // Propagar el error para que pueda ser manejado por el código que llama a esta función
    }
};

export const getUserByToken = async () => {
    const token = localStorage.getItem('token');
  
    try {
      const { data } = await app.get('/usuario/token', {
        headers: {
          token: token,
        },
      })
      return data.user
  
    } catch (error) {
      console.log('Error getting user data: ', error.message)
    }
  }