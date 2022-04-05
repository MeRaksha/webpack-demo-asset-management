import {join} from 'lodash-es';
import './style.css';
import IconBird from './IconBird.png';
import JsonData from './data.json';
import XmlData from './data.xml';
import CsvData from './data.csv';

function component() {
  const element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('fontBlue');
  const image = new Image();
  image.src = IconBird;
  element.appendChild(image);
  console.log(JsonData);
  console.log(XmlData);
  console.log(CsvData);
  return element;
}

document.getElementById('app').appendChild(component());