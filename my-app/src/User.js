// Types of Components 
import React, {Component, createElement,PureComponent} from 'react'
import { render } from "react-dom";
// Method 3: Styling in react method 3: 
import style1 from './App_styles.module.css';
import {useState,useEffect,useReducer} from "react";
// { PureComponent }


//1. Functional Components : 

// Literally javascript functions which return html 
// Stateless Components 
// Absence of this keyword in functional components 


// 2. Class Components 
// Regular ES6 classes which extend the Component class from the react library 
// Feature Rich 

// They maintain their own privy data known as state 
// Complex UI Logic 
//They provide lifecycle hooks 

// Stateful Components / smart components /container components 

// They must contain a render() method which in turn returns the html 

// --------------------------------------------------------------------------
//  1.Functional Components lec-5
// ****Greet function using normal function syntax ***********


// export default function Greet(){
//     return <h1>Hello Viswas Sir </h1>
// }

// Greet function using the ES6 arrow function syntax 

//  export const Greet = ()=><h1>Hello Sriram Krishnamurthy</h1>




// for a named export prepend export before the const keyword and enclose the import name (same as funComp's name) with a bracket 

// Some fun ! 

// const Greet = ()=>{ console.log("Hey")
//   return(<h1>Hello Functional Component Here </h1>)  

// }



// Note : Default exports when being imported could be imported as any random name, and the random name so used will become the name of the custom html tag 

// Since Greet is a default export 

// import Greet from './User.js' 
// <Greet/>

// Could Have also been
// import MyCompOne from './User.js' 

// denoting the same greet function but with a different name whilst being imported 

//  <myCompOne/> 

// export default Greet  -->use only when the comp is a default export 

// --------------------------------------------------------------------------
//  2.Class Components Lec-6 


// export  class Welcome  extends Component {
//     render() {
//         return (
//             <div>
//              <h1>Hello Class Component Here !</h1>   
//            </div>
//         )
//     }
// }

// --------------------------------------------------------------------------
// 3.JSX and no JSX Lec-8 

// funcComp with JSX 


// export const Hello=()=><h1>Hello Vishwas with JSX</h1> 

// createElement without nesting of html tags 

// export const Hello1=()=>{

// return (
//  createElement('h1',{id:"refId",className:"refCalss"},'Hello Vishwas without JSX')

// )
// }


// createElement with the nesting of tags 

// export const Hello2=()=>{

// return (
//  createElement('div',{id:"refId",className:"refCalss"},
// createElement('p',null,'Hello there with nested createElements')
// )
// )
// }

// --------------------------------------------------------------------------
// Props in functional and class components Lec-9 

// props object is the additional input which the component receives. It allows the component to be dynammic 


// Passing a property from the parent component to the child component and render that in the browser 

// specified as attributes whilst passing props in the custom component tags . 
// Like for EX: 
/* <Greet1 name="Bruce"/>
<Greet1 name="Clarke"/>
<Greet1 name="Diana"/> */

// The props once received by the child components are immutable and thus cannot be changed within the body of the child component 

// Using normal function 
// export  function Greet1(props) {
//     console.log(props)

//     return (   
//         <div>
//    <h1>Hey {props.name} </h1>
                                          
//    <p>{props.children + "Sup" } </p> 
//         </div>
//     )
// }

// Using arrow functions 
// export const Greet1=(props)=>{
// console.log(props);

// return <h1>Hey {props.name} </h1>
// }

// props Using Class Components 



// export  class Greet2 extends Component {
//     render() {
//         console.log(this)
//         console.log(this.props)

//         return (
//             <div> 
//                       <p>{this.props.children + " Sup1 "}</p>

                       
//                 <h1>Hello there ! it's me {this.props.name}</h1>
//             </div>
//         )
//     }
// }


// --------------------------------------------------------------------
// State in react Lec 10

// Another way to manipulate what is being rendered on the screen as the ui can be done using the state object 

// states is an object which holds the information privy to the class or functional component itself 

// can be modified within the body of the component 

// allows us to dynamically manipulate class properties etc.. thus render 
// dynamic content to the browser screen 

// state inherently in class components 

// export  class Message extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              message: 'Sup Buddy'
//         }
//          this.zeta=0;
//     }
      
//     ChangeMessage(x){
//         if(this.zeta==0) 
//         {
//          this.setState(
//              {
//                  message:`Thank you for the sub buddy ${x}`
//              }
//        )
//        this.zeta=1;
//        document.querySelector("#root").style.backgroundColor="red"
//        document.querySelector("body").style.backgroundColor="yellow"   
//         }
//         else
//         {
//             this.setState(
//                 {
                   
