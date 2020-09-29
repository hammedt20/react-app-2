import React from 'react';

const Form = () => {
    return (
        <div>
            <form action=""/>
                <div className="tags"/>
                    <label for="name" className="required label1">Name on Card</label>
                    <input type="text" id="name" placeholder="Opara Linus Ahmed"/>
                <div/>
                <div className="tags">
                    <label for="type" className="required label2">Card type</label>
                    <select name="" id="type">
                        <option value="visa">Visa</option>
                    </select>
                </div>
                <div className="lasttags"/>
                    <label for="details" className="required label3">Card Details</label>
                    <input type="text" id="details" placeholder="44960      44960      44960      44960"/>
                    
                    <label for="date" className="required label4">Expiry Date</label>
                    <input type="text" id="date" placeholder="04   /   23"/>

                    <label for="cvv" className="required label5">CVV</label>
                    <input type="text" id="cvv" placeholder="923"/>
                <div/>
                
            <form/>
        </div>
    
    )
}

export default Form