import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const employees = [
    {
        id: 1,
        profileAdress: '0xf2645d8950C672d4d2FA73e73234A6B5edFf4b1B',
        profileName: 'Paolo',
        profileEmail: 'paolo.tancredi89@gmail.com',
        profileRole: 'Product Specialist',
        profileDivision: 'Sales',
        profileLocation: 'Roma',
        profilePower: '50 ETH',
    },
    {
        id: 2,
        profileAdress: '0xf2645d8950C672d4d999999999999999',
        profileName: 'Arturo',
        profileEmail: 'arturo@gmail.com',
        profileRole: 'Product Specialist',
        profileDivision: 'After Sales',
        profileLocation: 'Livorno',
        profilePower: '18 ETH',
    }
];

const EmployeeProfile = () => (
    <div>
        {employees.map(profile => (
            <ListGroup>
                <ListGroup.Item>ID: {profile.id}</ListGroup.Item>
                <ListGroup.Item>ETH Adress: {profile.profileAdress}</ListGroup.Item>
                <ListGroup.Item>Name: {profile.profileName}</ListGroup.Item>
                <ListGroup.Item>Email: {profile.profileEmail}</ListGroup.Item>
                <ListGroup.Item>Role: {profile.profileRole}</ListGroup.Item>
                <ListGroup.Item>Role: {profile.profileDivision}</ListGroup.Item>
                <ListGroup.Item>Role: {profile.profileLocation}</ListGroup.Item>
                <ListGroup.Item>Power: {profile.profilePower}</ListGroup.Item>
            </ListGroup>
        ))}
    </div>
);

export default EmployeeProfile;