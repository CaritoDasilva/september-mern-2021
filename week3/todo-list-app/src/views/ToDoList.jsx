import React, { useContext, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { ListContext } from '../contexts/ListContext';


const ToDoList = (props) => {
    const { list, setList } = useContext(ListContext);

    useEffect(() => {
        console.log("🚀 ~ file: ToDoList.jsx ~ line 7 ~ ToDoList ~ list", list)

    }, [list])

    const statusChange = (e, index) => {
        const newTodoList = list.map((l, i) => {
            if(i === index) {
                l = {...l, status: e.target.value === 'true' ? true : false};
            }
            return l;
        })
        console.log("🚀 ~ file: ToDoList.jsx ~ line 21 ~ newTodoList ~ newTodoList", newTodoList)
        setList(newTodoList);
    }

    return (
        <div className='todoListContainer'>
            <div className="table-container">
                <h1>Lista de Tareas Pendientes</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Prioridad</th>
                            <th>Status</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.length > 0 && list.map((l, index) => !l.status && (
                            <tr key={index}>
                                <td>{l.title}</td>
                                <td>{l.description}</td>
                                <td>{l.priority}</td>
                                <td>{l.status ? 'terminada' : 'pendiente'}</td>
                                <td>
                                    <Form.Select size="lg" name="status" value={l.status} onChange={(e) => statusChange(e, index)}>
                                        <option value={false}>Pendiente</option>
                                        <option value={true}>Terminado</option>
                                    </Form.Select>
                                </td>
                            </tr>

                        )

                        )}
                    </tbody>
                </Table>
            </div>
            <div className="table-container">
                <h1>Lista de Tareas Terminadas</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Prioridad</th>
                            <th>Status</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.length > 0 && list.map((l, index) => l.status && (
                            <tr key={index}>
                                <td>{l.title}</td>
                                <td>{l.description}</td>
                                <td>{l.priority}</td>
                                <td>{l.status ? 'terminada' : 'pendiente'}</td>
                                <td>
                                    <Form.Select size="lg" name="status" value={l.status} onChange={(e) => statusChange(e, index)}>
                                        <option value={false}>Pendiente</option>
                                        <option value={true}>Terminado</option>
                                    </Form.Select>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default ToDoList