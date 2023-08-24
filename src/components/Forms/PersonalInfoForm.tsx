import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

interface FormData {
  fullName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

const usStates = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI',
  'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI',
  'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC',
  'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
  'VT', 'VA', 'WA', 'WV', 'WI', 'WY',
];

const PersonalInfoForm = (props: any) => {
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  return (
    <div className="personal-info-section">
      {/* <h3>Personal Information</h3>
      <h5>Total Amount: {props?.amountValues?.formattedValue}</h5> */}
      <Formik
        initialValues={{
          amount:props?.amountValues?.floatValue,
          fullName: '',
          email: '',
          street: '',
          city: '',
          state: '',
          zip: '',
        }}
        onSubmit={(values) => {
          setSubmittedData(values);
        }}
      >
        <Form onChange={(values) => console.log(values.currentTarget)}>
          <div className="form-row">
            <Field
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              className="input-field"
            />
          </div>
          <div className="form-row">
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="input-field"
            />
          </div>
          <div className="form-row">
            <Field
              type="text"
              id="street"
              name="street"
              placeholder="Address"
              className="input-field"
            />
          </div>
          <div className="form-row">
            <Field
              type="text"
              id="city"
              name="city"
              placeholder="City"
              className="input-field"
            />
            </div>
            <div className="form-row">
            <Field
              as="select"
              id="state"
              name="state"
              className="input-field"
              style={{marginRight: '5px'}}
            >
              <option value="">State</option>
              {usStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Field>
            <Field
              type="text"
              id="zip"
              name="zip"
              placeholder="12345"
              className="input-field"
              style={{marginLeft: '5px'}}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PersonalInfoForm;