//                     message:`Welcome buddy ${x}`
//                 })
//                 this.zeta=0;
//                 document.querySelector("#root").style.backgroundColor="yellow"   
//                 document.querySelector("body").style.backgroundColor="red"   

//         }
   
//     }
    
//     render() {
//         return (
//             <div>
//             <h1>{this.state.message}</h1> 
//             <button onClick={()=>{this.ChangeMessage("Sriram")}}>Click Me</button>
//             </div>
//         )
//     }
// }

// ----------------------------------------------------------------------------------------
// *****************setState Method in react Lec 11************************************  
// Amazing the use of prevState and the setTimeout Methods !! 


// export class Counter extends Component {
//     zeta=100;
//     state={
//       count:0,
//       count1:0
//     }

//     incrementCount(){
//         console.log("sup1")
//         // setTimeout(() => {
//                 this.setState({
//                 count: this.state.count+10
//             })
//         // }, 2000);
    
//         this.setState({
//             count: this.state.count+100
//         })
//     }
// //     incrementCount(){
// //         console.log(this.zeta)
// //         // console.log("hey")
// //         console.log( `hey ${this.state.count}`)
       
// // setTimeout(() => {
// //             this.setState((prevState)=>({
          
// //             count:prevState.count+1,
// //             count1:prevState.count1+2


// //         }),()=>{console.log(`the count is ${this.state.count} Babe and the count1 is ${this.state.count1} Babe!`)})
// // }, 3000);

// // setTimeout(() => {
// //     this.setState((prevState)=>({
  
// //     count:prevState.count+3,
// //     count1:prevState.count1+2


// // }),()=>{console.log(`the count is ${this.state.count} Babe and the count1 is ${this.state.count1} Babe! Yeah !!`)})
// // }, 6000);
// // this.setState((prevState)=>({
  
// //     count:prevState.count+3,
// //     count1:prevState.count1+2


// // }),()=>{console.log(`the count is ${this.state.count} Babe and the count1 is ${this.state.count1} Babe! Yeah !!`)})



// //         // console.log(`The count is ${this.state.count}`)
// //         console.log(`hey ${this.state.count}`)
// //         setTimeout(() => {
// //             document.querySelector("body").style.backgroundColor="red"    
// //          }, 4000);
         
            

// //     }

//     incrementCount1(){
//         // console.log("hey")
//         console.log( `hey1 ${this.state.count}`)
       
//         this.setState((prevState,props)=>({
          
//             count:prevState.count+2,
//             count1:prevState.count1+2 


//         }),()=>{console.log(`the count is ${this.state.count} Babe and the count1 is ${this.state.count1} Babe!`)})
//         // console.log(`The count is ${this.state.count}`)
//         console.log(`hey1 ${this.state.count}`)
//         this.setState((prevState,props)=>({
          
//             count:prevState.count+2,
//             count1:prevState.count1+2 


//         }),()=>{console.log(`the count is ${this.state.count} Babe and the count1 is ${this.state.count1} Babe!`)})
//         setTimeout( 
//             () => {
//            document.querySelector("#root").style.backgroundColor="yellow"    
//         }, 2000);
       
//     }
//     incrementCount2(){
//        this.incrementCount()
//        this.incrementCount()
//     //    this.incrementCount()
//     //    this.incrementCount1()
//     }  


    
//     render() {
//         return (
//             <div>
//               <h1>{this.state.count}</h1>
//               <button onClick={()=>{this.incrementCount2()}}>Click Me</button>
//             </div>
//         )
//     }
// }


// --------- Destructuring props and state in react Lec 12 -----------------------

// 2 ways to destructure props in functional components
// 1.Destructuring in the parameter itself as props are passed as a parameter to the functional component
// export function DestructuringFncmp({name,heroName}) {
//     return (
//         <div>
//             <h1>Hello {name} and {heroName} </h1>
//         </div>
//     )
// }
// 2.to destructure the props object within the body of the functional component 

// export function DestructuringFncmp(props) {
// let {name,heroName}=props
//     let {...heroName1}=props   
//     let x1 = {...heroName1,favCar:"Bughati Veyron"}
//     // console.log(x1)
//         //  console.log(heroName1)
//     return (

//         <div>
//             <h1>Hello {name} and {heroName} !! </h1>
//         </div>
//     )
// }


// //*************** */ Destructuring the props of a class components ***********************
// object destructuring is done within the render method

// the variables declared within the render method are not made into the properties of the object. Hence there is no need to use the thi reference to refer to them also the value of this within the render() Method is implicitly bound to be that of the enclosing context . i.e of the enclosing class component
// export class DestructuringClscmp extends Component {
//     constructor(props) {
 
