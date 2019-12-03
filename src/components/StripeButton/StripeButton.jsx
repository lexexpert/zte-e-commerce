import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_live_b6nyWtyK30kn15IX6OApYNX100R98QcyyB';

  const onToken = token => {
    alert('Payment successful')
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeButton;