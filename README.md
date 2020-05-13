# Chlothars-Character-Builder

A basic character creator for Pathfinder/D20

## Project setup

```
1. yarn install
2. yarn migrate -> Sets up the DB
3. yarn seed -> Optional, seeds the DB with 3 premade characteres

Start here to revisit your Characters

4. yarn BEStart -> Starts the BackEnd
5. yarn FEStart -> Starts the FrontEnd
6. Please find your characters on the local host

```
### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

## Known Issues
When seeding from provided seed file, you will need to save your first new character 4 times. This is necessary to allow the character ID to become unique.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
