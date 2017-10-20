// @flow
const options = {
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};

type Response = {
  text: string
}

const getText = (): Promise<Response> => fetch('/test', options).then(response => response.json());

export default getText;