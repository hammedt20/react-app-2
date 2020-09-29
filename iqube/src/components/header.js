import React from 'react';

const Header = () => {
    return (
        <div>
            <section className="first"/>
                <h1 className="header">Complete your Purchase</h1>
                <div className="subtitle"/>
                    <p className="active">Personal Info</p>
                    <hr className="activeline"/>
                    <p className="firsttext">Billing Info</p>
                    <p className="secondtext">Confirm Payment</p>
                <div/>
                <hr/>
            <section/>
        </div>
    )
}

export default Header 