# app

SecretHeaven is a demo dating application built with Vue 3. The UI is tuned
for small screens and can also run inside an Apache Cordova wrapper for mobile
devices. A small Express server backed by SQLite is provided for development.

The front end persists its state in local storage so it works offline as well.

## Features

- Register and log in locally
- View and edit a personal profile
- Browse sample profiles with like/pass buttons
- Basic messaging interface with liked profiles
- Multi‑step registration form
- Example Express server using SQLite for storage
- Swipe left or right to express interest
- Simple chat interface with matched users

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

### Start the development API server

```sh
npm run server
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
