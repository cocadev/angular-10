<p align="center">
  <h1 align="center">Angular 10 Application</h1>
  <p align="center">
    Angular 10.0.4 + Angular CLI + Angular Universal
    <br>
    Lazy Loading + SSR + PWA + SEO + google Analytics + API REST (Node.js)
    <br>
    Prototype bootstrap
    <br>
  </p>
</p>

## Lighthouse Audit
<img src="https://api.kingofdevs.com/articles/img/search-engine-optimization-avec-angular-lighthouse-after.png"/>

## Table of contents

- [Status](#status)
- [Quick start](#quick-start)
- [Front-end](#front-end)
- [Author](#author)
- [Documentation](#documentation)

### Front-end : What's included
> Dependencies
- [x] Angular : 10.0.4
- [x] Angular CLI : 10.0.3
- [x] Angular Universal : 10.0.1
- [x] Bootstrap : 4.5.0
- [x] Fontawesome : 5.14.0
- [x] jquery : 3.5.1

> Features
- [x] Routing
- [x] Lazy Loading
- [x] Server Side Rendering
- [x] Progressive Web App
- [x] Responsive Layout
- [x] Search Engine Optimization (SEO)
- [x] Components
- [x] Services
- [x] inheritance
- [x] Search / Grid / Pagination
- [x] Leaflet open-source JavaScript library

### Back-end : What's included
> Dependencies
- [x] Node.js : 12.18.1
- [x] Express.js : 4.17.1
- [x] pg-promise : 10.5.7

> Features
- [x] PostgreSQL 
- [x] Database Creation
- [x] Domains Creation
- [x] Tables Creation
- [x] Importing Data
- [x] Exporting Data
- [x] RESTful API 


## Quick start

```bash
# clone the repo
git clone https://github.com/kingofdevs/angular-10.git

# change directory
cd angular-10

# install the repo with npm
npm install

# start the server
npm start

```
in your browser go to [http://localhost:4200](http://localhost:4200) 


## Front-end

### Installation
* `npm install` (installing dependencies)
* `npm outdated` (verifying dependencies)

### Developpement
* `npm run start`
* in your browser [http://localhost:4200](http://localhost:4200) 

### Settings
* you can select one of these Datasources

* Change settings in src/app/modules/application/movies-images-list
* File config/config.service.ts
* default: LOCAL JSON
* LOCAL REST API CRUD : http://localhost:5200

### Tests
* `npm run lint`
* `npm run test`
* `npm run e2e` 

# Use Chrome version 84 min

### Compilation
* `npm run build`       ( without SSR)
* `npm run build:ssr`   ( with SSR)

### Production
* `npm run serve:ssr`
* in your browser [http://localhost:4000](http://localhost:4000) 

### Prototype Bootstrap
* `change directory` cd ui
* launch html pages in your browser

### Author
* Updated : 18/07/2020
* Author  : kingofdevs