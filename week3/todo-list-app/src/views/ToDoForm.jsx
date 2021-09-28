import React, { useState, useEffect, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ListContext } from '../contexts/ListContext';

const ToDoForm =  () => {
    const { list, setList } = useContext(ListContext);
    const [todoForm, setTodoForm] = useState({
        title: '',
        description: '',
        priority: '',
        status: false
    })
    
    useEffect(() => {
        console.log("🚀 ~ file: ToDoForm.jsx ~ line 7 ~ ToDoForm ~ todoForm", list)
        
    }, [todoForm])

    const handleOnChange = (e) => {
        console.log({[e.target.name]: e.target.value})
        setTodoForm({...todoForm, [e.target.name]: e.target.value});
    }

    const newTodo = (e) => {
        e.preventDefault();
        setList([...list, todoForm]);
    }




    return (
        <div className="todoFormContainer">
            <h1>Ingresar nueva tarea:</h1>
            <Form onSubmit={newTodo}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Título</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="title" value={todoForm.title} onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" name="description" value={todoForm.description} onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Prioridad</Form.Label>
                    <Form.Select size="lg" name="priority" value={todoForm.priority} onChange={handleOnChange}>
                        <option value={'alto'}>ALTA</option>
                        <option value={'medio'}>MEDIA</option>
                        <option value={'bajito'}>BAJA</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
        </div>
    )
}

export default ToDoForm;