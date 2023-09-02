import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
})

// List of all the end point 
export const getStudents = (data) => api.post('/student', data);

export default api;