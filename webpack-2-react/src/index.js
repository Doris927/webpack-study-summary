//在使用useBuiltIns时，不需要import @babel/polyfills
//但是在写一个第三方库时，这种方式会导致全局污染，要使用@babel/plugin-transform-runtime @babel/runtime
//使用react时需要npm install --save-dev @babel/preset-react
import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component{
	render(){
		return <div>Hello World!</div>;
	}
}

ReactDom.render(<App/>, document.getElementById('root'));