# Artitrakt

A deck tracker for the game Artifact.
Saves decks and keeps track of your wins/losses.

# Download Link

Click [here](https://github.com/amagana8/artitrakt/releases/download/0.1.0/artitrakt.app.zip) to get Artitrakt v0.1.0.

# Todo
* Add table sorting mechanism.
* Import and export decks using Artifact's deck code.
* Create separate Hero, Items, and Abilities decks.
* Add automatic win/loss tracking.

### `yarn install`
```yarn install``` will go through the package.json and download all the required node modules.

### `yarn electron-dev`

```yarn electron-dev``` will start the Electron app and the React app at the same time.

### `yarn react-build`

```yarn react-build``` will build the React build.

### `yarn build`

```yarn build``` will build the Electron application.

# Questions

Q: I get ```Unresolved node modules: <insert node module here>``` when running yarn build. How do you fix this?<br/>
A: type in ```export ELECTRON_BUILDER_ALLOW_UNRESOLVED_DEPENDENCIES=1``` and run it again.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
