import axios from "axios"



const BASE_URL = 'https://66248f2804457d4aaf9c7410.mockapi.io/'

export const $api = axios.create({
 baseURL: BASE_URL
})