//         super(props)  
//             //  console.log(this)
//     //    this.a=100;
//     //  console.log(this.a)

//     // U can destructure one object after the other like this, for normal object destructuring syntax please used the render method 
//         // this.a=this.props.name
//     }
//     a1 = 1000;
//     a112(){ 
//         console.log(this)
   
//     }
//     axyx={
//      name: "xyz2"
//     }

//     render() {
//                    let x = this.a112.bind(this.axyx)
//                    x()
//                    console.log("----")
//                    this.a112()

//         // console.log(this.a1)
//         const {name,heroName}=this.props     saves writing the this.props.name etc...
        //    const {state1,state2}=this.state   saves writing the this.state.favCarz etc....

//         let c=100;
//         return (
//             <div>
//                 <h1>Hey {this.a1s} and  {name} and {heroName} and{c}!! </h1>
//             </div>
//         )
//     }
// }

//**************************** */ Lec 13 Event Handling in react****************************


// EVent Handling in functional Components 

// export function FunctionClick() {
// const clickHandler=()=>{
// console.log("Button Clicked")
// alert("Button Clicked")
// }
//     return (
//         <div>
//             sup
//             <br />
//             <button onClick={clickHandler}>Click Me</button>
//         </div>
//     )
// }



// export class FunctionClick extends Component {
 
    
//     clickMe(){
   
//         alert("button Clicked")
//         console.log("button Clicked")
//     }
//     render() {
// // this.clickMe()
//         return (
//             <div>
//                <h1>Sup</h1> 
//                <br />
//                <button onClick={this.clickMe}>Click to Display</button>
//             </div>
//         )
//     }
// }





// ***************Binding Event Handlers in React JS Lec 14 *************************************


// export class EventBind extends Component {

// // Method-1: Declaring the function as an arrow function as the this keyword within the scope of this arrow function will always refer to the parent class 
// // clickMe(){
// // alert("Button Clicked")
// // }
// constructor(props) {
//     super(props)

//     // ********** Same as method 1 only this time declared within the constructor ****************
//     //    this.clickMe=()=>{
//     //     //    document.querySelector("body").style.backgroundColor="blue";
//     //     if(this.a%2==0)
//     //     {
//     //         this.setState({color:"orange"})
//     //         this.a++;
//     //     }
        
//     //     else
//     //     {
//     //          this.setState({color:"white"})
//     //          this.a++;
//     //     }
       
//     //    }

//     //    Method 2: This time we shall hard  bind the normal function to the parent class's this keyword

// //  this.clickMe=function(){
// //     if(this.a%2==0)
// //         {
// //             this.setState({color:"orange"})
// //             this.a++;
// //         }
        
// //         else
// //         {
// //              this.setState({color:"white"})
// //              this.a++;
// //         }

// //  }
// //  in method 2, we have declared the function and binded the function to the class's this within the constructor



// //1:***** bind method 1: **** Here we are binding the this keyword within the constructor 
//  this.clickMe=this.clickMe.bind(this)
//     this.state = {
//       color:"white"   
//     }
// }
// // Method 3: Declare normal function outside the class and bind it in theconstructor or the render method 

// a=0
// clickMe=function(){
//     if(this.a%2==0)
//         {
//             this.setState({color:"orange"})
//             this.a++;
//         }
        
//         else
//         {
//              this.setState({color:"white"})
//              this.a++;
//         }

//  }

// ABC(){
//     console.log("Sup")
// }
//     render() {
//         // Method 2:
//         // we can also bind the function in the render method: but this binding happens everytime the component rerenders due to state change 



//         // ***** bind method 2: **** Here we are binding the this keyword of the function within the render method 


//         //  this.clickMe=this.clickMe.bind(this)
//         document.querySelector("body").style.backgroundColor=this.state.color
//         return (

//             <div>
//             <h1>----------------------------------------------</h1>
//                <h1>Hello Pal </h1> 
//                {/* for method 1,2,3 */}
//                {/* <button onClick={this.clickMe}>CLICK ME !</button> */}
//                {/* for Method 4 */}
//                      {/* <button onClick={()=>{this.clickMe()}}>CLICK ME !</button> */}


//             </div>
//         )
//     }
// }


// *************** Passing Methods as props , child to parent communication    Lec 15*******************************

// export function MethodsAsPropsP() {

// let a = [1,2,3]
//    function  parentMethod(childParam){
//     //    alert(childParam)
//        document.querySelector("#Sup").innerHTML=childParam 
//        document.querySelector("#Sup").style.backgroundColor=childParam
//     }

// return(
// <div>
// <h1 id="Sup">-----------------------------------------</h1>
//    <h1>Sup</h1>  
//    parent Component
// <MethodsAsPropsC invokePMethod={parentMethod} parentObject={a}/>
 
