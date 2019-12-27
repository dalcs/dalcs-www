[![Netlify Status](https://api.netlify.com/api/v1/badges/f055d958-e05f-43f7-8631-8f709c95c0d8/deploy-status)](https://app.netlify.com/sites/dalcs/deploys)
# dalcs.org
This repo contains the code for https://dalcs.org. It is a single page react app and I'm using [styled-components](https://www.styled-components.com/) for styling. It's currently being hosted on netlify. Any pushes to master will trigger a re-build and deploy on netlify.

## Getting started
To get started developing, run
```shell
npm run start
```
and it will start a dev server on http://localhost:3030

## Structure
- [src/components](src/components): Contains reusable web components.
- [src/public](src/public): Public assets (e.g., favicon, images)
- [src/pages](src/pages): Individual webpage, please note routing is not setup currently to handle multiple pages.