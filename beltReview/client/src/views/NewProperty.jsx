import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const NewProperty = () => {
    const [propertyForm, setPropertyForm] = useState({
        propertyName: '',
        description: '',
        location: '',
        price: '',
        owner: ''
    });

    const [errorsForm, setErrorsForm] = useState({
        propertyName: '',
        description: '',
        location: '',
        price: '',
        owner: ''
    })

    const handlerOnChange = (e) => {
        setPropertyForm({ ...propertyForm, [e.target.name]: e.target.value });
       
    }

    const addProperty = async (e) => {
        try {
            e.preventDefault();
            const valuesForm = Object.values(propertyForm);
            console.log("🚀 ~ file: NewProperty.jsx ~ line 28 ~ addProperty ~ valuesForm", valuesForm)
            const keysForm = Object.keys(propertyForm);
            console.log("🚀 ~ file: NewProperty.jsx ~ line 30 ~ addProperty ~ keysForm", keysForm)
            const indexError = valuesForm.findIndex(e => e === '');
            
            if (indexError !== -1) {
                console.log('index', valuesForm.findIndex(e => e === ''))
                setErrorsForm({ ...errorsForm, [keysForm[indexError]]: 'Todos los campos son requeridos'  })
            };
            const response = await axios.post('http://localhost:8000/api/properties/new', propertyForm);
            console.log("🚀 ~ file: NewProperty.jsx ~ line 41 ~ addProperty ~ response", response)
            
        } catch(err) {
            console.log("🚀 ~ file: NewProperty.jsx ~ line 44 ~ addProperty ~ err", err)
            return err;
        }


    }




    return (
        <div>
            <h1>Nueva Propiedad</h1>
            <Form onSubmit={addProperty}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre de la propiedad</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa nombre" name="propertyName" 
                        value={propertyForm.propertyName} onChange={(e) => setPropertyForm({ ...propertyForm, [e.target.name]: e.target.value})} required />
                    <p className="errors">{errorsForm.propertyName}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descripción de la propiedad</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa descripción" name="description" 
                        value={propertyForm.description} onChange={handlerOnChange} required />
                    <p className="errors">{errorsForm.description}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ubicación de la propiedad</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa ubicación" name="location" 
                        value={propertyForm.location} onChange={handlerOnChange} required/>
                    <p className="errors">{errorsForm.location}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Precio de la propiedad</Form.Label>
                    <Form.Control type="number" placeholder="Ingresa precio" name="price"  
                        value={propertyForm.price} onChange={handlerOnChange} required />
                    <p className="errors">{errorsForm.price}</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Dueño de la propiedad</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa nombre del dueño" name="owner" 
                        value={propertyForm.owner} onChange={handlerOnChange} required />
                    <p className="errors">{errorsForm.owner}</p>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default NewProperty;