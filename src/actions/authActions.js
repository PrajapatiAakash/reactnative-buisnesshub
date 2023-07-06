import api from '../services/api';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

export const loginSuccess = (token) => ({
    type: LOGIN_SUCCESS,
    payload: token,
});

export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const login = (email, password) => {
    return async (dispatch) => {
      try {
        dispatch(loginRequest());
        const response = await api.post('/api/login', { email, password });
        if (response.data && response.data.data) {
          const token = response.data.data.sessionToken;
          dispatch(loginSuccess(token));
        } else {
          dispatch(loginFailure("There is some error so please contact to administrator"));
        }
      } catch (error) {
        console.log(error)
        dispatch(loginFailure(error.message));
      }
    };
};