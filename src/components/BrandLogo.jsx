import React from 'react';
import Marquee from 'react-fast-marquee';
import abbott from "../assets/trustedBy/abbott.svg"
import adidas from "../assets/trustedBy/adidas.svg"
import fedex from "../assets/trustedBy/fedex.svg"
import google from "../assets/trustedBy/google.svg"
import netflix from "../assets/trustedBy/netflix.svg"
import paypal from "../assets/trustedBy/paypal.svg"
import toyota from "../assets/trustedBy/toyota.svg"
import visa from "../assets/trustedBy/visa.svg"

const BrandLogo = () => {
    return (
        <div className='my-10 container mx-auto'>
            <Marquee pauseOnHover speed={100}>

                <img src={abbott} alt="Abbott" />

                <img src={adidas} alt="adidas" />

                <img src={fedex} alt="fedex" />

                <img src={google} alt="google" />

                <img src={netflix} alt="netflix" />

                <img src={paypal} alt="paypal" />

                <img src={toyota} alt="toyota" />

                <img src={visa} alt="visa" />

            </Marquee >
        </div >
    );
};

export default BrandLogo;