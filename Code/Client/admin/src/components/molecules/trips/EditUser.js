import React, { useState } from 'react';
import { Button, Form, Grid, Loader } from "semantic-ui-react";

const initialState = {
    name: "",
    email: "",
    info: "", 
    contact: "",
};

const EditUser = () => {
    const [data, setData] = useState(initialState);
    const { name, email, info, contact } = data;
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        
        setData({...data, [e.target.name]: e.target.value});
    };
    const validateForm = () =>{
        let errors = {};
        if(!name){
            errors.name = "Name is required"
        }
        if(!email){
            errors.email = "email is required"
        }
        if(!info){
            errors.info = "info is required"
        }
        if(!contact){
            errors.contact = "contact is required"
        }
        return errors;
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        let errors = validateForm();
        if(Object.keys(errors).length) return setErrors(errors);
    }
    return (
        <div>
            <Grid centered verticalAlign="middle" columns="3" style={{ height: "80vh" }}>
                <Grid.Row>
                    <Grid.Column>
                        <div>
                            {isSubmit ? (
                                <Loader active inline="centered" size="huge" />
                            ) : (
                                <>
                                    <h2>Add User</h2>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Input
                                            label="Name"
                                            error={errors.name ? {content: errors.name} : null}
                                            placeholder="Enter Name"
                                            name="name"
                                            onChange={handleChange}
                                            value={name} // <-- Use val-ue={name} instead of value="name"
                                            autoFocus
                                        />
                                        <Form.Input
                                            label="email"
                                            placeholder="Enter email"
                                            name="email"
                                            onChange={handleChange}
                                            value={email} // <-- Use val-ue={name} instead of value="name"
                                            autoFocus
                                        />
                                        <Form.Input
                                            label="info"
                                            placeholder="Enter info"
                                            name="info"
                                            onChange={handleChange}
                                            value={info} // <-- Use val-ue={name} instead of value="name"
                                            autoFocus
                                        />
                                        <Form.Input
                                            label="contact"
                                            placeholder="Enter contact"
                                            name="contact"
                                            onChange={handleChange}
                                            value={contact} // <-- Use val-ue={name} instead of value="name"
                                            autoFocus
                                        />
                                            <Form.Input
                                                label="upload"
                                                type='file'
                                                onChange={(e) => setFile(e.target.files[0])}
                                            />
                                            <Button primary type='submit'>Submit</Button>
                                    </Form>
                                </>
                            )}
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default EditUser;
