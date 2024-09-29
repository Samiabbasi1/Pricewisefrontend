import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getProducts = () => {
    return axios.get(`${API_URL}/products`); 
};

export const addProduct = (productData) => {
    return axios.post(`${API_URL}/products`, productData);
};

export const updateProduct = (productId, updatedData) => {
    return axios.put(`${API_URL}/products/${productId}`, updatedData);
};

export const deleteProduct = (productId) => {
    return axios.delete(`${API_URL}/products/${productId}`);
};
