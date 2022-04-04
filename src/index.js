import {join} from 'lodash-es';
import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('fontBlue');
  return element;
}

document.getElementById('app').appendChild(component());