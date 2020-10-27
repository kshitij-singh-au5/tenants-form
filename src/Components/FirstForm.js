import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const FirstForm = () => {
    //states
    const [arr, setArr] = useState([])
    const [count, setCount] = useState(1)
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [delet, setDelet] = useState(0)
    const [len, setLen] = useState(0)
    const [ok, setOk] = useState(false)

    //creating an array using count to add another roommate and render another form
    const a = new Array(count).fill(1)

    const handleSubmit = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhone("")
    }

    const handleClick = () => {
        setCount(count + 1)
        handleSubmit();

        //saving data in localstorage
        let arr1 = localStorage.getItem('hello')

        let hideArray = JSON.parse(arr1) || [];

        hideArray.push({ "firstname": firstname, "lastname": lastname, "email": email, "phone": phone })

        localStorage.setItem('hello', JSON.stringify(hideArray))

    }

    //delete function 
    const handleDelete = () => {
        setCount(count - 1)
    
        setOk(true)
        setDelet(delet + 1)
    }

    //delete function in case of localstorage
    const handleDelete1 = (i) => {
        let arrCopy = arr
        arrCopy.splice(i, 1)
        setArr(arrCopy)
        localStorage.clear()
        
    }
    
    //getting saved data from localstorage to fill entries in the input fields when we go back to the previous page
    useEffect(() => {
        let x = localStorage.getItem("hello")
        setArr(JSON.parse(x))
        if (arr && arr.length > 0) {
            setLen(arr.length)
        }
    }, [])
    
    return (
        <>

            <div style={{ display: 'flex', justifyContent: 'center', fontSize: '25px', marginTop: '100px' }}><b>Tenant Details</b></div>

            {/* component render when data is coming from localstorage when we go back to previous page */}
            {arr && arr.length > 0
                ?
                arr.map((ele, i) => {
                    return (
                        <div style={{ marginLeft: '300px' }} key={i}>
                            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginLeft: '30px', marginTop: '50px', fontSize: '20px' }}><b>Tenant{i + 1}</b></div>
                                    <IconButton style={{ color: 'purple', marginLeft: '729px', marginTop: '45px' }} onClick={(i) => { handleDelete1(i) }}><DeleteOutlineIcon /></IconButton>
                                </div>


                                <div style={{ padding: '30px' }}>
                                    <TextField required value={ele.firstname} id="outlined-basic" label="First Name" variant="outlined" style={{ width: '400px' }} />
                                    <TextField required value={ele.lastname} id="outlined-basic" label="Last Name" variant="outlined" style={{ marginLeft: '30px', width: '400px' }} />
                                </div>
                                <div style={{ padding: '30px' }}>
                                    <TextField required value={ele.email} id="outlined-basic" label="Email" variant="outlined" style={{ width: '400px' }} />
                                    <TextField required value={ele.phone} id="outlined-basic" label="Phone  Number" variant="outlined" style={{ marginLeft: '30px', width: '400px' }} />
                                </div>

                            </form>

                        </div>
                    )
                })
                :
                ""
            }


            {/* normal component render */}
            {a && a.map((ele, i) => {
                return (
                    <div style={{ marginLeft: '300px' }}>
                        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ marginLeft: '30px', marginTop: '50px', fontSize: '20px' }}><b>Tenant{i + 1}</b></div>
                                {!arr && count > 1
                                    ?
                                    <IconButton style={{ color: 'purple', marginLeft: '729px', marginTop: '45px' }} onClick={() => { handleDelete() }}><DeleteOutlineIcon /></IconButton>
                                    :
                                    ""
                                }
                            </div>

                            <div style={{ padding: '30px' }}>
                                <TextField required onChange={(e) => { setFirstName(e.target.value) }} id="outlined-basic" label="First Name" variant="outlined" style={{ width: '400px' }} />
                                <TextField required onChange={(e) => { setLastName(e.target.value) }} id="outlined-basic" label="Last Name" variant="outlined" style={{ marginLeft: '30px', width: '400px' }} />
                            </div>
                            <div style={{ padding: '30px' }}>
                                <TextField required onChange={(e) => { setEmail(e.target.value) }} id="outlined-basic" label="Email" variant="outlined" style={{ width: '400px' }} />
                                <TextField required onChange={(e) => { setPhone(e.target.value) }} id="outlined-basic" label="Phone  Number" variant="outlined" style={{ marginLeft: '30px', width: '400px' }} />
                            </div>


                        </form>

                    </div>
                )
            })}

            {/* Add roommates button  */}
            {firstname && lastname && email && phone ?
                <Button variant="outlined" size="large" style={{ color: 'purple', width: '830px', marginLeft: '329px' }} onClick={() => { handleClick() }}><b>+  ADD ROOMMATES</b></Button>
                :
                <Button variant="outlined" size="large" style={{ color: 'purple', width: '830px', marginLeft: '329px' }} disabled><b>+  ADD ROOMMATES</b></Button>
            }



            {/* Next page button */}
            {firstname && lastname && email && phone || ok ?
                <Link to='/2'>
                    <div>
                        <Button onClick={() => { handleClick() }} variant="contained" style={{ backgroundColor: 'purple', color: 'white', marginTop: '50px', marginLeft: '1100px' }}>Next</Button>
                    </div>
                </Link>
                :
                <div>
                    <Button disabled variant="contained" style={{ backgroundColor: 'purple', color: 'white', marginTop: '50px', marginLeft: '1100px' }}>Next</Button>
                </div>
            }



        </>
    )
}

export default FirstForm;
