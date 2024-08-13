import app from './config'

export const getAllOrders = async () => {
    const token = localStorage.getItem('token');
    try {
        const { data } = await app.get('/pedido', {
            headers: {
                token: token
            }
        })
        console.log(data)
        return data

    } catch (error) {
        console.log('Error loging: ', error.message)
    }
}

export const createProject = async (name, description, owner_id) => {
    const token = localStorage.getItem('token');

    try {
        const { data } = await app.post('/pedido', {
            name: name,
            description: description,
            owner_id: owner_id
        }, {
            headers: {
                token: token
            }
        });

        return data;

    } catch (error) {
        console.error('Error al crear el cliente:', error);
        throw error;
    }
};

export const updateProject = async (id, name, description) => {
    const token = localStorage.getItem('token');

    try {
        const { data } = await app.patch(`/pedido/${id}`, {
            name,
            description
        }, {
            headers: {
                token: token
            }
        });

        return data; // Devolver los datos de la orden editada

    } catch (error) {
        console.error('Error al editar la orden:', error);
        throw error; // Propagar el error para que pueda ser manejado por el código que llama a esta función
    }
};


export const deleteProject = async (id) => {
    const token = localStorage.getItem('token');
    console.log(id)
    const ide = id
    try {
        await app.delete(`/pedido/${ide}`, {
            headers: {
                token: token
            }
        });


        return "Project deleted"

    } catch (error) {
        console.error('Error al borrar el proyecto:', error);
        throw error; // Propagar el error para que pueda ser manejado por el código que llama a esta función
    }
};