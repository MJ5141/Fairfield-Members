import React from 'react'
import { Link } from "react-router-dom";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap'

const EditUser = () => {
  return (
    <Form>
        <FormGroup>
            <Label>Player's Name</Label>
            <Input type="text" placeholder="Enter Player Name"></Input>
            <Label>Contact Number</Label>
            <Input type="text" placeholder="Contact Number"></Input>
            <Label>Email</Label>
            <Input type="email" placeholder="Email"></Input>
        </FormGroup>
        <Button type="submit"> Make Changes</Button>
        <Link to="/" className="btn btn-danger"> Cancle</Link>       
    </Form>
  )
}

export default EditUser
