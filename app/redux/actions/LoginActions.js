const RegisterUrl = 'http://www.ozooma.net/en/api/loginUser';
import Axios from 'axios';
export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: 'updateLoader', loading: true});
    Axios.post(RegisterUrl, {
      email: email,
      password: password,
    })
      .then((resp) => handleRegistration(dispatch, resp))
      .catch((error) => handleError(dispatch, error));
  };
};
const handleRegistration = (dispatch, resp) => {
  dispatch({type: 'updateStatus', status: true});
  dispatch({type: 'updateLoader', loading: false});
  dispatch({type: 'setUser', user: resp.data});
  dispatch({type: 'updateStatus', status: false});

};
const handleError = (dispatch, error) => {
  dispatch({type: 'updateStatus', status: false});
  dispatch({type: 'updateLoader', loading: false});
};
