import React, { useEffect, useState } from 'react';
import api from '../axiosConfig';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await api.get('/products');
                setProducts(response.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProducts();
    }, []);

    const deleteProduct = async(productId) => {
        try{
            await api.delete('/products/${productId}');
            setProducts(products.filter(product => product.id !== productId));
        }
        catch (error)
        {
            console.error(error);
        }
    };

    return(
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                {products.map(product => (
                    <li key = {product.id}>
                        {product.name} - {product.category} - {product.brand} - {product.features}
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;

