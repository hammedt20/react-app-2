import React from 'react';

const Form = () => {
    return (
        <section class="second"/>
            <form action=""/>
                <div class="tags"/>
                    <label for="name" class="required label1">Name on Card</label>
                    <input type="text" id="name" placeholder="Opara Linus Ahmed"/>
                <div/>
                <div class="tags">
                    <label for="type" class="required label2">Card type</label>
                    <select name="" id="type">
                        <option value="visa">Visa</option>
                    </select>
                </div>
                <div class="lasttags"/>
                    <label for="details" class="required label3">Card Details</label>
                    <input type="text" id="details" placeholder="44960      44960      44960      44960"/>
                    
                    <label for="date" class="required label4">Expiry Date</label>
                    <input type="text" id="date" placeholder="04   /   23"/>

                    <label for="cvv" class="required label5">CVV</label>
                    <input type="text" id="cvv" placeholder="923"/>
                <div/>
                
            <form/>
        <section/>
    )
}

export default Form