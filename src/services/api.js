import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Authorization': 'Bearer YOUR_API_TOKEN',
    },
})

export default api