
import { Component } from "react"
import { InfinitySpin } from "react-loader-spinner"
import InstagramHert from "../heart/instagram-heart"
import CustomRectangleCard from "../bootstrap/custom-card"
import Counter from "./counter"

class YoutubeButton extends Component{


    state={
        isSubscribe:false,
        text1:"subscribe",
        text2:"subscribed sucesfully"
    }

    clickHandler=()=>{
       this.setState({
        isSubscribe:!this.state.isSubscribe
       })
    }


    render(){
        return(
            <>
            <button onClick={this.clickHandler}>{this.state.isSubscribe?this.state.text2:this.state.text1}</button>
            {
                this.state.isSubscribe?<div>
                    <Counter/>
                    <CustomRectangleCard/>
                    </div>:<div>Please subscribe to access the content</div>
            }
            </>
        )
    }
}

export default YoutubeButton;