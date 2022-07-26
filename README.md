# wagon
E-commerce website built using ReactJS as the front end UI and the mockAPI for the api and storing random data.
I have been assigned with three tasks such as
1. Login Page for customers to sign in with their credentials.
![image](https://user-images.githubusercontent.com/76486044/181091190-e991be41-5d7a-4d8d-a312-7419d12a114d.png)
2. List the products with individual product image, product name and their price.
![image](https://user-images.githubusercontent.com/76486044/181092095-c3e84a3a-9e37-4071-9f6d-f98e4e70f354.png)
3. User Profile Page where user can edit their profile
![image](https://user-images.githubusercontent.com/76486044/181092434-7513f44f-2c17-4d28-835d-e2ad3f603e82.png)
4. Validation
- username is restricted to either email or alphanumeric
- passcode must contain atleast 8 characters with minimum 1 capital letter, small letter, 1 digit and 1 special character

## Pre-Requisite
1. Node.js (version 16.16.0 is used for development)

## Installation Guide
1. Download or clone the repository
2. Open up the terminal (in linux) or powershell (in windows) in the downloaded folder and follow the steps
```console
foo@bar:~$ cd wagon
```
3. Now install the required libraried for this project which is listed under [package.json](package.json)
```console
foo@bar:~$ npm install
```
## Running the Project
1. We are ready to run the project. This will start the development server at PORT 3000
```console
foo@bar:~$ npm start
```
2. We can view the website from the url [http://localhost:3000/](http://localhost:3000/)

## Backend
- [mockAPI](mockapi.io) is choosen as backend api service provider.
- I've created 2 resources (products and users) which contain product and user details.
![image](https://user-images.githubusercontent.com/76486044/181096389-3bc9bd40-e707-4ab5-b6c8-b2184b3060f9.png)
- [mockAPI](mockapi.io) let use to create random data for our resources

> **_NOTE:_**  All data choosen are random. Do not use them.
