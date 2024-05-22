const button = document.querySelector(".buttondown");

button.addEventListener("click", (event) => {
    // Prevent the default behavior of the button
    event.preventDefault();

    // Smooth scroll to the target element
    const page = document.querySelector(".secondpage");
    page.scrollIntoView({ behavior: "smooth" });
});

window.onload = function() {
    window.scrollTo(0, 0);
};

gsap.from(".secondpage .micimage",{
    opacity:0,
    duration:0.7,
    scale:.7,
    scrollTrigger:{
        trigger:".secondpage",
        scroller: "body",
        start: "top 20%",
       
    
    }
})
gsap.from(".secondpage .probox",{
    opacity:0,
    duration:0.7,
    x: "10%",
       scrollTrigger:{
        trigger:".secondpage",
        scroller: "body",
        start: "top 20%",
       
    
    }
})

gsap.from(".secondpage .proall",{
    opacity:0,
    duration:0.7,
    delay:1,
    y: "15%",
       scrollTrigger:{
        trigger:".secondpage",
        scroller: "body",
        start: "top 20%",
       
    
    }
})


gsap.from(".third .micimagebox",{
    opacity:0,
    duration:0.7,
        x: "20%",
       scrollTrigger:{
        trigger:".third",
        scroller: "body",
        start: "top 40%",
       
    
    }
})


gsap.from(".third .borderbox",{
    opacity:0,
    duration:0.7,
        x: "20%",
       scrollTrigger:{
        trigger:".third",
        scroller: "body",
        start: "top 40%",
       
    
    }
})


// gsap.from(".third .firstbox",{
//     opacity:0,
//     duration:0.7,
//     start: " 20%", // trigger when the bottom of the element reaches 30% from the top of the viewport
//     end: "0%",
//         delay:1,
//        scrollTrigger:{
//         trigger:".third",
//         scroller: "body",
//         start: "top 40%",
       
    
//     }
// })

gsap.timeline({
    autoplay: false,
    scrollTrigger: {
      trigger: ".third",
      scroller: "body",
      start: "top 40%",
    }
  })
    .fromTo('.third .firstbox', {
      opacity: 0,
      y: '30%',
      scale: 1.1
    }, {
      duration: 0.6,
      ease: 'ease-out',
      delay:0.3,
      opacity: 0.7,
      y: "10%",
      scale: 1.1
    })
    .to('.third .firstbox', {
      duration: 0.7,
      ease: 'ease-out',
      opacity: 1,
      y: 0,
      scale: 1
    });



  gsap.timeline({
    autoplay: false,
    scrollTrigger: {
      trigger: ".third",
      scroller: "body",
      start: "top 40%",
    }
  })
  .fromTo('.third .secondbox', {
    duration:0.6,
   
    opacity: 0,
    y: '30%',
    scale: 1.1
   
    
  }, {
     duration:0.3,// 70% of the total duration
    ease: 'ease-out',
    opacity: 0.7,
    delay:1.2,
    y: "10%",
       scale: 1.1
  })
  .to('.third .secondbox', {
    duration: 0.7, // 30% of the total duration
    ease: 'ease-out',
   
    opacity: 1,
    y: 0,
    scale: 1
   
  })





  
  gsap.timeline({
    autoplay: false,
    scrollTrigger: {
      trigger: ".third",
      scroller: "body",
      start: "top 40%",
    }
  })
  .fromTo('.third .thridbox', {
    duration:0.6,
   
    opacity: 0,
    y: '30%',
    scale: 1.1
   
  }, {
     duration:0.3,// 70% of the total duration
    ease: 'ease-out',
    opacity: 0.7,
    delay:2,
    y: "10%",
       scale: 1.1
      
  })
  .to('.third .thridbox', {
    duration: 0.7, // 30% of the total duration
    ease: 'ease-out',
   
    opacity: 1,
    y: 0,
    scale: 1
       
  })
  

  
  gsap.timeline({
    autoplay: false,
    scrollTrigger: {
      trigger: ".third",
      scroller: "body",
      start: "top 40%",
    }
  })
  .fromTo('.third .fothbox', {
    duration:0.6,
   
    opacity: 0,
    y: '30%',
    scale: 1.1
  }, {
     duration:0.3,// 70% of the total duration
    ease: 'ease-out',
    opacity: 0.7,
    delay:2.8,
    y: "10%",
       scale: 1.1,
       
      
  })
  .to('.third .fothbox', {
    duration: 0.7, // 30% of the total duration
    ease: 'ease-out',
   
    opacity: 1,
    y: 0,
    scale: 1
  });



  gsap.from(".startbigallimg .bigallimg",{
    opacity:0,
    duration:0.7,
    scale:1.5,
       scrollTrigger:{
        trigger:".startbigallimg",
        scroller: "body",
        start: "top 10%",
        
       
    
    }
})

gsap.from(".fivth .listbox",{
    opacity:0,
    duration:0.8,
    x:"-10%",
       scrollTrigger:{
        trigger:".fivth",
        scroller: "body",
        start: "top 10%",
     
    
    }
})

gsap.from(".fivth .ducst",{
    opacity:0,
    duration:0.8,
    delay:0.9,
    y:"20%", 
       scrollTrigger:{
        trigger:".fivth",
        scroller: "body",
        start: "top 10%",
       
    
    }
})

