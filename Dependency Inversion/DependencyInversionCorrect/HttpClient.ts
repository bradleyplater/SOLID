import axios from 'axios';
import  IApiClient  from './ApiClient';

export function HttpClient(): IApiClient {
    return  {        
        createUser: async (username: string) => {
            return axios.post('dummy endpoint', {username});
        },

        getUserByUsername: async (username: string) => {
            return axios.get(`dummy endpoint?=username=${username}`);
        }
    }
}

export function AdminHttpClient(): IApiClient {
    return  {        
        createUser: async (username: string) => {
            return axios.post('dummy endpoint', {username});
        },

        getUserByUsername: async (username: string) => {
            return axios.get(`dummy endpoint?=username=${username}`);
        }
    }
}