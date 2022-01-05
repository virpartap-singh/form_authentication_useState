import React from 'react';
import {useState} from 'react';
import './FormSubmit.css';


function FormSubmit() {
    const [name,setName] = useState('');
    const [nameError,setNameError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError,setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError,setPasswordError] = useState('');

    const [success, setSuccess]= useState('');

    const handleName =(e)=>{
        setName(e.target.value);

    }

    const handleEmail =(e)=>{
        setEmail(e.target.value);

    }

    const handlePassword =(e)=>{
        setPassword(e.target.value);

    }


    const handleSubmit = (e) =>{
        e.preventDefault();

        if(name ===''){
            setNameError('Name Required');
        }

        if(email ===''){
            setEmailError('Email Required');
        }

        if(password ===''){
            setPasswordError('Email Required');
        }

        if( name !== '' && email !== '' & password !== ''){
            setSuccess('Form submitted');
            console.log('Name =',name);
            console.log('Email =',email);
            console.log('Password =',password);
            e.target.reset();
            setName("");
            setEmail("");
            setPassword("");            
        }
       
       
    }
    return (
        <div>
            <div className='form_container'>
                <h1>Form</h1>

                <form onSubmit={handleSubmit}>
                     <h5>Name</h5>
                    <input type='text' value={name} onChange={handleName} /><br></br>
                    {nameError && <div className='error_msg'>{nameError}</div>}

                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={handleEmail} /><br></br>
                    {emailError && <div className='error_msg'>{emailError}</div>}

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={handlePassword} /> <br></br>
                    {passwordError && <div className='error_msg'>{passwordError}</div>}

                    <button type='submit' className='submit_Button'>Submit</button>
                    {success && <div className='success_msg'>{success}</div>}
                </form>

               
            </div>
        </div>
    )
}

export default FormSubmit;
