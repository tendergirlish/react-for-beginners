import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";
// function App() {
	// const [counter, setValue] = useState(0)
	// const [keyword, setKeyword] = useState("")
	// const onClick = () => setValue((prev) => prev + 1)
	// const onChange = (event) => setKeyword(event.target.value)

	// useEffect(() => {
	// 	console.log('i ren when keyword changes')
	// }, [keyword])
	// useEffect(() => {
	// 	console.log('i ren when counter changes ')
	// }, [counter])
	// useEffect(() => {
	// 	console.log('i run when keyword & counter changes')
	// }, [keyword,counter])
	// return (
	// 	<div>
	// 		<input 
	// 			value={keyword} 
	// 			type="text" 
	// 			placeholder="Search here.." 
	// 			onChange={onChange}
	// 		/>
	// 		<h1 className={styles.title}>{counter}</h1>
	// 		<button onClick={onClick}> Click me</button>
	// 	</div>
		
	// )
// }
function Hello(){
	useEffect(() => {
		console.log('hi')
		return function(){
			console.log('bye')
		}
	},[])
	return(
		<h1>Hello</h1>
	)
}
function App () {
	const [showing, setShowing] = useState(false)
	const onClick = () => setShowing((prev)=> !prev)
	return (
		<div>
			{showing? <Hello /> : null}
			<button onClick={onClick}>{showing? "hide":"show"}</button>
		</div>
	)
}

export default App;
