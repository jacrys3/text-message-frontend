import React from 'react';
import useFetch from '../hooks/useFetch';

function TextBox({ url }) {
    const { data, loading, error } = useFetch(url);

    if (loading) return <p>Loading...</p>;
    if (error) {
        return <p>Error: {error.message}</p>
    };
    return <div>Response: {JSON.stringify(data)}</div>
}

export default TextBox;