import React, { useState } from 'react'
import axios from 'axios'
import './app.css';

const App = () => {

    const [email, setEmail] = useState("")


    const formHandler = async (e) => {
        e.preventDefault()
        
        const response = await fetch("https://green-signup-backend.herokuapp.com/app/signup", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email
                
            })
            
        })
        window.alert(`Thanks, you have successfully signed up for Green with email - ${email}`)
        console.log(email)
        const data = await response.json()
    }

        return (
            <div>
                <div className="container">
                    <div className="img">
                    <img src="/images/green.png" alt="logo"/>
                    </div> 

                    <div className="form">
                        <div className="title">
                        <h1>Welcome to Green.</h1>
                        <p>Please enter your email below</p>
                        </div>
                        
                        <form onSubmit={formHandler}>
                            
                            <div className="textBox">
                            <p>Email Address</p>
                            <input type= "email"
                            onChange={(e) => setEmail(e.target.value)}/>
                            </div>

                            <div className="remember">
                            <input type="checkbox"/>
                            <a>Remember this device</a>
                            </div>
                            
                            <div className="submit">
                            <input type="submit"
                            value="Sign In"/>
                        </div>    
                        </form>
                    </div>
                </div>
            </div>
        )
    }


export default App;
