
import React, { useState } from 'react';

function App() {
    const [color, setColor] = useState('');

    return (
        <div>
            <h2>Select a Color</h2>

            <button onClick={() => setColor('Red')}>Red</button>
            <button onClick={() => setColor('Blue')}>Blue</button>
            <button onClick={() => setColor('Green')}>Green</button>
            <button onClick={() => setColor('Yellow')}>Yellow</button>

            {color && <h3>You have selected {color} color.</h3>}
        </div>
    );
}

export default App;
