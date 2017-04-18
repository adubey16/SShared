import axios from 'axios';

import jwtDecode from 'jwt-decode';


export function UserLoginAction(data) {
  return dispatch => {
    return axios.post('/login', data).then(res => {
      const token = res.data.token;
      //localStorage.setItem('jwtToken', 'admin-user');
      //setAuthorizationToken(token);
      //dispatch(setCurrentUser(jwtDecode(token)));
    });
  }
}


export default function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
