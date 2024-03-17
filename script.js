var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur"); 
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30 + "px",
    crsr.style.top = dets.y + "px",
    blur.style.left = dets.x - 175 + "px",
    blur.style.top = dets.y - 175 +"px"
});


var h4all = document.querySelectorAll("#nav");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid rgb(204, 177, 0, 0.5)"
        crsr.style.backgroundColor = "transparent"
    });
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid rgb(204, 177, 0, 0.3 )"
        crsr.style.backgroundColor = "rgb(204, 177, 0,0.45)"
    });
});
gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%", 
        end:"top -11%",
        scrub:1
    },
});
gsap.to("#nav h2",{
    backgroundColor: "rgb(204, 177, 0)",
    color: "black",
    duration: 0.1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%", 
        end:"top -11%",
        scrub:1
    },
});
gsap.to("#main", {
    backgroundColor: "#000", 
    scrollTrigger:{
        trigger:"#main",
        scroller:"body", 
        start:"top -25%",
        end:"top -85%",
        scrub:2
    },
});

gsap.from("#about-us img,#about-us-in",{
    y:50, 
    opacity:0,
    duration:3,
    stagger:0.6,    
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body", 
        // markers:true,
        start:"top 60%", 
        end: "top 58%",
        scrub:3
    },
});
// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:0.5,
//     // stagger:0.4,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body", 
//         stagger:0.1,
//         markers:true,
//         start:"top 70%", 
//         end: "top 65%",
//         scrub:1
//     }
// })
gsap.from("#colon1",{
    y:-70, 
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%", 
        scrub:3
    },
});
gsap.from("#colon2",{
    y:70, 
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%", 
        scrub:3
    },
});

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 65%",
        end:"top 40%", 
        scrub:3
    },
});



gsap.from("#page3-in",{
    y:50, 
    opacity:0,
    duration:3,
    stagger:0.6,    
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body", 
        // markers:true,
        start:"top 60%", 
        end: "top 58%",
        scrub:3
    },
});


gsap.from("why-zescoot, #div1, #div2",{
    y:90, 
    opacity:0,
    duration:15,
    stagger:0.6,    
    scrollTrigger:{
        trigger:"#why-zescoot",
        scroller:"body", 
        // markers:true,
        start:"top 60%", 
        end: "top 58%",
        scrub:3
    },
});