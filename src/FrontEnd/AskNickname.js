import React, {Component} from 'react';
import SimpleDashBoard from './SimpleDashBoard';
import swal from 'sweetalert';


class AskNickname extends Component{
    constructor(props){
        super(props);
        this.state = {
            nickname: "",
            state: false
        }
    }

    nickname(e){
        this.setState({nickname: e.target.value})
    }

    situationHandler(e){
        if(this.state.nickname === ""){
            this.setState({state: false})
            swal("Awww Snap!", "The Nickname is required!", "error");
        }else{
            this.setState({state: true})
        }
    }

    render(){

        if(this.state.state === false){
            return(
                <center id="nickname">
                    <br/><br/><br/>
                    <h1>May I ask your Nickname?</h1>
                    <input placeholder="Enter your nickname" onChange={(e) => this.nickname(e)}></input>
                    <br></br>
                    <button onClick={(e) => this.situationHandler(e)}>Click</button>
                </center>
            )
        }else{
            return(
                <SimpleDashBoard name={this.state.nickname}></SimpleDashBoard>
            )
        }

    }
}
export default AskNickname;