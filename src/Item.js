import React from 'react'
import "./Item.css"


function Item(props) {
    let logIn = props.username === props.nouser
    console.log(logIn)
    return (
        
        <div class="mx-1 mx-xl-5 mx-md-5">
        <div class='mx-0 mx-xl-5 mx-md-5'>
        
            <div class={logIn?'d-none':'d-flex justify-content-start'}>
            <div>{props.nouser}</div> 
            </div>
            <div class={logIn?'d-flex justify-content-end':'d-flex justify-content-start'}>
                <div class={logIn?' loggedIn bg-primary px-5 py-1 chatbox d-flex justify-content-center':' loggedOut bg-danger px-5 py-1 chatbox d-flex justify-content-center'}>{props.chat}</div> 
            </div>
            
        </div>
        <br/>
        </div>
        
        
    )
}


export default Item;
