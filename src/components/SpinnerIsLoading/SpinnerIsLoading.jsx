import React from 'react';
import Spinner from "../Spinner/Spinner";

const SpinnerIsLoading = WrappedComponent => ({isLoading, ...otherProps}) => {
  return isLoading ? (
    <Spinner/>
  ) : (
    <WrappedComponent {...otherProps}/>
  )
};

export default SpinnerIsLoading;
