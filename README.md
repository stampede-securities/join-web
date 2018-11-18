# Stampede Join Web

## Dependencies

- [NodeJS](https://nodejs.org)
- [NPM](https://npmjs.com) (comes bundled with node)

## Set up

```bash
$ npm install
```

## Running

```bash
$ npm start
```

## File Structure

- [src](./src) contains all of the source code written for the project
  - [components](./src/components) contains general components that will likely be used across multiple pages
  - [containers](./src/containers) contains React components which serve as different pages in the app (currently just `Home`)
    - components folders within containers are for components that will only be used by that specific view
