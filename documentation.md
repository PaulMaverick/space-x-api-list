Building a Space-X list App

Prerequisites
 Before you begin, ensure you have the following installed on your system:

- Node.js (version 12 or above)
- npm (comes with Node.js installation)

Setting Up the Project
    Create a new React project: You can create a new React project using create-react-app or any other method you prefer. For example:
    
    ```
    npx create-react-app my-react-app
    ```

Navigate to the project directory:
    
    ```
    cd my-react-app
    ```

Install Vite:

    ```
    npm install vite --save-dev
    ```

Remove existing build scripts:
    Remove the existing build scripts from package.json since we'll be using Vite for building the project.


Configuring Vite for React
    Create a Vite configuration file:

    Create a new file named vite.config.js in the root of your project.

    Configure Vite for React:

    Add the following configuration to vite.config.js to tell Vite to handle React files:

    import { defineConfig } from 'vite';
    import reactRefresh from '@vitejs/plugin-react-refresh';

    ```
    export default defineConfig({
        plugins: [reactRefresh()]
    });

    ``

Running the Development Server

    Start the development server:
        Run the following command to start the development server:

        ```
        npm run dev
        ```

        This command will generate a production-ready build of your application in the dist directory.

Building for Production

    Serve the production build:
        You can serve the production build locally for testing using the following command:

        ```
        npm run build
        ```
        This command will generate a production-ready build of your application in the dist directory.

    Serve the production build:
        You can serve the production build locally for testing using the following command:
        ```
        npm run serve
        ```
        This will serve your production build on a local server.

Conclusion
Congratulations! You've successfully set up a React project using Vite. You can now continue developing your application using Vite's fast and efficient build system.

//Aditional guides:

vite documentation: https://vitejs.dev/guide/
for further deployment: https://vitejs.dev/guide/static-deploy
