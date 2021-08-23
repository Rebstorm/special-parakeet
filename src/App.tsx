import React from 'react';
import './App.css';
import {SelectInput} from 'vcc-ui';

function App() {
    const [value, setValue] = React.useState('');

    return (
        <SelectInput value={value} onChange={(e: any) => setValue(e.target.value)}>
            <option value="bilmodell">Bilmodell</option>
            <option value="c30" disabled>
                Volvo C30
            </option>
            <option value="c70">Volvo C70</option>
            <option value="c90">Volvo C90</option>
            <option value="c40">Volvo S40</option>
            <option value="s60">Volvo S60</option>
            <option value="s80">Volvo S80</option>
            <option value="s90">Volvo S90</option>
        </SelectInput>
    );
}

export default App;
