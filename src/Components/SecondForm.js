import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const SecondForm = () => {

    const GreenCheckbox = withStyles({
        root: {
            color: purple[400],
            '&$checked': {
                color: purple[600],
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);


    const [state, setState] = useState({

        checkedH: false,
        checkedD: false,
        checkedP: false,
        checkedE: false
    });

    const [custom, setCustom] = useState(false)
    const [element, setElement] = useState([])
    const [text, setText] = useState("")
    const [edit, setEdit] = useState(false)

    const handleChange = (event) => {
        
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const addCustom = () => {
        setCustom(true)

    }


    const customChange = () => {

        setElement(element.concat(text))
        setCustom(false)
        
        const obj = {text:false}
        setState({...state,...obj})
        
    }

    const editElement = (index) => {
        addCustom()
        const arr = JSON.parse(JSON.stringify(element))
        arr[index] = text
        console.log('text',text)
        // console.log('arr',arr)
        setElement(arr)
        setEdit(!edit)
    }

    const editChange = () => {
        
    }

    return (
        <div style={{ marginTop: '100px', display: 'grid', justifyContent: 'center' }}>
            <div>
                <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedD} onChange={handleChange} name="checkedD" />}
                    label="Drivers License"
                />
            </div>
            <div>
                <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedH} onChange={handleChange} name="checkedH" />}
                    label="Health Card"
                />
            </div>
            <div>
                <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedP} onChange={handleChange} name="checkedP" />}
                    label="PR Card"
                />
            </div>
            <div>
                <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedE} onChange={handleChange} name="checkedE" />}
                    label="Proof of employment/finances"
                />
            </div>
            {element.map((ele, index) => {
                return (
                    <div key={index} style={{ display: 'flex' }}>
                        <FormControlLabel
                            control={<GreenCheckbox checked={state.ele} onChange={handleChange} name={ele} />}
                            label={ele}
                        />
                        <IconButton onClick={()=>{editElement(index)}}><EditOutlinedIcon /></IconButton>
                    </div>
                )
            })}
            <div>
                {custom
                    ?
                    <div style={{ display: 'flex' }}>
                        <form>
                            <TextField onChange={(e) => { setText(e.target.value) }} id="outlined-basic" label="Custom ID" variant="outlined" style={{ width: '200px' }} />
                            <Button onClick={() => { setCustom(false) }}>CANCEL</Button>
                            {edit
                            ?
                            <Button onClick={editChange}>SAVE</Button>
                            :
                            <Button onClick={customChange}>SAVE</Button>
                            }
                            
                        </form>
                    </div>
                    :

                    <Button onClick={addCustom}>+ ADD CUSTOM</Button>
                }

            </div>
        </div>


    )
}

export default SecondForm;