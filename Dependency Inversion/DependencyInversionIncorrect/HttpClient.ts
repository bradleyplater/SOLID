import axios from 'axios';

export default {
    createUser: async (username: string) => {
        return axios.post('dummy endpoint', {username});
    },

    getUserByUsername: async (username: string) => {
        return axios.get(`dummy endpoint?=username=${username}`);
    }
}