import Axios from "axios"

//Action creator
export const createPolicy = (name, amount) => {
    //Action
    return {
        type: 'CREATE_POLICY',
        payload: {
            name: name,
            amount: amount
        }
    }
}

export const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: name
    }
}

export const createClaim = (name, amount) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amount: amount
        }
    }
}

export const getUsers = () => {
    return async (dispatch, getState) => {
        try{
            const respose = await Axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({
                type: 'NEW_USER_LIST',
                payload: respose.data
            })
        }
        catch{
            dispatch({
                type: 'ERROR'
            })
        }
    }
}
