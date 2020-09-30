import React from 'react';

const Form = () => {
    return (
        <div>
            <form action=""/>
                <div class="tags"/>
                    <label for="name" class="label1">Name</label>
                    <br/>
                    <input type="text" id="name" placeholder="Opara Linus Ahmed"/>
                <div/>
                <div class="tags"/>
                    <label for="email" class="required">Email Address</label>
                    <br/>
                    <small>The purchase receipt would be sent to this address</small>
                    <br/>
                    <input type="email" id="email" placeholder="OparaLinusAhmed@devmail.com"/>
                    
                <div/>
                <div class="tags"/>
                    <label for="address" class="label2">Address 1</label>
                    <br/>
                    <input type="text" id="address" placeholder="The address of the user goes here"/>
                <div/>
                <div class="tags"/>
                    <label for="address2" class="label3">Address 2</label>
                    <br/>
                    <input type="text" id="address2" placeholder="and here"/>
                <div/>
                <div class="lasttags"/>
                    <label for="lg" class="label4">Local Government</label>
                    <br/>
                    <input type="text" id="lg" placeholder="Surulere"/>
                    <div class="secondtag"/>
                        <label for="state" class="label5">State</label>
                        <br/>
                        <select name="" id="state">
                            <option value="lagos">Lagos</option>
                        </select>
                    <div/>
                <div/>
            <form/>
        </div>
    )
}

export default Form