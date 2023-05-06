import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProfileCard = ({ user }) => {
    return (
        <div className="d-flex mt-4 mb-3 align-items-start">
            <img
                src={require("../../assets/images/dashboard/face3.jpg")}
                className="img-sm rounded-circle mr-3"
                alt="face"
            />
            <div className="mb-0 flex-grow">
                <Card.Header className="p-3 d-flex align-items-center justify-content-center flex-wrap">
                    <span className="font-weight-bold lead text-primary">{user.name} </span>
                    <span className="ml-auto font-weight-bold font-italic">{user.email}</span></Card.Header>
                <p className="mb-0 font-weight-light font-italic">
                    “Knowing yourself is the beginning of all wisdom.”
                    <span className="font-italic text-primary text-sm-right ml-5">
                        Aristotle
                    </span>
                </p>
                <Link to='/testparams'><Button className="mt-3 ml-2">Take A Test</Button></Link>
            </div>
        </div>
    )
}

export default ProfileCard