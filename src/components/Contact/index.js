import React, { useState, useRef } from "react";
import { validateEmail } from '../../utils/helpers';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }

    }


    function handleSubmit(e) {
        e.preventDefault();
        // console.log(formState);
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, process.env.USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <main className="bg-image">
            <h2 className="ml-1">Contact Me</h2>
            <div className="container">
                <div className="bg round-25 m-2 p-2">
                    <form id="contact-form" ref={form} onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="email">Email address:</label>
                            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="message">Message:</label>
                            <textarea name="message" defaultValue={message} rows="5" onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contact;