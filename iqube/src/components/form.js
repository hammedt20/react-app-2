import React from 'react';

const Form = () => {
    return (
        <div>
            <section class="second"/>
                <section class="top"/>
                    <div id="topic"/>
                        <p class="item">Item Name</p>
                        <p class="price"/><img src="./Vector (2).png" alt=""/>   Price<p/>
                    <div/>
                <section/>
                <section class="bottom"/>
                    <div class="topic1">
                        <p class="item">Data science and usability</p>
                        <p class="price">50,000.00</p>
                    </div>
                    <div class="topic1 Shipping">
                        <p class="item">Shipping</p>
                        <p class="price" style="color:black">0.00</p>
                    </div>
                    <hr class="bottomline"/>
                    <div class="topic3">
                        <p class="item">Total</p>
                        <p class="price">50,000.00</p>
                    </div>
                <section/>
            <section/>
        </div>
    )
}

export default Form