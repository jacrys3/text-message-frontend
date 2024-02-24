import React, { useState } from 'react';
import TextBox from './TextBox';

function UrlForm() {
    const [url, setUrl] = useState('/api/data');
    const [currentUrl, setCurrentUrl] = useState('');

    function handleCurrentUrlChange(e) {
        setCurrentUrl(e.target.value);
    }

    function handleUrlSubmit(e) {
        e.preventDefault();
        setUrl(currentUrl);
    }

    return (
        <div>
            <h2>Url Form</h2>
            <form onSubmit={handleUrlSubmit}>
                <input 
                    name='urlInput' 
                    placeholder='Enter url..' 
                    type='text' 
                    onChange={handleCurrentUrlChange}
                />
                <button type='sumbit'>Submit</button>
            </form>
            <TextBox url={url}/>
        </div>
    );
}

export default UrlForm;