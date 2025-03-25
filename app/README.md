# App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Packages
```shell
# Create the App
npx @angular/cli new app --routing --style=scss --no-standalone

# install dependencies

npm install bootstrap

npx @angular/cli add @angular/localize

npm install @popperjs/core

npm install @ng-bootstrap/ng-bootstrap

npm install @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons
 
npm install @fortawesome/free-brands-svg-icons
 
npm install @fortawesome/free-regular-svg-icons

#create the module auth

npx @angular/cli generate module auth --route auth --module app

cd src/app/auth

npx @angular/cli generate component login

npx @angular/cli generate component register

touch auth.seervice.ts

touch auth.interceptor.ts

cd ../../../

# create new modules

npx @angular/cli generate module error --route error --module app

npx @angular/cli generate module home --route home --module app

# in app folder



```
