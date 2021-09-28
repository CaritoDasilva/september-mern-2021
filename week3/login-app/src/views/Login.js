import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = (props) => {
    const { users, setUsers } = props;

    const [registerForm, setRegisterForm] = useState({
        userName: '',
        address: '',
        email: '',
        rut: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    })

    const [isRegisterOn, setIsRegisterOn] = useState(true);

    const [errMessage, setErrMsg] = useState('');

    const handleOnChange = (e) => {
        console.log({[e.target.name]: e.target.value})
        console.log(registerForm)          //nombre del input = al del formulario
        setRegisterForm({...registerForm, [e.target.name]: e.target.value});
        if(e.target.name === 'password' && e.target.value !== registerForm.confirmPassword) {
            setErrMsg('*Contraseñas deben coincidir');
        } else {
            setErrMsg('');
        }
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log('hice click en el form', Object.values(registerForm).includes(''))
        if(Object.values(registerForm).includes('')) {
            setErrMsg('*Debe llenar todos los campos del formulario')
        } else {
            setErrMsg('');
            setUsers([...users, registerForm ])

        }


    }




    return (
        <div className="card-container">
            {isRegisterOn ? (
                <div>
                    <h1>Registro</h1>
                    <Form onSubmit={handleSubmitForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre completo:</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar nombre completo" value={registerForm.userName} name='userName' onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Dirección:</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Ingresar dirección" name='address' value={registerForm.address} onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control placeholder="Ingresar correo electrónico" name='email' value={registerForm.email} onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Rut:</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar rut" name='rut' value={registerForm.rut} onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Rut:</Form.Label>
                            <Form.Control type="text" placeholder="Ingresar rut" name='phoneNumber' value={registerForm.phoneNumber} onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control placeholder="Ingresar contraseña" name='password' value={registerForm.password} onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirmar contraseña:</Form.Label>
                            <Form.Control placeholder="Confirmar contraseña" name='confirmPassword' value={registerForm.confirmPassword} onChange={handleOnChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p>Ya soy un usuario, redireccioname al <Button variant="link" onClick={() => setIsRegisterOn(false)}>Login</Button></p>
                    <p className='errors-text'>{errMessage}</p>
                </div>
            ) : (
                <div>
                    <h1>Login</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Ingresar correo electrónico" name='email' value={registerForm.email} onChange={handleOnChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control type="password" placeholder="Ingresar contraseña" name='password' value={registerForm.password} onChange={handleOnChange} />
                        </Form.Group>
                    </Form>
                    <p>Aún no soy un usuario, redireccioname al <Button variant="link" onClick={() => setIsRegisterOn(true)}>Registro</Button>  </p>
                </div>

            )}
            

            


        </div>
    )
}

export default Login;