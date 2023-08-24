import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';
import axios from 'axios';
import Modal from '../Modal/Modal'
import PersonalInfoForm from '../Forms/PersonalInfoForm';
export default (props: any) => {
  const endpoint = 'https://1zzlj8w8ij.execute-api.us-east-1.amazonaws.com/payments'
  const cardClassSelectors = {
    input: {
      backgroundColor: '#2D2D2D',
      color: '#FFFFFF',
      fontFamily: 'helvetica neue, sans-serif',
    },
  };
    return (<div>
        <PersonalInfoForm 
          amountValues={props?.amountValues}
          isLoading={props.loading}
        />
        <div className="container-square">
            <PaymentForm
                applicationId="sandbox-sq0idb-4BIn2NFF6UL8jHgLxzah4g"
                cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                  const payload = {"amount": props?.amountValues?.floatValue}
                  const headers = {
                    'Content-type' : 'application/json',
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Credentials': false,
                    'Access-Control-Allow-Methods':'*',
                    'Access-Control-Allow-Headers': '*',
                    'Access-Control-Max-Age': 86400,
                    'Access-Control-Expose-Headers':'x-api-id'
                };
                  const response = await axios.post(endpoint, payload, {headers}).then(response => response.data);
                  console.log(response?.payment?.status)
                  console.log('response', response);
                  console.log('token:', token);
                  console.log('verifiedBuyer:', verifiedBuyer);
                }}
                locationId='HHV7KN1A1Q0XV'
            >
                {/* <CreditCard /> */}
                <CreditCard
                  buttonProps={{
                    isLoading: !(props?.amountValues !== null && props?.amountValues.floatValue > 0),
                    onClick: props.onClick,
                  }}
                >Donate Now</CreditCard>
                {/* <CreditCardInput
                  style={cardClassSelectors}
                  submitButtonId="nextStep"
                  overrideStyles={overrideStyles}
                  /> */}
            </PaymentForm>
        </div></div>)
}