# app

This project demonstrates a simple dating app built with Vue 3 and wrapped
with Apache Cordova so it can run as a mobile application.
It includes a lightweight example of login, registration, profile display,
swipe-style likes and simple messaging stored in local storage.

## Features

- Register and log in locally
- View and edit a personal profile
- Browse sample profiles with like/pass buttons
- Basic messaging interface with liked profiles

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Build Cordova Wrapper

After building the web assets, copy the contents of the `dist` folder into
`cordova/www` and build your desired platform with Cordova:

```sh
npm run build
cp -r dist/* cordova/www
cd cordova
cordova platform add android # or ios
cordova build
```
