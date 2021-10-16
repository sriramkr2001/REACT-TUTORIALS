import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import {React,Component} from 'react';
// import {Custom_Carousel} from './Custom_Carousel';
// -------------------------------------------
// functional components lec-5 
// import {Greet} from './User.js'
// ----------------------------------------
// Class Components lec-6   
// import {Welcome} from './User.js'
/* --------------------------------------------------- */
/* JSX and no JSX Lec-8  */
// import {Hello} from './User.js'
// import {Hello1} from './User.js'
// import {Hello2} from './User.js'
/* --------------------------------------------------- */
/*Props in functional and class components Lec-9*/ 
// import {Greet1} from './User.js'
// import {Greet2} from './User.js'
/* --------------------------------------------------- */
/* State in react Lec-10  */
// import {Message} from './User.js'
/* --------------------------------------------------- */
// The setState method in react Lec 11
//  import {Counter} from './User.js'
/* --------------------------------------------------- */
// Destructuring props and states in react lec 12
// Destructuring props of a functional component 
//  import {DestructuringFncmp} from './User.js'
// Destructuring props of a class component 
//  import {DestructuringClscmp} from './User.js'
/* --------------------------------------------------- */
// Event Handlers in react Lec 13
// import { FunctionClick } from './User';
/* --------------------------------------------------- */
// Binding event handlers in react Lec 14 
// import {EventBind} from './User';
/* --------------------------------------------------- */
// Passing Methods as Props, child to parent communication: Lec 15 
// import {MethodsAsPropsC,MethodsAsPropsP} from './User';
/* --------------------------------------------------- */
// Conditional Rendering in React Lec 16
// import {ConditionalRendering} from './User';
/* --------------------------------------------------- */
//  List Rendering in React  Lec 17
// import {ListRendering} from './User';
/* --------------------------------------------------- */

// styling in react Lec 20
// import {Styling} from './User'
/* --------------------------------------------------- */
// Form Handling in react Lec 21
// import {FormHandler} from './User'
/* --------------------------------------------------- */
// 21-24 Theory Component Lifecycle Methods 
/* --------------------------------------------------- */
// Fragments in react Lec 25 
// import {Fragments} from './User'
/* --------------------------------------------------- */
// Pure Components in react Lec 26
// import {PureClsComp} from './User'
/* --------------------------------------------------- */
  // Refs in react phewwwwww 
  // import {Refz} from './User'
  // ----------------------------------------------------------------

// Higher order Components in react Lec 31-34 
  //Step 1:  import ClickCounter from './User' -->use only when u further export clickcounter as a named export as well .
  // import Xeta from './User'
  // console.log(Xeta[0])
  // Follow step 1
  // let Z=[...ClickCounter]
    // ----------------------------------------------------------------
    // Rendering Props -(HOC alternate , remember 2 comps , with 2 methods to props , like that )
// --------------------------------------------------------------------------
// Remaining topics : Memo,forwarding refs,error boundaries,context,http requests - axios 
  //  import  {RenderingProps} from './User'








  // ***************** React Hooks **************** 
  import {RH1,Exp} from './User'
  // import {Reducerz} from './User'

