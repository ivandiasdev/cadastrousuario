import axios from 'axios'

const api = axios.create({
    baseURL: 'https://apicadastro-feps.onrender.com/',
    headers: {
        'Authorization': 'Bearer YOUR_API_TOKEN',
    },
})

export default api
