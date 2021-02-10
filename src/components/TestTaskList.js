import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const tasks = [
    {
        id: 1,
        taskName: 'Explain Mathematics',
        taskRole: 'Senior Teacher',
        taskExpirydate: '30/05/2020',
        taskWage: '50 ETH',
        taskDescription: 'explain how mathemetic work! dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
        id: 2,
        taskName: 'Explain History',
        taskRole: 'Teacher',
        taskExpirydate: '01/05/2020',
        taskWage: '32 DAI',
        taskDescription: 'explain II World War to 0xf2645d8950C672d4d2FA73e73234A6B5edFf4b1B'
    },
];

const TestTaskList = () => (
    <div>
        {tasks.map(task => (
            <ListGroup className="my-2" key={task.id}>
                <ListGroup.Item>{task.id}</ListGroup.Item>
                <ListGroup.Item>Name: {task.taskName}</ListGroup.Item>
                <ListGroup.Item>Level: {task.taskRole}</ListGroup.Item>
                <ListGroup.Item>Wage: {task.taskWage}</ListGroup.Item>
                <ListGroup.Item>Expiry date: {task.taskExpirydate}</ListGroup.Item>
                <ListGroup.Item>Description: {task.taskDescription}</ListGroup.Item>
                <ListGroup.Item><Button variant="primary">I'll do this task!</Button></ListGroup.Item>
            </ListGroup>
        ))}
    </div>
);

export default TestTaskList;