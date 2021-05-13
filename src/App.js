// import React, { Component } from 'react'
// import axios from 'axios'
// import './app.css';

// class App extends Component {

// constructor (){
//     super()
//     this.state = {
//         email: ''
//     }
//     this.changeEmail = this.changeEmail.bind(this)
//     this.onSubmit = this.onSubmit.bind(this)
// }

// changeEmail(e){
//     this.setState({
//         email:e.target.value
//     })
// }
// onSubmit(e){
//     e.preventDefault()
//     const registered = {
//         email: this.state.email
//     }

//     axios.post("http://localhost:5000/app/signup", registered)
//     .then(res => console.log(res.data))

//     this.setState({
//         email: ''
//     })
// }
    

//     render() {
//         return (
//             <div>
//                 <div className="container">
//                     <div className="img">
//                     <img src="/images/green.png" alt="logo"/>
//                     </div> 

//                     <div className="form">
//                         <div className="title">
//                         <h1>Welcome to Green.</h1>
//                         <p>Please enter your email below</p>
//                         </div>
                        
//                         <form onSubmit={this.onSubmit}>
                            
//                             <div className="textBox">
//                             <p>Email Address</p>
//                             <input type= "email"
//                             onChange={this.changeEmail}
//                             value={this.state.email}/>
//                             </div>

//                             <div className="remember">
//                             <input type="checkbox"/>
//                             <a>Remember this device</a>
//                             </div>
                            
//                             <div className="submit">
//                             <input type="submit"
//                             value="Sign In"/>
//                         </div>    
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default App;



import React, { useState } from 'react'
import axios from 'axios'
import './app.css';

const App = () => {

    const [email, setEmail] = useState("")


    const formHandler = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:5000/app/signup", {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email
                
            })
            
        })
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
