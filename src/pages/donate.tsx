import React, { useState } from 'react';
import DonationForm from '../components/Donate/DonationForm';
import Button from '../components/Buttons/donationButton';
import Layout from '../components/Layout';
import '../css/donate.css';
import Payment from '../components/Payment/Payment';

const DonationPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [amountValues, setAmountValues] = useState(null);

  const handleClick = () => {
    // Simulate loading state
    setLoading(true);
    setTimeout(() => {
      console.log(loading)
      // setLoading(false);
      // Perform donation processing here
    }, 3000);
  };

  const handleDonationAmountChange = (values: any) => {
    setAmountValues(values)
  };

  return (
    <Layout>
        <div className="donation-page">
        <header className="header">
            <h1 className="title">Donate Now</h1>
            <p className="subtitle">Support Our Causes</p>
        </header>
        <section className="donation-section">
            <div className="content">
              <DonationForm 
                amountValues={amountValues}
                setAmountOnChange={handleDonationAmountChange}
              />
              <Payment 
                loading={loading} 
                onClose={() => setLoading(false)}
                amountValues={amountValues}
                onClick={handleClick}
              />
            <Button
                onClick={handleClick}
                loading={loading}
            >
                Donate Now
            </Button>
            </div>
            
        </section>
        </div>
    </Layout>
  );
};

export default DonationPage;

