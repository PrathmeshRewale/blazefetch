
# BlazeFetch

BlazeFetch is a lightweight HTTP client built on the Fetch API that provides a simplified interface for making HTTP requests in JavaScript projects.

## Features

- Supports common HTTP methods: GET, POST, PUT, PATCH, DELETE.
- Supports request headers and body payload.
- Built on the Fetch API for browser and Node.js environments.

## Installation

You can install BlazeFetch using npm:

```shell
npm install blazefetch

```

## Usage/Examples

```javascript
const blazeFetch = require('blazefetch');
```

## Make an HTTP GET request:

```javascript
async function fetchData() {
  try {
    const response = await blazeFetch.get('https://api.example.com/data');
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();

```



## Make an HTTP POST request:

```javascript
async function postData() {
  try {
    const data = {
      name: 'John Doe',
      age: 25
    };

    const response = await blazeFetch.post('https://api.example.com/users', data);
    console.log(response);
  } catch (error) {
    console.error('Error:', error);
  }
}

postData();

```

You can use the same pattern for other HTTP methods such as `put`, `patch`, and `delete`.

## API
`get(url: string, config?: object): Promise<any>`

Sends an HTTP GET request to the specified URL.

* `url`: The URL to request.
* `config` (optional): Additional configuration options for the request.

`post(url: string, data: object, config?: object): Promise<any>`

Sends an HTTP POST request to the specified URL.

* `url`: The URL to request.
* `data`: The request payload data.
* `config` (optional): Additional configuration options for the request.

`put(url: string, data: object, config?: object): Promise<any>`

Sends an HTTP PUT request to the specified URL.

* `url`: The URL to request.
* `data`: The request payload data.
* `config` (optional): Additional configuration options for the request.

`patch(url: string, data: object, config?: object): Promise<any>`

Sends an HTTP PATCH request to the specified URL.

* `url`: The URL to request.
* `data`: The request payload data.
* `config` (optional): Additional configuration options for the request.

`delete(url: string, config?: object): Promise<any>`

Sends an HTTP DELETE request to the specified URL.

* `url`: The URL to request.
* `config` (optional): Additional configuration options for the request.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create an issue or submit a pull request.


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@prathmeshrewale](https://www.github.com/prathmeshrewale)

