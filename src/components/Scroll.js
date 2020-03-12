import React from 'react';

const Scroll = ({ children }) => {
    return (
        <div style={{ 
                overflowY: 'scroll', 
                border: '5px solid black', 
                marginTop: '1em',
                height: '50max' 
        }}>
            {children}
        </div>
    )
}

export default Scroll