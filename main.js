import gsap from "gsap";
import { Expo, Sine } from "gsap";


const drag = document.getElementById("drag");


// console.log(window.innerWidth, window.innerHeight);


// const run = setInterval(repeat, 1000);
// window.addEventListener("mouseup", function() {
//   repeat();

//   const x = drag.getBoundingClientRect();
//   // console.log(x);

//   // console.log(drag.getBoundingClientRect());


//   if (parseInt(drag.style.top) > this.window.innerHeight * .2) {

//     // console.log(x.right, this.window.innerWidth);
//     // top left corner
//     if (parseInt(x.left) > this.window.innerWidth * .2) {
//       console.log("top left corner");
//       gsap.to("#drag", {
//         top: "0px", 
//         left: "0px",
//         duration: 1, 
//         delay: .1, 
//         ease: Sine.easeInOut
//       })
//     }

//     if (parseInt(x.right) < this.window.innerWidth * .8) {
//       console.log("top right corner");
//       gsap.to("#drag", {
//         top: "0px", 
//         left: `${ - x.width / 3 * 2 }px`,
//         duration: 1, 
//         delay: .1, 
//         ease: Sine.easeInOut
//       });
//     }

//     if (parseInt(x.left) < this.window.innerWidth * .2 && parseInt(x.right) > this.window.innerWidth * .8) {
//       console.log("top");
//       gsap.to("#drag", {
//         top: "0px", 
//         duration: 1, 
//         delay: .1,  
//         ease: Sine.easeInOut
//       })
//     } 
//   }

// })







let mousedown = false;
window.addEventListener("mousedown", function() {
  mousedown = true;
});
window.addEventListener("mouseup", function() {
  mousedown = false;
})

function repeat() {

  if (mousedown == false) {
     // console.log("log");
    const drag = document.getElementById("drag").getBoundingClientRect();
    // console.log(drag.right);

    if (drag.left > window.innerWidth * .1) 
      gsap.to("#drag", {
        left: "0px", 
        duration: 1.5, 
        delay: .1,
        ease: Sine.easeInOut
      })
    

    if (drag.top > window.innerHeight * .1) 
      gsap.to("#drag", {
        top: "0px", 
        duration: 1.5,
        delay: .1,
        ease: Sine.easeInOut
      })
    
    if (drag.right < window.innerWidth * .9) 
      gsap.to("#drag", {
        left: `${ - drag.width / 3 * 2 }px`,
        duration: 1.5, 
        delay: .1,
        ease: Sine.easeInOut
      })
    
      if (drag.bottom < window.innerHeight * .9) 
        gsap.to("#drag", {
          top: `${- drag.height / 2 }px`, 
          duration: 1.5, 
          delay: .1, 
          ease: Sine.easeInOut
        })
  }

}

// const run = setInterval(repeat, 4000);




// mouse movement 

let mouse = {x: 0, y: 0};
// let mouse3D = new THREE.Vector3();
function returnMousePos(event) {
  // update mouse variable
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // console.log(mouse.x.toFixed(2), mouse.y.toFixed(2));

  gsap.to(".circleSmallWrapper", {
    x: +mouse.x * 25,
    y: -mouse.y * 25,
    duration: .8, 
    // ease: Sine.easeInOut
  })

}

window.addEventListener("mousemove", returnMousePos, false);





// when click on advice
const trig1 = document.getElementById("advice");
console.log(trig1);


trig1.addEventListener("click", function(){
  gsap.to("#drag", {
    top: `${0}px`,
    left: `${-window.innerWidth * 2}px`,
    duration: 1.2,
    delay: 0.05,  
    ease: Sine.easeInOut
  })
})