gsap.from(".fivth .complete",{
    opacity:0,
    duration:0.3,
    delay:1.3,
    x:"10%",
       scrollTrigger:{
        trigger:".fivth",
        scroller: "body",
        start: "top 10%",
      
    
    }
})



gsap.from(".fivth .your",{
    opacity:0,
    duration:0.3,
    delay:1.4,
    x:"20%",
       scrollTrigger:{
        trigger:".fivth",
        scroller: "body",
        start: "top 10%",
      
    
    }
})


gsap.from(".fivth .setup",{
    opacity:0,
    duration:0.3,
    delay:1.5,
    x:"20%",
       scrollTrigger:{
        trigger:".fivth",
        scroller: "body",
        start: "top 10%",
      
    
    }
})

gsap.from(".fivth .with",{
    opacity:0,
    duration:0.3,
    delay:1.6,
    x:"20%",
       scrollTrigger:{
        trigger:".fivth",
        scroller: "body",
        start: "top 10%",
      
    
    }
})

gsap.from(".fivth .hyper",{
    opacity:0,
    duration:0.3,
    delay:1.7,
    x:"20%",
       scrollTrigger:{
        trigger:".fivth",
        scroller: "body",
        start: "top 10%",
       
    
    }
})



gsap.timeline({
    autoplay: false,
    scrollTrigger: {
      trigger: ".fivth",
      scroller: "body",
      start: "top 20%",
    }
  })
    .fromTo('.fivth .bigggmic', {
      duration: 0.9,
      opacity: 0,
      x:"-20%",
      y:"-10%",
      scale: 1.4,
      rotate:-4
   
    }, {
     
      ease: 'ease-out',
      delay:2
                   // added rotation
    })
    .to('.fivth .bigggmic', {
      duration: 0.7,
      ease: 'ease-out',
      opacity: 1,
      y: 0,
      x:0,
      scale: 1,
      rotate: 0 // added rotation
    });

    gsap.to('.bigggmic', {
      duration: 8,
      ease: 'ease-out',
      rotate: -80,
      scrollTrigger: {
        trigger: '.with',
        scroller: 'body',
        start: 'top 40%',
        end: 'bottom 20%',
        scrub: true,
        pin: false, 
        animation: false,
        ease: 'power2.out',
        smooth: true, // add this property
      }
    });



    gsap.from(".ddown1",{
      opacity:0,
      duration:0.4,
      delay:.7,
      y:"-50%",
         scrollTrigger:{
          trigger:".intro",
          scroller: "body",
          start: "top 10%",
         
      
      }
  });


 
  
  gsap.from(".d2",{
    opacity:0,   
    duration:0.4,
    delay:.9,   
    y:"-50%",
       scrollTrigger:{
        trigger:".intro",
        scroller: "body",
        start: "top 10%",
       
    
    }
});
  

gsap.from(".d3",{
  opacity:0,
  duration:0.4,
  delay:1,
  y:"-50%",
     scrollTrigger:{
      trigger:".intro",
      scroller: "body",
      start: "top 10%",
     
  
  }
});

gsap.from(".d4",{
  opacity:0,
  duration:0.4,
  delay:1.1, 
  y:"-50%",
     scrollTrigger:{
      trigger:".intro",
      scroller: "body",
      start: "top 10%",
     
  
  }
});

gsap.from(".d5",{
  opacity:0,
  duration:0.4,
  delay:1.2, 
  y:"-50%", 
     scrollTrigger:{  
      trigger:".intro",
      scroller: "body",
      start: "top 10%",
     
   
  }
});


// gsap.from(".star",{
//   opacity:0,
//     duration:0.7,
//     scale:1.8,
//      scrollTrigger:{
//       trigger:".intro",
//       scroller: "body",
//       start: "top 10%",
     
  
//   }
// });

gsap.from(".grouphh",{
  opacity:0,
  duration:0.8,
       scale:1.8,
       delay:2, 
       x:"10%",  
       scale:1.2, 
     scrollTrigger:{
      trigger:".intro",
      scroller: "body",
      start: "top 10%",
    
   
  }
});

gsap.from(".intro .star",{
  opacity:0,
  duration:0.9,
  x:"15%",   
  y:0,
  delay:2,
  scale:1.4,
     scrollTrigger:{
      trigger:".intro",
      scroller: "body",  
      start: "top 10%",
    
  
  }
});

gsap.from(".itro .joker",{
  opacity:0,
  duration:0.8,
  delay:3.3,
      x: "-10%",
     scrollTrigger:{
      trigger:".itro",
      scroller: "body",
      start: "top 10%",
     
     
  
  }
});




gsap.from(".words1 p", {
  opacity: 0,
  duration: 0.3,
  delay: 1.7,
  y: "-40%",
  
  // translateY: "-100%",
  scrollTrigger: {
    trigger: ".intro",
    scroller: "body",
    start: "top 10%",
  },
  stagger: 0.2 // add this to stagger the animation for each line
});


words.forEach((word, index) => {
  gsap.to(word, {
    duration: 0.3,
    delay: index * 0.1, // stagger the delay for each word
    opacity: 1,
    y: 0,
    translateY: 0,
  });
});



