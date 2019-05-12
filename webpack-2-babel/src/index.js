//在使用useBuiltIns时，不需要import @babel/polyfills
//但是在写一个第三方库时，这种方式会导致全局污染，要使用@babel/plugin-transform-runtime @babel/runtime
const arr = [
	new Promise(()=>{}),
	new Promise(()=>{})
]

arr.map(item => {
	console.log(item);
});