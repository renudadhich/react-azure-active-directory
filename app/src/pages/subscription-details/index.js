import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import { setSubscribedData, deploySubscriptionData,getApiData } from '../../actions/subscription-details';
import './index.scss';
import { subscriptionData, numericKeys, subscriptionApiKeys } from '../../constants/subsription-details';
import { STR_REGEX, NUMERIC_REGEX } from '../../constants/regex';
export const SubscriptionDetails = (props) => {
  const { deploySubscriptionData ,accessToken,getApiData} = props;
  const [formData, setFormData] = useState(subscriptionData);
  const [successMsg, setSuccessMsg] = useState('');
  const [isApiSuccess,setIsApiSuccess] = useState(true);
  useEffect(()=>{
    getApiData();
  },[]);
  const handleInputChange = (index, key) => {
    return (value) => {
      let updatedData;
      if (value) {
        const regex = numericKeys.includes(key) ? NUMERIC_REGEX : STR_REGEX;
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
  const formatApiData = (data) => {
    return data.reduce((acc, item, index) => {
      const label = subscriptionApiKeys[index];
      acc[label] = item.value;
      return acc;
    }, {});
  };
  const onCreateSuccess = (msg,isSuccess=true) => {
    setSuccessMsg(msg);
    setIsApiSuccess(isSuccess);
    setFormData([...subscriptionData]);
    setTimeout(() => {
      setSuccessMsg('');
    }, 5000);
  };
  const handleCreateClick = async () => {
    let isFormInValid = false;
    let validateData = formData.map((item) => {
      if (!item.value) {
        item.error = 'Please enter data in the field';
        isFormInValid = true;
      }
      return item;
    });

    setFormData([...validateData]);
    if (!isFormInValid) {
      deploySubscriptionData(formatApiData(validateData),onCreateSuccess);
    }
  };
  return (
    <div className="subscription-container">
      <div className="subscription-details">
        <div className="form-content">
          
         accessToken: {accessToken}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ Subscription, azureAD }) => {
  return {
    ...Subscription,
    ...azureAD,
  };
};
const mapDispatchToProps = {
  setSubscribedData,
  deploySubscriptionData,
  getApiData
};
export const withSubscriptionDetailsConnected = connect(mapStateToProps, mapDispatchToProps)(SubscriptionDetails);
