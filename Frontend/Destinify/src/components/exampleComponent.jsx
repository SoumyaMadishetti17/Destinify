import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems,addItem, deleteItem } from '../features/REST/restSlice';

const ExampleComponent = () => {
    const dispatch = useDispatch();
    const { items, status } = useSelector((state) => state.rest);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const handleAddItem = () => {
        const newItem = { id: Date.now(), name: 'New Item' }; // Example item
        dispatch(addItem(newItem));
    };

    const handleDeleteItem = (id) => {
        dispatch(deleteItem(id));
    };

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
};

export default ExampleComponent;