// </div>

// )



// }


// export function MethodsAsPropsC(props){

//  return (
//      <div>
//      <h1>-----------------------------------------</h1>
//          <h1>{props.parentObject}</h1>
//          <h1>Child Component</h1>
//          <button onClick={()=>{
//              let xyz=prompt("Enter a variable name","white")
//                 props.invokePMethod(xyz)}}>Click Me !</button>
//          <h1>-----------------------------------------</h1>
//      </div>

//  )
        
    



// }


// ********* Conditional Rendering in React js Lec 16 ****************


// export class ConditionalRendering extends Component {
//       state={
// isLoggedIn: true
//         }
// stateChanger=()=>{
// this.setState({isLoggedIn: !this.state.isLoggedIn})
// }
//     render() {
// //    Method 1: **********Standard if Else approach *******************
//          if(this.state.isLoggedIn==true)
//          {   
//                 return (
//                 <div>    
//                 <h1>Welcome Vishwas</h1>
//                 <button onClick={this.stateChanger}>Click Me !</button>
//                 </div>
     
//                     )
//          }
      
//          else if(this.state.isLoggedIn==false)
//          {
//                  return (
//         <div>    <h1>"Sup"</h1>
//      <button onClick={this.stateChanger}>Click Me !</button>
//      </div>

//     )

//     // Method 2:************ By using element Variables ************
//     let message
//     if(this.state.isLoggedIn==true)
//     {
//         message= 
//         <div>
//         <h1>Sup it's true</h1>
//         <button onClick={this.stateChanger}>Click Me !</button>
//         </div>
//     }
//     else if(this.state.isLoggedIn==false)
//     {
//         message= 
//         <div>
//            <h1>Sup it's False</h1>
//         <button onClick={this.stateChanger}>Click Me !</button>
//         </div>
    
//     }

// return message
//     // ************ */ Method 3: Using Ternary Operators *******************
//     return this.state.isLoggedIn==true? 
//     (
//     <div>
//     Yes ! 
//     <br />
//     <button onClick={this.stateChanger}>Click Me !</button>
//     </div>) : 
//     (<div>
//     No ! 
//     <br />
//     <button onClick={this.stateChanger}>Click Me !</button>
//     </div>)


//     // ****** Method 4: using the short-circuit operator when we want to render either something when the condition is true or nothing at all if the condition is false 

//    return  this.state.isLoggedIn==true && <div>Sup babe !! it's true </div>
//     }
//     }
// --------------------------------------------------------------------


// ******************* List Rendering in react Lec 17 *****************

// let names = ['bruce','clarke','diana','Serena','Novak Djokovic']

// // export function ListRendering() {
// //     return (
// //         <div>
// //             <h1>{names[0]}</h1>
// //             <h1>{names[1]}</h1>
// //             <h1>{names[2]}</h1>
// //         </div>
// //     )
// // }

// // What if we had to render an array of size 100 ??

// // We use the Array.prototype.map method for list rendering 

// // an array of html elements 

// let name=[<h1>hey</h1>,<h1>Sup</h1>,<h1>See ya</h1>,<h1>Pal</h1>] 
// let names1 = names.map(name=><div>{name} Yeahh </div>)
// whilst returning a html element for from the callback MSInputMethodContext, u can give the idx parameter as the unque key id 
// export function ListRendering() {
//     let k=0;
//     return (
//         <div>
//             { 
               
//                   /* names1 */
//                 /* names.map(name=><div>{name} Yeahh </div>)  */
//                  names.map(name=>{  k++;
//                   return  <ListRenderingC Name={name} key={k} key1={k}></ListRenderingC>
//                      })  
                    
        
//             }
//         </div>
//     )
// }




// function ListRenderingC({key1,Name}) {
//     return (
//         <div>
//             {key1} How are ya Buddy <b>{Name}</b>!! 
//         </div>
//     )
// }

// ************* Styling in react Lec 20 ******************


// Method 2: Using a style object :


// let style={
//     backgroundColor:'yellow',
//      color:'red',
//      fontSize: '20px'
// }

// // // Method 3: Styling in react method 3: 
// // import style1 from './App_styles.module.css';

// export function Styling(props) {
//     let clsName = props.primary==true?"method-1":'';
   
//     return (

//          // Method 1: Styling a component using regular css stylesheets -(app.css)
//              <div>     
//              <div className="method-1">
//             <h1>Hello</h1>
//         </div>
//         <div className={clsName}>
//             <h1>Hello</h1>
//         </div>
//         <h1 style={style}>Hello Man !! </h1>

