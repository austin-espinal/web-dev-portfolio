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
        emailjs.sendForm('service_9dtm9jn', 'template_1rg4cmj', form.current, 'rZAizi5PK_QF7BXfB')
            .then((result) => {
                console.log(result.text);
                window.alert("Message Sent!");
                window.location.reload(false);
            }, (error) => {
                console.log(error.text);
                window.alert("Error! message was not sent");
            });
    }

    return (
        <main className="bg-image page">
            <h2 className="ml-1">Contact Me</h2>
            <div className="container">
                <div className="bg round-25 m-2 p-2">
                    <form id="contact-form" ref={form} onSubmit={handleSubmit}>
                        <div>
                            <input type="text" name="name" defaultValue={name} placeholder="Name" onBlur={handleChange} />
                        </div>
                        <div>
                            <input type="email" name="email" defaultValue={email} placeholder="Email" onBlur={handleChange} />
                        </div>
                        <div>
                            <textarea name="message" defaultValue={message} placeholder="Message" onBlur={handleChange} />
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