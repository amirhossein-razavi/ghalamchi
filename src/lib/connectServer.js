import { API_URL } from 'config';

const sendRequest = (path, method, contentType, body) => {
  const headers = new Headers();

  if (contentType !== null) headers.append('Content-Type', contentType);

  return new Promise((resolve, reject) => {
    fetch(API_URL + path, {
      method,
      headers,
      body,
    }).then((response) => {
      if (response.status === 401) {
        window.alert('Unauthenticated');
        reject(new Error({ messages: '' }));
      } else if (response.status === 403) {
        window.alert('Access Denied');
        reject(new Error({ messages: '' }));
      } else if (response.status === 404) {
        window.alert('Not Found');
        reject(new Error({ messages: '' }));
      } else if (response.status === 500) {
        window.alert('Server Error');
        reject(new Error({ messages: '' }));
      } else if (response.status === 200 || response.status === 201) {
        response.json().then((data) => {
          resolve(data);
        });
      } else resolve({});
    }).catch((error) => {
      reject(new Error({ messages: error }));
    });
  });
};

export default sendRequest;
