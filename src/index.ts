import * as _ from 'lodash';
import './style.css'
import {printMe} from './print'
// import Iconjpg from './icon.jpg'
function component() {
    let element = document.createElement('div')
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello")
   
    // 将图像添加到我们现有的 div。
    // var myIcon = new Image(100,100);
    // myIcon.src = Iconjpg;
    // element.appendChild(myIcon);
    printMe()
    // let span = document.createElement('span');
    // span.innerText="hello to me !";
    // span.style="background:#abc;font-size:50px;"
    // element.appendChild(span)
    return element
  }
  
  document.body.appendChild(component());