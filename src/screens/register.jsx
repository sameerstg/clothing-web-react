import React from 'react'
import "../index.css";
import './register.css' ;

function Register() {
    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Redirect to product_catalog.html
    //     window.location.href = "product_catalog.html";
    // }
    // const myStyle = <style></style>

    return (
        <div >

            <div className="container" >
                <h1>Register</h1>
                <form >
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" pattern="[a-z0-5]{8,}" required />

                    <button type="submit" id="register-button">Register</button>
                </form>
            </div>
        </div>
    );
}



export default Register