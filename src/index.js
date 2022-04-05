import {join} from 'lodash-es';
import './style.css';
import IconBird from './IconBird.png';

function component() {
  const element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('fontBlue');
  const image = new Image();
  image.src = IconBird;
  element.appendChild(image);
  return element;
}

document.getElementById('app').appendChild(component());