import axios from 'axios';

const apiURL = 'http://localhost:5000/api';

export const getParties = async () => {
    return await axios.get(apiURL);
};

export const updateParty = async (id, data) => {
    const endpoint = `http://localhost:5000/api/${id}`;
    return await axios.put(endpoint, data);
}