//         {/* method 2 : using inline css object like syntax styling  */}

//         <h1 style={{color:"red",backgroundColor:"green"}}>Sup ! Hello man !</h1>
//         {/* Method-3 using the css modules file, for it to be used in a file. it has to be specifically imported in that file  */}
//   <h1 className={style1.xyz}>Hello !! hey man !!!</h1>

//         </div> 
   
//     )
// }


//*************** */ Form Handling in react Lec 21*************************


    //    we want react to control the values of the form input elements 





// export class FormHandler extends Component {
// state={
//           username: '1',
//           src1:"",
//           Option:"",
//            xyz1:[<User1/>]
//       }
 
//     addComponent=()=>{
//        let xyz2=[...this.state.xyz1,<User1/>];
//         this.setState({
//               xyz1:[...xyz2]
//         })
//       }
//       RemoveComponent=()=>{
//         let xyz2=[...this.state.xyz1];
//         xyz2.pop()
//         this.setState({
//               xyz1:[...xyz2]
//         })
//       }

//       formChangeHandler = (e)=>{
//             this.setState({
//                 username: e.target.value
            
//             })
//       }
//       imageChanger=(e)=>{
//           this.setState({
//               src1:`${this.state.username}`
//           })
//       e.preventDefault()
//       }
//       formOptionHandler = (e)=>{
//         this.setState({
//             Option: e.target.value
        
//         })
//   }

//     render() {
      
//         return (
//             <div>
//                 <form action="">
//                       <img className="img_resize" src={this.state.src1}alt="" />
//                       <br />
//                       <br />
//                       <br />
//                   <label htmlFor="URL-INPUT">Enter the URL of the image u want to see</label> 
//                     <input  id="URL-INPUT" type="text" onChange={this.formChangeHandler} value={this.state.username} />
           
//                     <input type="submit" onClick={this.imageChanger}/>
//                      </form> 
//                      <br />
//                              <button onClick={this.imageChanger}>Click ME !</button>
// <br />
//  <label htmlFor="">Select your Stock</label>
//  <br /> 
//  <select name="" id="" value={this.state.option} onChange={this.formOptionHandler}>

//       <option value="a">a</option>
//      <option value="b">b</option>
//      <option value="c">c</option>
//      <option value="d">d</option>
//      <option value="e">e</option>
//      <option value="f">f</option>
//  </select> 
//  /* <br />
//  <br /> 
//  /* <textarea name="" id="" cols="30" rows="10"></textarea> 
//  <br />
//  <br />
//  <br /> 
//  <button onClick={this.RemoveComponent}>Click for Deleting the last  Textarea !</button>
//  <h1>_ _ _</h1>
//   <button onClick={this.addComponent}>Click for new Textarea !</button> 
//    <br />

//   <br />
//   <br />
// {this.state.xyz1}


//             </div>
           
//         )
//     }
// }






//********* */ Component for the custom Blog App *************************
// export function User1() {
//     return (
//     <div>    
//     <img src="" alt="" />
//     <textarea name="" id="" cols="30" rows="10"></textarea>
//     <br />
//      <button>Click Me ! </button>
//      <br />
//      <br />
//      </div>
 
//     )
// }

// export class User1 extends Component {
//  state={
//     src1:"https://c.ndtvimg.com/2020-07/m7opt04g_ms-dhoni-afp_625x300_06_July_20.jpg?output-quality=60&output-format=webp&downsize=555:*" ,
//   src2: "Hello World"
//  }    
//  imagez=()=>{
//                let x = prompt("Enter URL",`${this.state.src1}`)
//                this.setState((prevState,props)=>({
//                   src1:x 
//                }))
//         }
//    contents=()=>{
//         let y= prompt("Enter content",this.state.src2)
//         this.setState({
//            src2:y
//         })
//     }
    
//     render() {
      
      
        
//         return (
//             <div>
//             <img className="img_resize" src={this.state.src1} alt="" />
//             <br />
//             <div className="blog-content" dangerouslySetInnerHTML={{__html: this.state.src2}}></div>

//                   <br />   
//           <div className="flex-blog">
//        <button onClick={this.contents}>Upload Content ! </button>  

//        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
//        <button onClick={()=>{this.imagez()}}>Upload Image  ! </button>  
//        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
//        <button>Update  Me ! </button> 
//         </div>
//        <br />
//         <br />
//         <h1>-----------------------------------------------------------</h1>
//             </div>
//         )
//     }
// }

// *********************************************************


//***** */ Component Lifecycle Methods in react Lec 22 ***************


// Component Lifecycles Methods and when they are ChannelSplitterNode, we can access all these methods

