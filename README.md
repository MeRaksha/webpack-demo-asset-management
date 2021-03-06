# Asset Management Using Webpack
## _Loading CSS, Images and other type of files_

One of the coolest webpack features is that we can also include any other type of file, besides JavaScript, for which there is a loader or built-in Asset Modules support.

## To run the demo:

- npm install
- npm run build
- npm serve

## _TOPICS COVERED IN THIS DEMO:_

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


## Loading Images

 As of webpack 5, we can use the built-in Asset Modules to load the images.
 
 webpack.config.js module configurations section:
 ```sh
module: {
  rules: [{
    test: /\.(png|svg|jpg|jpeg|svg)$/i,
    type: 'asset/resource'
  }],
}
```

When add the above configurations and <code>import MyImage from './my-image.png' </code>, that image will be processed and added to our output directory and the <code>MyImage</code> variable will contain the final url of that image after processing. When using the css-loader, a similar process will occur for <code>url('./my-image.png')</code> within our CSS. The loader will recognize this is a local file, and replace the <code>'./my-image.png'</code> path with the final path to the image in our output directory. The html-loader handles <code>&lt;img src="./my-image.png" /></code> in the same manner.

## Loading Fonts

We can use the Asset Modules to load any type of file and output it to our build directory. This means we can use them for any kind of file, including fonts.

webpack.config.js module configurations section:
 ```sh
module: {
  rules: [{
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource'
  }],
}
```

## Loading Data
#### _data, like JSON files, CSVs, TSVs, and XML._

Support for JSON is actually built-in, i.e <code>import Data from './data.json' </code> will work by default.
To import CSVs, TSVs, and XML we can use the csv-loader and xml-loader.

```sh
npm install --save-dev csv-loader xml-loader
```


webpack.config.js module configurations section:
 ```sh
module: {
  rules: [ {
    test: /\.(csv|tsv)$/i,
    use: ['csv-loader'],
  },
  {
    test: /\.xml$/i,
    use: ['xml-loader'],
  }],
}
```
