import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



function Register() {

    const [Input, setInput] = useState(
        {
            name: "",
            email: "",
            phone: "",
            city: ""
        }

    )
   
    
    const toastOptions = {
        position: "bottom-right",
        ResizeObserverSize: "small",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }

    const navigate = useNavigate();


    const setValue = (e) => {

        setInput({ ...Input, [e.target.name]: e.target.value })
    }

    // https://student-data-coby.onrender.com

    const submitForm = async (e) => {
        e.preventDefault();
        let { data } = await axios.post("https://student-data-coby.onrender.com/register", {
            ...Input
        })
       
        if (data.status === false) {
            toast.error(data.msg, toastOptions);
        }

        if (data.status === true) {
            navigate("/showdata");
        }

    }

    return (
        <>
            <Container>
                <form onSubmit={(e) => submitForm(e)}>
                    <input
                        type='text'
                        placeholder='Enter Student Name'
                        name='name'
                        onChange={(e) => { setValue(e) }}
                        value={Input.name}

                    />
                    <input
                        type='text'
                        placeholder='Enter Student Email Id '
                        name='email'
                        onChange={(e) => { setValue(e) }}
                        value={Input.email}

                    />
                    <input
                        type='text'
                        placeholder='Enter Student Phone no.'
                        name='phone'
                        onChange={(e) => { setValue(e) }}
                        value={Input.phone}
                    />

                    <input
                        type='text'
                        placeholder='Enter Student City'
                        name='city'
                        onChange={(e) => { setValue(e) }}
                        value={Input.city}
                    />
                    <div className='btn'>
                        <button type='submit'  >
                            SUBMIT
                        </button>

                    </div>

                </form>

            </Container>

            <ToastContainer />

        </>
    )
}

const Container = styled.div`
height: 100vh;
width:100vw;
display: flex;
flex-direction: column;
justify-content: center;
gap:1rem;
align-items: center;
background-image: linear-gradient(to left , green ,green);

form{
    display: flex;
    flex-direction: column;
    gap:2rem;
    background-color: #090024ca;
    border-radius : 2rem ;
    padding : 3rem 5rem;
    width: 50%;
    height: 60%;

    input{
        padding: 1rem;
        border-radius : 1rem ;
    }
}
.btn{
    display: flex;
    justify-content: center;
    align-items: center;

}

button{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
       background-color:#090024ca;
       color:greenyellow;
       width :7rem;
       height: 3rem;
       border-radius: 1rem;
    }
   
`
export default Register;