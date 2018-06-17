const fs = require('fs');

/**
 * @description Titlize
 * @param text
 * @param format
 */
const titlize = (text, format) => {
  const textWords = text.split('-');
  if (format === 'camel') {
    return textWords.map((word, index) => index > 0
      ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      : word.charAt(0).toLowerCase() + word.slice(1).toUpperCase()).join('');
  } else if (format === 'pascal') {
    return textWords.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
  } else if (format === 'dashed') {
    return textWords.map(word => word.toLowerCase()).join('-');
  }
};

/**
 * @description createFile
 * @param componentName
 * @param path
 * @param fileExtension
 * @param content
 * @param fileName
 * @param baseDir
 */
const createFile = (componentName, path, fileExtension, content, fileName = 'index', baseDir = '') => {
  if (baseDir !== '' && !fs.existsSync(path)) {
    fs.mkdirSync(baseDir);
  }

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }

  fs.writeFile(`${path}/${fileName}.${fileExtension}`, content, (err) => {
    if ( err ) {
      return console.log(err);
    }
  });
};

/**
 * @description createJavaScriptFile
 * @param componentName
 */
const createJavaScriptFile = componentName => {
  const componentPascalName = titlize(componentName, 'pascal');
  const componentDashedName = titlize(componentName, 'dashed');
  const baseDir = `./src/components/${componentPascalName}`;
  const componentPath = `./src/components/${componentPascalName}/script`;
  const content = `
import React from 'react';

const ${componentPascalName} = (props) => (
  <div data-component="${componentDashedName}">
  
  </div>
);

export default ${componentPascalName};

`.trim();

  createFile(componentName, componentPath, 'js', content, titlize(componentName, 'pascal'), baseDir);
};

/**
 * @description createJavaScriptIndexFile
 * @param componentName
 */
const createJavaScriptIndexFile = componentName => {
  const componentPascalName = titlize(componentName, 'pascal');
  const componentPath = `./src/components/${componentPascalName}/`;
  const content = `
import ${componentPascalName} from './script/${componentPascalName}';
export default ${componentPascalName}

`.trim();

  createFile('index', componentPath, 'js', content);
};

/**
 * @description createStyleFile
 * @param componentName
 */
const createStyleFile = componentName => {
  const componentPascalName = titlize(componentName, 'pascal');
  const componentDashedName = titlize(componentName, 'dashed');
  const componentPath = `./src/components/${componentPascalName}/style`;
  const content = `
/**
 * Styles for component ${componentPascalName}
 */

[data-component="${componentDashedName}"] {

}

`.trim();

  createFile(componentName, componentPath, "scss", content, componentPascalName);
};

exports.createComponent = componentName => {
  createJavaScriptFile(componentName);
  createJavaScriptIndexFile(componentName);
  createStyleFile(componentName);
};
