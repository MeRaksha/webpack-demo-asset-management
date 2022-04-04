# Asset Management Using Webpack
## _Loading CSS, Images and other type of files_

One of the coolest webpack features is that we can also include any other type of file, besides JavaScript, for which there is a loader or built-in Asset Modules support.

## To run the demo:

- npm install
- npm run build
- npm serve

## Loading CSS
In order to import a CSS file from within a JavaScript module, we need to install and add the style-loader and css-loader to our module configuration:

```sh
npm install --save-dev style-loader css-loader
```

```sh
module: {
  rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
  }],
}
```

> webpack uses a regular expression to determine which files it should look for and serve to a specific loader. In this case, any file that ends with .css will be served to the style-loader and the css-loader.

