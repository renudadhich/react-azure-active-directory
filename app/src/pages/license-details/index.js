import React, { useState } from 'react';
import './index.scss';
import { CUST_NAME_REGEX, ALPHA_NUMERIC_REGEX } from '../../constants/regex';
import { customerData, specialCharKeys } from '../../constants/license-details';
const LicenseDetails = () => {
  const [formData, setFormData] = useState(customerData);
  const handleInputChange = (index, key) => {
    return (value) => {
      let updatedData;
      if (value) {
        const regex = specialCharKeys.includes(key) ? CUST_NAME_REGEX : ALPHA_NUMERIC_REGEX;

        if (!regex.test(value)) {
          return;
        }
      }
      updatedData = Object.assign([...formData], {
        [index]: {
          ...formData[index],
          value: value.slice(0, 100),
          error: '',
        },
      });
      setFormData(updatedData);
    };
  };
  const handleSaveClick = () => {
    alert('i am called!!');
  };
  return (
    <div className="subscription-container">
      <div className="subscription-details">
        <div className="form-content">
          <div className="page-title">License Details</div>
         
      </div>
    </div>
    </div>
  );
};
export default LicenseDetails;
