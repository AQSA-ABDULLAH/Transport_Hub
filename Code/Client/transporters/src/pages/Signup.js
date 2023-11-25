import React, { useState } from 'react';

export default function SignUp() {
    // Define state variables for form fields
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [hasExperience, setHasExperience] = useState(false);
    const [dob, setDOB] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [education, setEducation] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            fullName,
            phone,
            email,
            hasExperience,
            dob,
            address,
            city,
            education,
        });
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label>
                    Phone No.:
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label>
                    Have any experience?:
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="yes"
                                checked={hasExperience === 'yes'}
                                onChange={() => setHasExperience('yes')}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="no"
                                checked={hasExperience === 'no'}
                                onChange={() => setHasExperience('no')}
                            />
                            No
                        </label>
                    </div>
                </label>

                <br />

                <label>
                    Date of Birth:
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDOB(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label>
                    Address:
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label>
                    City:
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </label>
                <br />

                <label>
                    Education:
                    <input
                        type="text"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        required
                    />
                </label>
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

