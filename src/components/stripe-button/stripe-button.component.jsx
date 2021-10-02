import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton=({price})=>{
    const priceForStripe = price;
    const publishableKey='pk_test_51JfIz1HjJHMuqf7iJIHmrzzHMEfAdSMH7lRFjLV0IQppeMOaj9lOD7OhJMBA1om0gJyUHu2sd9ljJHGUxTTypOXa00yJbESUCR'
    const onToken=token=>{
        console.log(token);
        alert('payment successful')
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd'
            billingAddress=''
            shippingAddress=''
            image='https://svgshare.com/i/CUz.ico'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeButton;
