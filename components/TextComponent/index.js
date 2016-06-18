import React,{Component} from 'react';
import SPS from 'simple-pub-sub';

import './title.css';

class Title extends Component{
	constructor(props, context){
		super(props,context);

		// 指向Title的一个实例
		this.state = {
			text: 1
		};

		const me = this;
		
		SPS.on('input', function(val) {
			me.setState({
				text: val
			});
		});
	}

	clickHand(e) {
		// target:实际被触发的元素 currentTarget: 绑定事件的元素
		console.log(e.target.tagName, e.currentTarget.tagName);
	}

	render(){
		return(
			<div onClick={this.clickHand.bind(this)} style={{
				height: '100px',
				border: 'solid 1px red'
			}}>
				<h1>{this.state.text}</h1>
			</div>
		);	
	}
}

export default Title;