function App()
{
  // let xyz=[<FormHandler/>,<FormHandler/>,<FormHandler/>]
return(
<div className="App">

{/* <h1 style={{color:"aqua"}}>Hello World</h1> */}
{/* ----------------------------------------------------- */}
{/* Functional Components Lec-5  */}
{/* <Greet/> */}
{/* --------------------------------------------------- */}
{/* Class Components Lec-6  */}
{/* <Welcome/> */}
{/* --------------------------------------------------- */}
{/* JSX and no JSX Lec-8  */}
{/* <Hello/>
    <Hello1/>
    <Hello2/> */}
{/* --------------------------------------------------- */}
{/* Props in functional and class components Lec-9  */}
{/* <Greet1 name="Bruce">Hello There</Greet1>
<Greet1 name="Clarke"/>
<Greet1 name="Diana"/>

<Greet2 name="Bruce1">Hello There</Greet2>
<Greet2 name="Clarke1"/>
<Greet2 name="Diana1"/> */}
{/* --------------------------------------------------- */}
{/* State in react Lec-10  */}
{/* <Message/> */}
{/* The setState Method in react Lec 11 */}
 {/* <Counter/> */}
 {/* --------------------------------------------------- */}
 {/* Destructuring props and states in react 12 */}
 {/* Destructuring the props of a functional component 2 methods: one destructure in the parameter,2.destructure within the function body */}
 {/* <DestructuringFncmp  name="K.SRIRAM" heroName="Hanuman"></DestructuringFncmp> */}

 {/* Destructuring class components  */}
  {/* <DestructuringClscmp name="K.ANUJ" heroName="Ramanujar"></DestructuringClscmp> */}
   {/* --------------------------------------------------- */}
   {/* Event Handlers in react Lec 13  */}
   {/* <FunctionClick/> */}
      {/* --------------------------------------------------- */}
      {/* Binding Event Handlers in react Lec 14 */}
      {/* <EventBind/> */}
    {/* --------------------------------------------------- */}
      {/* Passing Methods as props , child to parent communication  */}
      {/* <MethodsAsPropsP/>  */}

    {/* --------------------------------------------------- */}
      {/* Conditional Rendering in React  Lec 16 */}
      {/* <ConditionalRendering/> */}
    {/* --------------------------------------------------- */}
    {/* List Rendering in React Lec 17    */}
    {/* <ListRendering/> */}
        {/* --------------------------------------------------- */}
    {/* Styling in react Lec 20 */}
    {/* <Styling primary={true}/> */}
    {/* --------------------------------------------------- */}
   {/* Form handling in react Lec 21  */}
   {/* <FormHandler/> */}
   {/* <h1>----------------------------------------------------</h1> */}
{/* Lec22-24 Theory Component Lifecycle Methods !! */}
{/* ------------------------------------------------------------------- */}
 {/* Fragments in react Lec 25  */}
 {/* <Fragments/> */}
{/* ------------------------------------------------------------------- */}
{/* Pure Components in react  Lec 26 --implicitly perdorms shallow copy and rerenders only if there is an actual change in state*/}
{/* <PureClsComp/> */}
{/* ------------------------------------------------------------ */}
{/* Refs in react Lec 28  */}
{/* <Refz/> */}
{/* ------------------------------------------------------------ */}
{/* Higher Order Components in react Lec 33  */}
{/* <ClickCounter/> */}
{/* {ClickCounter} */}
{/* {Xeta} */}

{/* Rendering Props  Lec 37 */}
{/* <RenderingProps incrementorz={(count,incrementor)=>(<button onClick={incrementor}>Click Me {count}</button>)}/>

<RenderingProps incrementorz={(count,incrementor)=>(<button onMouseOver={incrementor}>Click Me {count}</button>)}/> */}
{/* ------------------------------------------------------------ */}
{/* Remaining topics : context,forwarding refs ,error boundaries, memo, http requests - axios  */}



























{/* **********************React Hooks ************************* */}
{/* Hooks prelim: U can only use them with functional components .  */}
{/* 1.useState Hook  */}

{/* <RH1/> */}
{/* <Exp/> */}
{/* <Reducerz/> */}



{/* --------------------------------------------------- */}
{/* TODO-LIST  */}

{/* <TODO_NAV /> */}


{/* *********** promises Async Await ************  */}
<Ezz/>
<Xyz/>
<RH1/>
<Supps/>
</div> )
}

// ---------------Todo-List Design-----------------------------------

function TODO_NAV(){
return(
  <>
<div className="TODO_NAV">
<img className="NAV_IMAGE"src="logo192.png" alt="" />
<h1 className="NAV_HEADING">REACT-TODO-LIST</h1>
</div>
  </>
)
}

export default App;

// ******************* Promises / Async and Await **********************
// functions are first class objects in js 


const Xyz=()=>{
  let [state,setState]=useState("wsk")
  let url='https://goquotes-api.herokuapp.com/api/v1/random?count=10'
  useEffect(() => {
  fetch(url).then(y=>y.json()).then(x=>{
    
//  const [x1,...y]=x.results
//     const {name:{title}}=x1
    let xcv={...x.quotes}
    for(let key in xcv)
    console.log(xcv[key])
    xcv["jpowdjpj"]="wswswqs"
    let xv='6'
    setState(xcv["jpowdjpj"])
  })
  
  },[])
  

  return(
    <pre><h1 style={{margin:"auto"}}>{JSON.stringify(state,null,2)}</h1></pre>
  /* <>    <br />  <img src={url}/></>
  <p>{state}</p> */

  )
  }

  
  
  export class Supps extends Component {
    constructor()
    {
      super()
      this.sys=()=>{
console.log("wjwojds","This is K.SRIRAM");

      }
    }
    render() {
      this.sys()
      return (
        <div>
          Sup !
        </div>
      )
    }
  }
  

  

function Ezz(){
const [state,setState]=useState(0)
let a  = 10;
function setCounter(e){
console.log(e.target.innerHTML)
setState(state+1)
console.log(a)
}
return(

<><div>{state}</div>

<button onClick={setCounter}>CLICK ME !</button></>




)





}









































//*******************************************The  Default App Component which React Provides us !! **********************************************
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// ***********************************************************************************************************

//********************** */ App component for the custom-carousel;********************************

// function App() 
// {
//   return (
// <div className="App">
// {/* <div className="Particles" style={{ position: 'absolute' }}>
//           <Particles height="100vh" width="100vw" params={ParticlesConfig} />
//         </div> */}

//    <header className="App-header">
//    <header className="App-header-1">
//         <Custom_Carousel/>
  
//   <h1  className="site-title-h1" style={{backgroundColor:"transparent",color:"white"}}>Developed with ❤ by Sriram Krishnamurthy</h1>
//    </header>
      
//    </header>
        
       

 
// </div>
//   );

// }

// export default App;

// / ***********************************************************************************************************





