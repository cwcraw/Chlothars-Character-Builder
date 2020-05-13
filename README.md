# Chlothars-Character-Builder
A basic character creator for Pathfinder/D20.

This was created during my time as a student at Code Chrysalis.



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
### Future Plans
* Add more Races
* Add Classes
* Add Inventory
* Add the ability to update characters
* EoU improvements
* Refactor Code

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
