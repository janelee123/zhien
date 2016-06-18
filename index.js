// ES6 语法
import React, {Component} from 'react';
import ReactDom from 'react-dom';

import Input from './components/Input';
import Title from './components/TextComponent';

ReactDom.render(
	<div>
		<Input />
		<Title />
	</div>, document.getElementById('root'));


// ###########################
function Par(val) {
	// Par的一个实例
	this.a = val;
}

// 构造函数
function Child() {
	// this就是Child一个实例
	this.par = new Par('b');
	console.log(this.par.a); // b

	this.vv = 'nn';
}

var c = new Child();
// var d = new Child();

console.log(c.vv); // nn