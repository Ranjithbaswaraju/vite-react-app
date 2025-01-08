

import { Component } from "react";

class Youtube extends Component{

    state={
        isSub:false,
        text1:"Subscribe",
        text2:"Subscribe Succesfully"
    }
    clickHandler=()=>{
        this.setState({
            isSub:!this.state.isSub
        })
    }

    render(){
        return(
            <>
            <button onClick={this.clickHandler}>{this.state.isSub?this.state.text2:this.state.text1}</button>
            </>
        )
    }
}

export default Youtube