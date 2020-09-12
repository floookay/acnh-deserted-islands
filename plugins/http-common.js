import axios from 'axios'

export const HTTP = axios.create({
    baseURL: `https://reddit.com/`,
    headers: {
        Authorization: 'Bearer {token}'
    }
})
