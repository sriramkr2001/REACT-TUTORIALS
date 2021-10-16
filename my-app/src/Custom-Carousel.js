









// ******************Javascript and the User component for the Custom Carousel ***********************************
var zt=1 ;
var t =0;
var k=0;
var ktq=0;
let a = ['Sriram',1]
let b = ["black","black"]
let c = ["https://upload.wikimedia.org/wikipedia/commons/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg","https://upload.wikimedia.org/wikipedia/commons/2/27/Panthera_tiger_in_a_marshy_area_in_captivity.jpg","https://upload.wikimedia.org/wikipedia/commons/0/06/Tamiasciurus_douglasii_000.jpg","https://picsum.photos/200/300","https://picsum.photos/200/301","https://picsum.photos/200/302","https://picsum.photos/200/303","https://picsum.photos/200/304","https://picsum.photos/200/305","https://picsum.photos/200/306","https://picsum.photos/200/307","https://picsum.photos/200/308","https://picsum.photos/200/309","https://picsum.photos/200/310","https://picsum.photos/200/311","https://picsum.photos/200/312","https://picsum.photos/200/313","https://picsum.photos/200/314","https://picsum.photos/200/315","https://picsum.photos/200/316","https://picsum.photos/200/317","https://picsum.photos/200/318","https://picsum.photos/200/319","https://picsum.photos/200/320"]
 

    const changeContent = ()=>{
     if(zt==1&&ktq==0)
     zt=0;
        if(zt==1&&ktq==1)
        {
               zt=0;
            k++;
        }
        
        console.log(k)
if(k==c.length)
{ 
    //   xyz1.src="https://upload.wikimedia.org/wikipedia/commons/0/06/Tamiasciurus_douglasii_000.jpg"
   k=2; 
//    xyz1.src="";
}
 if(k<0)
k=0;

    //    alert("sup")
//  document.getElementById('Sup').innerHTML = "Hey There !"

//   document.getElementById('Sup').style.color="purple" 

//   let x = document.getElementsByClassName('hello1')
  let xyz=document.querySelector('body')
  xyz.style.backgroundColor=b[k]
  let xyz1=document.querySelector('img')
//   for(let i =0;i<x.length;i++)
//   {
//       x[i].style.color="purple"
//   }
 
 

if(k%2==0)
{
    xyz.style.backgroundColor=b[k]
      xyz1.src=c[k]
      xyz1.style.width="600px"
// for ( y of x)
//   {  
//       y.style.backgroundColor='white'
//     //   y.style.color="blue"
//       y.style.fontSize="20px"
//       y.innerHTML=a[k]
//       xyz.style.backgroundColor=b[k]
//       xyz1.src=c[k]
//       xyz1.style.width="600px"
//   }
//   t=1;
}
if(k%2==1)
{ xyz.style.backgroundColor=b[k]
      xyz1.src=c[k]
      xyz1.style.width="600px"
//     for ( y of x)
//   {  
//       y.style.backgroundColor='black'
//     //   y.style.color="blue"
//       y.style.fontSize="20px"
//       y.innerHTML=a[k]
//       xyz.style.backgroundColor=b[k]
//       xyz1.src=c[k]
//       xyz1.style.width="300px"
//   }
  
    
}
  

// let X1 = document.getElementsByTagName('p');

// for ( y of X1)
//   {  
//       y.style.backgroundColor='white'
//     //   y.style.color="blue"
//       y.style.fontSize="20px"
//       y.innerHTML="<h1>p-tag-accessed</h1>"
//   }

k++;
}

const changeContent1 = ()=>{

    if(zt==0)
k-=2;
else k-=1
if(k<0)
k=0;
console.log(k)
let xyz=document.querySelector('body')
  let xyz1=document.querySelector('img')
//   for(let i =0;i<x.length;i++)
//   {
//       x[i].style.color="purple"
//   }
 
 

if(k%2==0)
{
    xyz.style.backgroundColor=b[k]
      xyz1.src=c[k]
      xyz1.style.width="600px"
// for ( y of x)
//   {  
//       y.style.backgroundColor='white'
//     //   y.style.color="blue"
//       y.style.fontSize="20px"
//       y.innerHTML=a[k]
//       xyz.style.backgroundColor=b[k]
//       xyz1.src=c[k]
//       xyz1.style.width="600px"
//   }
//   t=1;
}
if(k%2==1)
{ xyz.style.backgroundColor=b[k]
      xyz1.src=c[k]
      xyz1.style.width="600px"
//     for ( y of x)
//   {  
//       y.style.backgroundColor='black'
//     //   y.style.color="blue"
//       y.style.fontSize="20px"
//       y.innerHTML=a[k]
//       xyz.style.backgroundColor=b[k]
//       xyz1.src=c[k]
//       xyz1.style.width="300px"
//   }
  

    
}
  
zt=1;
// let X1 = document.getElementsByTagName('p');

// for ( y of X1)
//   {  
//       y.style.backgroundColor='white'
//     //   y.style.color="blue"
//       y.style.fontSize="20px"
//       y.innerHTML="<h1>p-tag-accessed</h1>"
//   }

ktq=1;

}


export function Custom-Carousel()
{
 return(
    <div className="App-header-1">

<h1 style={{fontSize:"50px",color:"yellow"}}>Image Carousel Custom</h1>
   <p className="site-title-h1" style={{fontSize:"30px",color:"Green"}} >hello World !</p>




<h1><img src="https://i0.wp.com/www.csscodelab.com/wp-content/uploads/2020/01/3d-css-carousel-perspective-auto-animated.png?w=1060&ssl=1" height="400px" width="400px" alt=""></img></h1>


<h1><button style={{backgroundColor:"yellow",height:"30px"}} onClick={changeContent1}><strong>Click Prev</strong></button> 
<button style={{backgroundColor:"green",marginLeft:"40px",height:"30px"}}onClick={changeContent}><strong>Click Next</strong></button> </h1>

<br/>

</div> 






    
     
 )
}