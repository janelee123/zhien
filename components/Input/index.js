// ES6语法：引入依赖
import React, {Component} from 'react';
import SPS from 'simple-pub-sub';

import './index.css';

// ES6语法：定义类
class Input extends Component {
	// ES6方式，方法
	constructor(props, context) {
		// 执行父类的构造器
		super(props, context);

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e) {
		SPS.trigger('input', e.currentTarget.value);
	}

	render() {
		// JSX语法
		return (
			<input onChange={this.clickHandler} className='input' placeholder='之解决' />
		);
	}
}

export default Input;
