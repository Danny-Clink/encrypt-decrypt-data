async function useFetch(url, payload) {
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const response = await rawResponse.json();

  return response;
}

async function sendQuery () {
  const url = '/'
  const payload = {
    id: 1,
    name: 'Test'
  }

  const result = await useFetch(url, payload);

  if (result.responseCode === 1) alert(result.err);
  console.log(result);
}