import * as React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function TemperatureConverter() {
    const [temperatureCel, setTemperatureCel] = useState(0);
    const [temperatureFar, setTemperatureFar] = useState(32);

    function toFarengeit(cel) {
        return cel*1.8 + 32;
    }

    function toCel(far) {
        const cel = Math.round(((far - 32)*5/9)*10)/10;
        return cel;
    }

    const changeFar = (e) => {
        
        if (e.key === 'Enter') {
            setTemperatureFar(toFarengeit(temperatureCel));
            const tempFarInput = document.querySelector('#temperature-far');
            tempFarInput.value = temperatureFar;
        }
        
    }

    const changeCel = (e) => {

        if (e.key === 'Enter') {
            setTemperatureCel(toCel(temperatureFar));
            const tempCelInput = document.querySelector('#temperature-cel');
            tempCelInput.value = temperatureCel;
        }
        
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return ( <form className="block-temperature" onSubmit={handleSubmit}>
        <TextField id="temperature-cel" label="Цельсия" variant="outlined" type='number' onChange={(e) => 
        {setTemperatureCel(e.target.value)}} onKeyPress={changeFar} color="secondary" value={temperatureCel} InputLabelProps={{
            shrink: true,
          }}/>
        {/* <Button variant="contained" type='submit'>Конвектировать</Button> */}
        <TextField id="temperature-far" label="Фаренгейт" variant="outlined" type='number' value={temperatureFar} onChange={(e) => {setTemperatureFar(e.target.value)}} onKeyPress={changeCel} InputLabelProps={{
            shrink: true,
          }}/>
    </form> );
}

export default TemperatureConverter;