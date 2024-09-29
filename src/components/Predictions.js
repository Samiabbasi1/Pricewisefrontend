//to handle fetching predictions from the backend.Make sure the machine learning model API is set up and connected to /predictions.

import React, { useState } from 'react';
import api from '../axiosConfig';

const Prediction = () => {
    const [inputData, setInputData] = useState({});
    const [prediction, setPrediction] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/pricepredictions', inputData);
            setPrediction(response.data.prediction);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Product Details:</label>
                <input type="text" name="product" onChange={handleInputChange} />
                <button type="submit">Get Prediction</button>
            </form>
            {prediction && <div>Predicted Price: {prediction}</div>}
        </div>
    );
};

export default Prediction;
