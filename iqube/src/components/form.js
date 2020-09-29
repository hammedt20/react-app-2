import React from 'react';

const Form = () => {
    return (
        <div>
            <form action="" />
                <div className="tags"/>
                    <label for="name" className="label1">Name</label>
                    <br />
                    <input type="text" id="name" placeholder="Opara Linus Ahmed"/>
                <div/>
                <div className="tags"/>
                    <label for="email" className="required">Email Address</label>
                    <br/>
                    <small>The purchase receipt would be sent to this address</small>
                    <br/>
                    <input type="email" id="email" placeholder="OparaLinusAhmed@devmail.com"/>
                    
                <div/>
                <div className="tags"/>
                    <label for="address" className="label2">Address 1</label>
                    <br/>
                    <input type="text" id="address" placeholder="The address of the user goes here"/>
                <div/>
                <div className="tags"/>
                    <label for="address2" className="label3">Address 2</label>
                    <br/>
                    <input type="text" id="address2" placeholder="and here"/>
                <div/>
                <div className="lasttags"/>
                    <label for="lg" className="label4">Local Government</label>
                    <br/>
                    <input type="text" id="lg" placeholder="Surulere"/>
                    <div className="secondtag"/>
                        <label for="state" className="label5">State</label>
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