import userActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPassword => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFail = error => ({
  type: userActionTypes.SIGN_IN_FAIL,
  payload: error
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFail = error => ({
  type: userActionTypes.SIGN_OUT_FAIL,
  payload: error
});

export const signUpStart = (userCredentials) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userCredentials
});

export const signUpSuccess = ({user, additionalData}) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: {user, additionalData}
});

export const signUpFail = error => ({
  type: userActionTypes.SIGN_UP_FAIL,
  payload: error
});
