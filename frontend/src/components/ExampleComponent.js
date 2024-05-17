import React, { useEffect, useState } from 'react';
import API_URL from '../config';

const ExampleComponent = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/example-endpoint`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => console.error('Fetch error:', error));
    }, []);

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
};

export default ExampleComponent;
