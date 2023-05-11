import axios from 'axios';

const url = 'http://localhost:5000/api';

export const signUp = (authData) => axios.post(`${url}/signup`, authData)
export const signIn = (authData) => axios.post(`${url}/login`, authData)