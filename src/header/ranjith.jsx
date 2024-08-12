import React  from "react";
var a=()=>{
    return(
        React.createElement('p',{ style: { color: 'red' } },'Hello',
            React.createElement('h1',{style:{color:'blue'}},'BASWARAJU RANJITH',
                React.createElement('div', {style: { height: '250px', width: '250px', backgroundColor: 'red' }},'hello',
                    React.createElement('a',{'href':'https://chatgpt.com'},'hello',
                        React.createElement('table',{'tr'})
                    )
                )))
    )
}
export default a;