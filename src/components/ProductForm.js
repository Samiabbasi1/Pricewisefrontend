import React, { useState } from "react";
import api from "../axiosConfig";

const ProductForm = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [features, setFeatures] = useState(" ");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/products',{name,category,brand,features});
            console.log(response.data);
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Product Name : </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Category : </label>
            <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}/>
            <label>Brand : </label>
            <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)}/>
            <label>Features : </label>
            <input type="text" value={features} onChange={(e) => setFeatures(e.target.value)}/>
            <button type="submit"> Submit </button>
        </form>
    );
};

export default ProductForm;