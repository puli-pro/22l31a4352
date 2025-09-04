# Express URL Shortener

This project is an Express.js application that provides a URL shortening service. It allows users to shorten long URLs and redirect them using short codes.

## Project Structure

```
express-app
├── controllers          # Contains controllers for handling requests
│   └── urlController.js
├── middleware           # Contains middleware functions for logging and error handling
│   ├── errorHandler.js
│   └── logger.js
├── models               # Contains data models for the application
│   └── shortUrl.js
├── routes               # Contains route definitions for the API
│   └── shorturls.js
├── utils                # Contains utility functions
│   └── index.js
├── config               # Contains configuration files
│   └── db.js
├── index.js             # Entry point of the application
├── package.json         # NPM configuration file
└── README.md            # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd express-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Create a `.env` file in the root directory and set the necessary environment variables, such as `PORT` and database connection details.

2. Start the application:
   ```
   npm start
   ```

3. The server will run on the specified port (default is 3000). You can access the API at `http://localhost:3000`.

## API Endpoints

- `POST /shorturls` - Create a new short URL
- `GET /:shortcode` - Redirect to the original URL using the shortcode

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.