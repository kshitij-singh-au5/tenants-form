import React, { useState } from 'react'
import './InitialForm.css';
import { Link } from 'react-router-dom';
import { Select } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';

import { Button } from '@material-ui/core';

const InitialForm = () => {

    const [value1, setValue] = useState("")

    const handleChange = (event) => {
        setValue(event.target.value)
        console.log('value',value1)
    }

    return (
        <div style={{ display: 'grid', justifyContent: 'center', marginTop: '200px' }}>
            <div style={{ fontSize: '25px', marginLeft: '180px' }}><b>Add Tenants</b></div>
            {/* Select Dropdown component */}
            <FormControl>
                <InputLabel id="demo-controlled-open-select-label">Select Unit</InputLabel>
                <Select value={value1} onChange={handleChange} style={{ width: '500px' }}>
                    <MenuItem value="china">China Town</MenuItem>


                </Select>
            </FormControl>
            {!value1
            ?
            <Button disabled variant="contained" style={{ backgroundColor: 'purple', color: 'white', marginTop: '50px', marginLeft: '450px' }}>Next</Button>
            :
            <Link to='/1'>
                <Button variant="contained" style={{ backgroundColor: 'purple', color: 'white', marginTop: '50px', marginLeft: '450px' }}>Next</Button>
            </Link>
            }
        </div>


    )
}

export default InitialForm;