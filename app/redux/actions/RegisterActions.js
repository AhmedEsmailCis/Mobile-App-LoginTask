const RegisterUrl = 'http://www.ozooma.net/en/api/registerUser';
import Axios from 'axios';
export const registerUser = ({name, email, password, mobile}) => {
  return (dispatch) => {
    dispatch({type: 'updateLoader', loading: true});
    Axios.post(RegisterUrl, {
      name: name,
      email: email,
      password: password,
      mobile: mobile,
    })
      .then((resp) => handleRegistration(dispatch, resp))
      .catch((error) => handleError(dispatch, error));
  };
};
const handleRegistration = (dispatch, resp) => {
  dispatch({type: 'updateStatus', status: true});
  dispatch({type: 'updateLoader', loading: false});
  dispatch({type: 'updateStatus', status: false});
};
const handleError = (dispatch, error) => {
  dispatch({type: 'updateStatus', status: false});
  dispatch({type: 'updateLoader', loading: false});
};

