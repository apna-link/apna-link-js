# Apna.Link JavaScript/TypeScript API Wrapper

This is a JavaScript and TypeScript wrapper for the Apna.Link URL shortening API.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your local development machine.

### Installing

To install the package, run:

```bash
npm install apna-link-js
```

## Usage

First, import the package:

```javascript
const ApnaLinkAPI = require('apna-link-js');
```

Then, create an instance of the `ApnaLinkAPI` class:

```javascript
const api = new ApnaLinkAPI('your-api-key'); // Get it from https://apna.link/account
```

You can now use the `api` instance to interact with the Apna.Link API:

```javascript
api.shorten('https://example.com')
    .then(shortUrl => console.log(`Short URL: ${shortUrl}`))
    .catch(error => console.error(`Error: ${error}`));
```

## Running the tests

To run the tests, use the following command:

```bash
npm test
```

## Based on
This library is based on the [Apna.link API Docs](https://apna.link/docs).

## Contributing

Please read [CONTRIBUTING](CONTRIBUTING) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details