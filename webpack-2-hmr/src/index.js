// import './style.css';

// var btn = document.createElement('button');
// btn.innerHTML  = "点击";
// document.body.append(btn);
// btn.onclick = function(){
// 	var div = document.createElement('div');
// 	div.innerHTML = 'item';
// 	document.body.append(div);
// }

import counter from './counter';
import number from './number';

counter();
number();

/**
 * 如果module.hot开启的话，如果'./number'发生变化，则执行内部的语句
 */
if(module.hot){
	module.hot.accept('./number', () => {
		document.body.removeChild(document.getElementById('number'));
		number();
	});
}