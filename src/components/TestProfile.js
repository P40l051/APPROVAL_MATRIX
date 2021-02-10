import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const profiles = [
    {
        id: 1,
        profileName: 'Paolo',
        profileAdress: 'paolo.tancredi89@gmail.com',
        profileRole: 'Engineer',
        profilePower: '50 ETH',
    },
];

const TestProfile = () => (
    <div>
        {profiles.map(profile => (
            <ListGroup>
                <ListGroup.Item>Name: {profile.profileName}</ListGroup.Item>
                <ListGroup.Item>Email: {profile.profileAdress}</ListGroup.Item>
                <ListGroup.Item>Role: {profile.profileRole}</ListGroup.Item>
                <ListGroup.Item>Power: {profile.profilePower}</ListGroup.Item>
            </ListGroup>
        ))}
    </div>
);

export default TestProfile;