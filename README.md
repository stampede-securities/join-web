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

## Deploying to AWS S3

Make sure you have [aws-cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) installed, and have run `aws-configure` with a user with full permissions to s3 on the "stampede-admin" AWS account. Then run `npm run deploy-aws`. See [this article](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af) for more information.

## File Structure

- [src](./src) contains all of the source code written for the project
  - [components](./src/components) contains general components that will likely be used across multiple pages
  - [containers](./src/containers) contains React components which serve as different pages in the app (currently just `Home`)
    - components folders within containers are for components that will only be used by that specific view

## Routes

### `/`

Index page for users to sign up

### `/share`

Page users get directed to after they create an account

### `/login`

Page for ambassadors + admins to log in to

### `/dashboard`

Dashboard for admins to see the DB

### `/ambassador`

Page for ambassadors to see their information

## Spotify

Spotify code is in src/containers/Form/index.js. Will need to replace localhost references with actual URL. Current end result is to have Spotify song id stored in this.state.addedSongs - to change what gets stored at the end to use on backend, replace instances of the below with something else:

```bash
this.setState(prevState => ({
   addedSongs: [...prevState.addedSongs, wanted_id]
}))
```

Song IDs are passed in through URL parameter - ie in the form http://localhost:3000/?2fg7fOCgtxcdRFjeiULyo6.