// 1.Mounting : instance of a component is created and inserted into teh dom 
// 2.updating:  called when the component is rerenderd as a result of the changes to it's props or state 
// 3. unmounting : when th3 component is being removed from the dom 
// 4.error: when an error is encountered during the rendering 


// Methods during the mounting stage 

// Methods during Updating stage 

// Methods during the unmounting stage 

// Methods during the error handling stage 



// Main mounting method 
// 1.constructor()
// special function called when an instance of the component is created 
//  initialise state 
//   bind the event handlers 
// Do not make http requests 
// 2.render()--->class components 
// read props and state return jsx
// don't change state, or interact with dom or make ajax calls 
// after the execution of the render() MSInputMethodContext, children components life cycle methods are also executed 

// Component did Mount()
// called only once during the entire lifecycle of the component and 
// het's called immediately after the component and all it's children components havebeen rendered to teh dom 

// This is the perfect place to cause side eddects that is interact with teh dom or perform ajax calls to load data 



// Fragments in react Lec 25 ********************************

// Fragments in react help us group a list of children elements without adding extra nodes to the dom



// export function Fragments() {
//     return (
//     //     <div>    
//     //     <h1>Fragments</h1>
//     // <p>This describes the fragment demo component</p>
//     // </div>
    
//         <React.Fragment>
// <h1>Fragments</h1>
// <p>By React</p>

//         </React.Fragment>


//     )
// }


// If we do this however we will notice that we are addingg an additional div tag in the dom tree just because we have to enclose multiple jsx elements in an enclosing div 

// we can save this additional dom node being inserted by Enclosing the jsx under teh react fragments 

// *********************Pure Components in react Lec 26 **************************



// export class PureClsComp extends PureComponent {
// state={
// name:"Pure Component",
// k:0

// }

// componentDidMount(){  
//      console.log("State supposedly changed")
//     // setInterval(() => { 


//     // }, 2000);
 
//             this.setState({

//         name:`Pure Component ${this.state.k}`
//         // k:this.state.k+1
      
//          })

//    console.log("State supposedly changed1")
// }

//     render() {
//         console.log("component Rendering ")
//         return (

//             <div>
//                 hello it's me pure Component
//             </div>
//         )
//     }
// }




// ************* Refs and preliminary Lec 28 **************





// export class Refz extends Component {

//     constructor(props) {
//         super(props)
//     // Method 1 of creating refs 
// this.inputRef = React.createRef()

// // Method-2 : by creating a property initially and assigning the value of NULL  --> this is also called callback reg

// // We shall now create a method which will assign a dom element to the ref created above 
// this.cbRef=null;
// this.setCbRef=(element)=>{
// this.cbRef=element
// }
//     }
    
//     // buttonClick=(e)=>{
//     //     // console.log(e.target.innerHTML)
//     //     // console.log(e.target.innerHTML)


    
//     //    document.querySelector("#input_elm1").value=""
//     //    document.querySelector("#input_elm1").focus()
//     //    document.querySelector("#arbitrary_dom").innerHTML="Hello World"



//     // } 

// // xyz=function(){

// // }
//     componentDidMount(){
//         setTimeout(() => {
//             // console.log("sup")
//         if(this.cbRef!=null)
//         {
//             this.cbRef.focus()
//         }
//         }, 2000);

//         console.log(this.inputRef)
//  this.inputRef.current.focus()
//  this.inputRef.current.placeholder="Enter the details"
// //  this.inputRef.current.style.backgroundColor="red"
//     }
//     render() {

//         return (
//     // Rect uses the ref way to access a particular dom element 
// // Method-1 using the create ref method 
//     <div> 
//     {/* // Method-1 using the create ref method  */}
//     <label htmlFor="">form input element using ref </label>
//         <input type="text" ref={this.inputRef}/>

// <br />

// <label htmlFor="">form input element using callback  ref </label>
//         <input type="text" ref={this.setCbRef}/>



//     </div>

//             // ---------------------------
//             // jsx for the querySelector way of adding focus to teh form input element 
//             // <div>
//             // <input id="input_elm" placeholder="Enter details" id="input_elm" type="text"></input>
//             // <input id="input_elm1" defaultValue="SSUp" type="text" />
//             // <br />
//             //     <button onClick={this.buttonClick}>Click ME 1!</button>
                
//             // </div>

//         )

//     }
// }

// Portals,forwarding refs error boundries etc... theory based approach though is heavy on pracs 



// Higher Order Components Lec 33 

// ************ Normal parent child component *******************

//  class ClickCounter extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count:0,
//              color:"red"
            
//         }
//     }
//     incrementCount=()=>{
//         this.setState((prevState)=>(
//             {
//                 count: prevState.count+1
//             }
//         ))
//     }
//     ChangeColor=()=>{
//         let x = prompt("Enter Color","");
//         this.setState({
//             color: `${x}`
//         })

