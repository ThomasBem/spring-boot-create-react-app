// @flow
const options = {
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};

export function getText() {
    return fetch('/test', options).then(response => response.json());
}
