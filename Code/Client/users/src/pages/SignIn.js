import React, { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handelLoginData = async (e) => {
        console.warn(email, password);
        e.preventDefault();
        let result = await fetch('http://localhost:6000/user_sigIn', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        if (result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/');
        } else {
            alert("Plz enter correct details");
        }
    }

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
          navigate('/')
        }
      })

    return (
        <div className='container' id="login">
            <form onSubmit={handelLoginData}>
                <h2 className='text-center pt-3'>SIGN IN</h2>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
                <p className='pt-3'>Don't have an Account yet <Link to='/signup'>SIGN UP</Link></p>
            </form>
        </div>
    );
}