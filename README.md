# comeon [![Build Status](https://travis-ci.org/fusionstrings/comeon.svg?branch=master)](https://travis-ci.org/fusionstrings/comeon)

> ComeOn Javascrip Test


## Install dependencies

```
$ npm install
```

```
$ jspm install
```


## Run development server

```
$ npm run serve
```


## Architecture

### Main module (comeon)
Goal is to architect the application with maximum modularity. Main module name is `comeon`. Application code resides in `src` folder. Following are more information on tech stack and goals.

- ES2015/ ES6 is language of choice and *babel* is used as transpiler.
- It uses *react.js* as view layer. It makes it very easy to create self contained modules.
- It uses *jspm* as module loader and package builder. *jspm* can load *esm*, *cjs* and *amd* modules.
- Application is further broken into components out of which **comeon** can be declaratively composed.
- Each component should be developed as fully independent package. Keeping that in mind all relected asstes e.g. images, fonts etc and test / helper files should reside in same folder.
- These components should act like micro services and be publishable as separate packages.
- Components could be loaded as dependecies to each other or to main module / application. (Ofcourse extra configuration shall be made while doing so but isolated directory structure makes this activity very easy).
- *api* also acts like dependency package.
- Files within a package can be nested further in directories depending on number of assets or can be further broken into different package.
- Indepent components as a package allows for easier defect triaging and maintainence as well forces to create simpler, focused and portable codebase.
- *ava* is used for testing, *nyc* is used for  and *xo* is used for linting.
- Mock data available at `fixtures/data.json` is used as mock data.
- *isomorphic-fetch* is proposed to be used for ajax solution. `fetch` is new HTML5 API which simplifies ajax calls.
- Libraries / CSS are not included in proposed solution as they should be loaded as dependency rather than part of codebase.
- *Material UI* is proposed and included as CSS solution.
- Base/Global images and other assets will be available on top level of module under `images`, `fonts` etc.
- Ideally static assets shall be served from CDN and shall not be part of codebase.

## Example code

There are only 4 files which contains code in `src` folder, rest are placeholder files.
 
- `src/api/index.js` contains placeholder methods to interact with endpoints/fixture.
- `src/components/login/login-form.js` is example of stateful React component.
- `src/components/navigation/categories.js` is example of stateless React component.
- `src/index.js` is main module (comeon) entry point. Tt loads `LoginForm` component from `src/components/login/login-form.js`.


## License

MIT © [Dilip Kr. Shukla](https://github.com/fusionstrings/comeon)