//     }
  
//     render() { 
//         let x="onClick"
    
//         return (
//             <div>
//             <h1>{this.state.count}</h1>
//                 {/* <p style={{backgroundColor:`${this.state.color}`,height:"250px",width:"250px",margin:"auto"}} onClick={this.ChangeColor}>Hey</p>
//                <h1>{this.state.count}</h1>
//                <button onKeyUp={this.incrementCount}>Clicked {this.state.count} times</button> 
//                <button onClick={this.incrementCount}>Clicked {this.state.count} times</button>  */}

//                 <ChildComp event={x} count={this.state.count} eventMethod={this.incrementCount}/>
//             </div>
//         )
//     }
// }




// function ChildComp({event,eventMethod,count}) {

//     // You can conditional render here based on what the client wants 
//     return (
//         <div>
//             <button onClick={eventMethod}>The count is {count}</button>
//         </div>
//     )
// }


// // Common functionality between components 

// // A function takes an original component and returns a new component 
// // ironman= withsuit(TonyStark)

// // **********Higher order components jsx************


// function ButtonComp1({count,increment}){
// return(
//     <>
//  <button onClick={increment}>The count is {count} Babyy</button>




//     </>
// )
// }


//  function ButtonComp2({count,increment}){
//     return(
//         <>
//      <button onMouseOver={increment}>The count is {count} Babyy</button>
//         </>
//     )
//     }
    
// // Higher Order Function 
//     function ABC(Compz){

//     class HOC extends Component {
// state={
//     count:0

// }
// incrementCount=()=>{
// this.setState(function(){
//    return( {
//        count:this.state.count+1
// })})
//     }
//     render(){
//     return (
//   <Compz count={this.state.count} increment={this.incrementCount}/>
//        )
//     }
//     }

// return HOC;
//     }


    
//  let Xeta=[];
//  let Y = ABC(ButtonComp1);
//  Xeta=[...Xeta,<Y/>]
//  let Y1 = ABC(ButtonComp2);
//  Xeta=[...Xeta,<Y1/>]
// console.log(Xeta)


// export default  Xeta;



// export class RenderingProps extends Component {

//     state={
//         count:0
//     }
//     incrementor=()=>{
//         this.setState(     
//              {
//             count:this.state.count+1
//         })
  
//     }
//     render(props) {
//        let {incrementorz}=this.props
//         return (
//             <div>
//             {this.state.count}
//           {incrementorz(this.state.count,this.incrementor)}
//             </div>
//         )
//     }
// }


//*** */ Bascics have been learningt **************************************















// ****************************React Hooks ****************************
//  Hooks prelim: U can only use them with functional components
//  U can't call hooks inside loops conditions or nested fn's 
// Use them at teh very top 
// mimics state and other such properties exclusive to functional components to also the class components 











function A(){
    return(
        <div>
            Hey !! pal !!
        </div>
    )
}


const xyz=()=>{  
    console.log("Heyy")
   return 1**2
}



var x1=10;

// Normal increment Counter with hooks ************************* 

// export function RH1(){
// // const [count,setCount] = useState(()=>{
// // console.log("Heyy1",x1)
// //     return(xyz(0))
// // })

// const [count,setCount] = useState(xyz)
    
// return(
//     <div style={{display:"flex",flexDirection:'column',alignItems:"center",justifyContent:"center"}}>
//         {/* {A()} */}
//         <button onClick={(e)=>{
//             console.log(e)
//             setCount(count+1)}}>+</button>
//        <h1>{count}</h1> 
//         <button onClick={()=>{setCount(count-1)}}>-</button>
//         <br /> 
//             <br />

//          <User/>
//     </div>
// )
// }


// Functional component with hooks for a form 


// Naive approach 


// export function RH1() {

//     const [{x1,x2},setState]=useState({x1:"",x2:""})
//     return (
//         <div>
//             <form id="CustomStock"  action="">
//   <input  type="username" value={x1} onChange={e=>{
//         setState({x1:e.target.value,x2})
//   }}/>
//   <br />
//   <input  style={{marginTop:"10px"}} value={x2} type="password" onChange={e=>{
//         setState({x2:e.target.value,x1})
//     }}/>
//   <br />
// <br />
// <input type="submit" />

//  </form>
//   </div>

  
//     )
// }


// Efficient Approach with custom Hooks 




// Custom Hook *********



// const useForm=(initialValues)=>{
// const [values,setState]=useState(initialValues);

// return [values,e=>{
//     setState({...values,[e.target.name]:e.target.value})
// }]



