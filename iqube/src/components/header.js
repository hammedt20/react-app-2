import React from 'react';

const Header = () => {
    return (
       <div>
            <section className="first"/>
                <div className="header">
                    <h1>Complete Your Purchase</h1>
                </div>
                <div className="subtitle"/>
                    <p className="firsttext">Personal Info</p>
                    <p className="active">Billing Info</p>
                    <hr className="activeline"/>
                    <p className="secondtext">Confirm Payment</p>
                <div/>
                <hr/>
            <section/>
       </div>
    )
}

export default Header 