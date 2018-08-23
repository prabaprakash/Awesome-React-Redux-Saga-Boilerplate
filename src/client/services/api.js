import _ from 'lodash';

export function callFetch(endpoint, params = {}) {
  const requestOptions = {};
  if (!_.isEmpty(params)) {
    requestOptions['headers'] = params;
  }
  return fetch(endpoint, requestOptions)
    .then(
      response =>
        _.get(response, 'ok') ? response.json() : Promise.reject(response)
    )
    .then(
      response => ({ response }),
      error => ({ error: error.message || 'Something bad happened' })
    );
}

export function callPost(endpoint, body = {}) {
  const requestOptions = {
    credentials: 'same-origin',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  return fetch(endpoint, requestOptions).then(
    response => ({ response }),
    error => ({ error: error.message || 'Something bad happened' })
  );
}
