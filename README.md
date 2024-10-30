# AQA Engineer test assessment - Playlist App

The app is available at [Playlist App](https://vite-react-alpha-lemon.vercel.app/) and includes features like searching, adding tracks, and creating custom playlists.

## Table of Contents

- [Installation and Environment Setup](#installation-and-environment-setup)
- [Running Tests](#running-tests)

## Installation and Environment Setup

Follow these steps to install the necessary dependencies for the project:

1. **Clone the Repository**

Start by cloning the repository to your local machine. Open your terminal and run:

bash:
git clone https://github.com/objelov/AQA_Test_task.git
cd AQA_Test_task

2. **Install Node.js**

Please make sure you have Node.js installed. You can check if it’s installed by running:

bash:
node -v

If it's not installed, download and install it from the [Node.js website](https://nodejs.org/dist/v20.15.0/).

3. **Install Project Dependencies**

Once you are in the project directory, run the following command to install all the dependencies listed in package.json:

bash:
npm install

This command will install both the regular and development dependencies required for the project.

4. **Install Cypress (if not included)**

If Cypress is not listed in your package.json, install it separately as a development dependency:

bash:
npm install cypress --save-dev

**Verify Installation of Cypress**

To verify that the installation was successful (to display installed version), you can run:

bash:
npx cypress verify

This command checks if Cypress is installed correctly and displays the installed version.

Now you're all set with the dependencies installed! You can proceed to set up your environment and start running tests.

## Running Tests

There are two main options how you can run tests within that project using Cypress:

1. **Headed mode**

To run tests in that mode in terminal run:

bash:
npx cypress open

After that in the opened window:
- click on [E2E Testing];
- choose a browser;
- click on the "playlist.cy.js" spec.

Waiting until all tests run!

2. **Headless mode**

To run tests in that mode in terminal run:

bash:
npx cypress run

Waiting until all tests run!
