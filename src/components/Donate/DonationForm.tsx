import React, { useState, useEffect } from 'react';
import Button from '../Buttons/donationButton';
import causes from '../../module/causes';
import { NumericFormat } from 'react-number-format';
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk';
import '../../css/donate.css'

// interface DonationFormProps {
//   onSubmit: (formData: FormData) => void;
// }

// interface FormData {
//   cause: string;
//   amount: number;
//   customAmount: number | null;
//   name: string;
//   address: string;
//   phone: string;
//   cardNumber: string;
//   expiryDate: string;
//   cvv: string;
// }

// const DonationForm: React.FC<DonationFormProps> = (props: any) => {
//     const { onSubmit, children } = props;
//   const [formData, setFormData] = useState<FormData>({
//     cause: '',
//     amount: 0,
//     customAmount: null,
//     name: '',
//     address: '',
//     phone: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//   });

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseFloat(event.target.value);
//     setFormData((prevData) => ({ ...prevData, amount: value, customAmount: null }));
//   };

//   const handleCustomAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = parseFloat(event.target.value);
//     setFormData((prevData) => ({ ...prevData, customAmount: value }));
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <form className="bg-white p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label className="block text-gray-700 font-semibold mb-2">Select a Cause</label>
//         <select
//           name="cause"
//           value={formData.cause}
//           onChange={handleChange}
//           className="block w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//         >
//           <option value="">Select a Cause</option>
//           <option value="cause1">Cause 1</option>
//           <option value="cause2">Cause 2</option>
//           <option value="cause3">Cause 3</option>
//         </select>
//       </div>
//       {/* ... Other form fields */}
//       {children}
//       <button
//         type="submit"
//         className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-xl transition duration-300 transform hover:scale-105"
//       >
//         Donate Now
//       </button>
//     </form>
//   );
// };

// export default DonationForm;

// import React from 'react';

const DonationForm = (props: any) => {
  const initialCause = causes[0];
  const [selectedCause, setSelectedCause] = useState(initialCause.type);
  const [causeDescription, setCauseDescription] = useState(initialCause.description);
  const [causeImage, setCauseImage] = useState(initialCause.img);
  const [subtitle, setSubtitle] = useState(initialCause.subTitle);
  const [donationAmount, setDonationAmount] = useState<string | number>('');

  const handleCauseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedCause(selectedValue);
    
        const selectedCauseData = causes.find(cause => cause.type === selectedValue);
        if (selectedCauseData) {
          setCauseImage(selectedCauseData.img)
          setSubtitle(selectedCauseData.subTitle)
          setCauseDescription(selectedCauseData.description);
        } else {
          setCauseDescription('');
        }
    };

  const handleDonationAmountChange = (values: any) => {
    setDonationAmount(parseFloat(values?.value))
    // setDonationAmount(event.target.value);
  };

  // async function initializeCard(payments: any) {
  //   const card = await payments.card();
  //   await card.attach('#card-container');

  //   return card;
  // }

  // async function createPayment(token: any, verificationToken: any) {
  //   const body = JSON.stringify({
  //     locationId,
  //     sourceId: token,
  //     verificationToken,
  //     idempotencyKey: window.crypto.randomUUID(),
  //   });

  //   const paymentResponse = await fetch('/payment', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body,
  //   });

  //   if (paymentResponse.ok) {
  //     return paymentResponse.json();
  //   }

  //   const errorBody = await paymentResponse.text();
  //   throw new Error(errorBody);
  // }

  // async function tokenize(paymentMethod: any) {
  //   const tokenResult = await paymentMethod.tokenize();
  //   if (tokenResult.status === 'OK') {
  //     return tokenResult.token;
  //   } else {
  //     let errorMessage = `Tokenization failed with status: ${tokenResult.status}`;
  //     if (tokenResult.errors) {
  //       errorMessage += ` and errors: ${JSON.stringify(
  //         tokenResult.errors
  //       )}`;
  //     }

  //     throw new Error(errorMessage);
  //   }
  // }

  // async function verifyBuyer(payments: any, token:any) {
  //   const verificationDetails = {
  //     amount: '1.00',
  //     billingContact: {
  //       addressLines: ['123 Main Street', 'Apartment 1'],
  //       familyName: 'Doe',
  //       givenName: 'John',
  //       email: 'jondoe@gmail.com',
  //       country: 'GB',
  //       phone: '3214563987',
  //       region: 'LND',
  //       city: 'London',
  //     },
  //     currencyCode: 'GBP',
  //     intent: 'CHARGE',
  //   };

  //   const verificationResults = await payments.verifyBuyer(
  //     token,
  //     verificationDetails
  //   );
  //   return verificationResults.token;
  // }

  function displayPaymentResults(status: any) {
    const statusContainer: any = document.getElementById(
      'payment-status-container'
    );
    if (status === 'SUCCESS') {
      statusContainer.classList.remove('is-failure');
      statusContainer.classList.add('is-success');
    } else {
      statusContainer.classList.remove('is-success');
      statusContainer.classList.add('is-failure');
    }

    statusContainer.style.visibility = 'visible';
  }

  // const handleValueChange = (values: any) => {
  //   const floatValue = parseFloat(values.value);
  //   onChange(floatValue);
  // };

  useEffect(() => {

  }, [])


      useEffect(() => {
        const selectedCauseData = causes.find(cause => cause.type === selectedCause);
        if (selectedCauseData) {
          setCauseDescription(selectedCauseData.description);
        } else {
          setCauseDescription('');
        }
      }, [selectedCause]);
    
    return (
    <div>
      <div className=" input-group">
        <label htmlFor="cause" className="input-label">
            Select a Cause:
        </label>
        <select 
            id="cause" 
            name="cause" 
            className="select-box" 
            defaultValue={initialCause.type}
            value={selectedCause}
            onChange={handleCauseChange}
            >
            {causes.map((cause, i) => <option key={`${cause.type}${i}`} value={cause.type}>{cause.title}</option>)}
        </select>
        <div className="description-container">
          <img
              src={causeImage} // Replace with your image path
              alt="Subtitle Image"
              className={`subtitle-image`}
          />
          <h3 className="subtitle subtitle-container">
              {subtitle}
          </h3>
          <p className={`cause-description ${causeDescription ? 'fadeIn' : 'fadeOut'}`}>
              {causeDescription}
          </p>
          
          <label className="input-label">Enter Amount ($)</label><br />
          <NumericFormat 
            value={props?.amountValues?.formattedValue}
            thousandSeparator={true}
            prefix={'$'}
            decimalScale={2}
            allowNegative={false}
            onValueChange={props.setAmountOnChange}
            className="input-field"
            allowLeadingZeros={false}
            // fixedDecimalScale={true}
          />
          {/* <input
            type="number"
            value={donationAmount}
            onChange={handleDonationAmountChange}
            step="0.01"
            className="input-field"
          /> */}
        </div>
      </div>
    </div>
    );
};

export default DonationForm;
