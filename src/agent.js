import { API_URL } from "./constants";
import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const responseBody = res => res.body;

const requests = {
    del: url =>
      superagent.del(`${API_URL}${url}`).use(tokenPlugin).then(responseBody),
    get: url =>
      superagent.get(`${API_URL}${url}`).use(tokenPlugin).then(responseBody),
    put: (url, body) =>
      superagent.put(`${API_URL}${url}`, body).use(tokenPlugin).then(responseBody),
    post: (url, body) =>
      superagent.post(`${API_URL}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Hotels = {
    getAll: () => requests.get('/hotels/hotels')
};

export default {
    Hotels,
    setToken: _token => { token = _token; }
};
  