// }

// Simple usecases of the useeffect using both the normal setState custom hook useForm 

// export function RH1() {
 
//     const [values,stateChanger]=useForm({x1:"",x2:""})
//     const [values1,setState1]=useState({x1:"",x2:"",key:-1})
//     useEffect(()=>{
       
//       setState1((prevState)=>({...prevState,key:prevState.key+1}))
//       setState1((prevState)=>({...prevState,x2:`Hello there ${prevState.key }`}))

//       return()=>{
//           console.log("unmounted")
//       }
//     },[values.x1])
//     return (
//         <div>
//     <h1>{values1.x2}</h1>
//             <form id="CustomStock"  action="">
//   <input name="x1" type="username" value={values.x1} onChange={stateChanger}/>
//   <br />
//   <input name="x2" style={{marginTop:"10px"}} value={values.x2} type="password" onChange={stateChanger}/>
//   <br />
// <br />
// <input type="submit" />

//  </form>
//   </div>

  
//     )
// }



// Fetching date from an API using the useEffect hook 

// fetching data from the numbers api 

// whenever the url changes we want to rerender and display data corresponding to the url 

// Custom useEffect hook called as the useFetch hook 

const useFetch=(url)=>{
const [State,setState]=useState({data:"",loading:true,number:0})
// console.log("render !!!!")
    useEffect(()=>{
        console.log(url)
//    console.log("hey !!")
fetch(url).then(x=>x.text()).then(y=>{console.log(State.number)// --
//     let xyz = y.concat(100)
//    let xcv = xyz+` hey`
    // console.log(xcv)

    // for(let i=0;i<y.length;i++)
    // console.log(y[i],"Hey !!")
    setState({data:y,loading:false,number:State.number+1}) 
     console.log("Bitrix 24 ! ")
    // setState({data:y,loading:false,number:State.number+1})
    console.log("Bitrix 24 ! ")
});// --

    console.log("sup !")

// soME FUN *************
// setTimeout(() => {
//     setState({...State,data:"Super"})
// }, 3000);


// setState({...State,data:"Super1"})
    },[url]);
    console.log("render1 !!!!")
    return State;
}

export function RH1(){
// console.log("Suppahhhh")
    const [count,setCount]=useState(0)
 let data1= useFetch(`http://numbersapi.com/${count}/trivia`)
// `https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new`
 useEffect(()=>{
// console.log("SUperb")
return(()=>{
    // console.log("rerendered")
})
 },[count])
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
//  console.log("supeeeeeeeeeeeeeeeeer")
  return (
      <>      <h1 style={{color:"white"}}>{data1.data}</h1>
      <button onClick={()=>{setCount(count-1)}}>-</button>
      <span>   </span>
      <button onClick={()=>{setCount(count+1)}}>+</button></>

  )
}


function reducer(state,action){
switch(action.type) {
    case "increment":
    return {...state,count:state.count+1}
    case "decrement":
        return {...state,count:state.count-1}
    default:
        return state;
}

return state+1

}
// const sample=()=>{
// console.log("rendered")
//     return 10
// }
// Context API in react 
let I=["increment","decrement"]
      let x=100 ;
export function Reducerz() {
  
   const [state,dispatch] =  useReducer(reducer,{count:0})
    


        return (
          <>      
          
         <div>{state.count}</div>
            <button onClick={()=>{x=window.prompt("Enter a number")
            console.log(x)}
            }>Input</button>
            <br />
            <br />
            <br />
            <div>{x}</div>
         <button onClick={()=>
         {    console.log(x)
         
             dispatch({type:I[x]})
             
             }}>+</button> 
         <button onClick={()=>dispatch(I[x])}>-</button> 
         
          </>

            
    
        )
    }




function Books() {
    return (
        <div>
           <h1 style={{display:"inline-block"}}>The Great Escape</h1> 
           <span>- Sylvester Stallone !</span>
        </div>
    )
}




export function Exp(){
let [count,setCount]=useState(0)
useEffect(()=>{
console.log("Supzzzzzzzzzz !!")
return(()=>{
    console.log("super!")
})
},[count])
console.log("Sup1 !!")
return (
    <>
<Exp1/>
<h1>Hello</h1>
<br />
<button onClick={()=>{setCount(count+1)}}>Click Me</button>

    </>
)
}
export function Exp1(){
   
    useEffect(()=>{
    console.log("Sup !!")
    return(()=>{
        console.log("super!")
    })
    },[])
    console.log("Sup1 !!")
    return (
        <>
    
    <h1>Hello1</h1>

    
        </>
    )
    }

//     export const xyxyyxy = ()=>{

// useEffect(() => {


// }, [input])







        
//     }