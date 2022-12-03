## React Typescript Webpack Setup.

### How to setup project

#### Level - 1 - Basic folder structure.

1. Initialize new project with `npm init`

2. Create src and dist folder in root of the project.

3. Creare `index.html` file in src folder.

4. Add .gitignore file.

#### Level - 2 - Installing dependencies.

1. Install react and react-dom. - `npm i react react-dom`.

2. Install `npm i typescript @types/react and @types/react-dom`.

3. Create tsconfig.json file in root of the directory `tsc --init`.

4. Install babel dependencies - `npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript`.

5. Install webpack - `npm i -D webpack webpack-cli webpack-dev-server html-webpack`

6. Install babel loader - `npm i -D babel-loader` and `@babel/plugin-transform-runtime"`

#### Level - 3 - Create webpack configuration

1. Create webpack.config.js file and configure settings
2. Create dev entry in package.json file - to start react server
