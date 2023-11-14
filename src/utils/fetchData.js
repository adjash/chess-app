export default function fetchData(endpoint = '', query = '') {
    return new Promise((resolve, reject) => {
        const url = `https://api.chess.com/pub/${endpoint}/${query}`;
    
        // Using fetch to make the API request
        fetch(url)
          .then(response => {
            // Check if the response status is OK (status code 200)
            if (response.ok) {
              // Parse the JSON from the response and resolve the promise
              return response.json();
            } else {
              // If there's an error, reject the promise with the status text
              reject(`Error: ${response.statusText}`);
            }
          })
          .then(jsonData => {
            // Resolve the promise with the parsed JSON data
            resolve(jsonData);
          })
          .catch(error => {
            // Handle any other errors
            reject(`Error: ${error}`);
          });
      });
}