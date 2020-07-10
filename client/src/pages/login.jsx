import React, { Component } from 'react' 
import Button from 'react-bootstrap/Button' 


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "", 
            password: "",
        } 
        this.authorizeLogin = this.authorizeLogin.bind(this)
    } 
    authorizeLogin = (e) => { 
        e.preventDefault() ;
        fetch('/api/v1/login', 
        { 
            method: 'POST', 
            body: JSON.stringify(this.state), 
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
              },

            }) 
            .catch(err => { 
                console.log(err); 
                alert('Error logging in please try again')
            })

        } 
   
   
    myChangeHandler = (event) => { 
        this.setState({ 
            [event.target.name]: event.target.value ,
           
        })
    }
    render() { 
        return (
            <div className="LoginPage">
                <h1> Login </h1>
                {/* <!-- form for user login  --> */}
                <form method="POST" onSubmit ={this.authorizeLogin} >

                    {/* <!-- input field for Username --> */}
                    <label>
                        Username:
                         <input name="username" type="text" onChange={this.myChangeHandler} value={this.state.username} />
                    </label> <br />

                    {/* <!-- input field for Password --> */}
                    <label>
                        Password:
                        <input name="password" type="password" onChange={this.myChangeHandler} value={this.state.password} />
                    </label> <br />


                    {/* <!-- forgot password link --> */}
                    <a href="/">Forgot Password? </a>

                    <Button  onSubmit={this.authorizeLogin} type="submit" > Login</Button>






                </form>



            </div>


        );
    }
}

export default Login;