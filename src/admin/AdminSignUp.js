import React, {Component} from 'react';
import swal from 'sweetalert';

class AdminSignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            state: false
        }
    }

    loginHandler = () => {
        event.preventDefault();
        var body = {username: this.state.username, password: this.state.password};
        req
        .login(body)
        .then(res => {
            if(this.state.username === "administrator" && this.state.password === "admin") {
                this.setState({state:true})
            }
            else{
                alert(res.data.sms);
            }
        })
        .catch(err => {
            console.log(err);
        });
    };

    render() {
        if(this.state.state) {
            return <Redirect to = "/adminForm"/>;
        }

        return (
            <div>
                <center>
                    Username:<br/>
                    <input type="text" value="username" /><br/>
                    Password:<br/>
                    <input type="password" value="password"/><br/>
                    <button onClick={(e) => this.loginHandler(e)}>SUBMIT</button>
                </center>
            </div>
        )
    }


}

export default AdminSignUp;