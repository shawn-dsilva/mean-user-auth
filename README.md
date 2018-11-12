# MEAN-user-auth

REST API app implementing user registration and authentication using passport,mongoDB and JWT.
<br>
An [**Angular-6 based front end**](https://github.com/shawn-dsilva/angular-src-mean-user-auth) is in a seperate repo


## Requirements

- NodeJs v8.x and npm
- MongoDB v3.x
- Port 3000 should be free

## Running this server

- clone this repo with the` angular` submodule
```
git clone --recursive https://github.com/shawn-dsilva/mean-user-auth.git
```
- cd into `angular-src...` and run
```
npm install
```
then
```
ng build
```
this will put the compiled angular files into your `public` directory,now `cd` back to root directory
```
cd ../
```
You should be back in `mean-user-auth` now

- run npm install to get all the packages for `mean-user-auth` :
```
npm install
```

- run the server,which will be on `localhost:3000`
```
 node app
```

## CHANGES:
- git submodule `angular-src-mean-user-auth` **added**
