Take Order
About the App

This web application is designed to take order from the waiter and show it to the cook

How to Run the App Locally

To run the app locally, follow these steps:

    Clone this repository
    git clone https://github.com/00016221/restaurant.git

    Enter project folder
    cd restaurant

    Install dependencies
    npm i

    Start the application
    npm start.

    Open your web browser and enter to http://localhost:3000

Application Dependencies

The application relies on the following dependencies:

    axios
    body-parser
    express
    express-validator
    nodemon
    pug
    bcryptjs
    dotenv
    jsonwebtoken

Also dev dependencies:
autoprefixer
postcss
postcss-cli
tailwindcss

Links to application

    https://github.com/00016221/restaurant.git
    Hosted Application

Project Structure

├── routes/
│ ├── web/
│ │ ├── home/
│ │ └── auth/
│ └── api/
│ ├── order/
│ ├── resource/
│ └── auth/
├── services/
│ ├── order/
│ ├── auth/
│ └── user/
├── views/
│ ├── home/
│ ├── auth/
│ └── orders/
├── src/
│ └── css/
├── public/
│ └── css/
├── controllers/
│ ├── web/
│ │ ├── home/
│ │ └── auth/
│ └── api/
│ ├── order/
│ ├── resource/
│ └── auth/
├── validators/
│ └── order/
├── data/
│
├── package-lock.json
├── package.json
└── README.md

Project Structure Explanation

    public/: Contains css file for the pug file
    src/: base css file for the postcss to create css file.
    node_modules/: Contains project dependencies.
    .gitignore: Specifies intentionally untracked files to ignore.
    package-lock.json: Lockfile automatically generated for npm dependencies.
    package.json: Metadata about the project and its dependencies.
    README.md: Documentation file containing information about the project

You can login using this credentials
username: waiter
password: waiter12345 this opens the waiter page

username: chief
password: chief12345 this open the cooks page

Unfortunately I couldn't implent update order in the waiter side. But update is implemented in chief side
