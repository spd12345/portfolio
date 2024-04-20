const scroll = new LocomotiveScroll({
    el: document.querySelector('#hero'),
    smooth: true
});
function cirMousefollower(xscale, yscale){
    window.addEventListener("mousemove", function(dets){
       
        document.querySelector("#mincircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })

}
function firstPageAnim(){
    var tl=gsap.timeline();
    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
    })
    .to(".boundingel",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2

    })
    .from("#mainFooter",{
        y: -10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut
    })
}

//global var
var timeout;

function circleChepa(){
    var xscale = 1;
    var yscale = 1;

    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove",function(dets){

        clearTimeout(timeout);


        var xdiff=dets.clientX-xprev;
        var ydiff=dets.clientY-yprev;
        xscale = gsap.utils.clamp(0.8,1.2, xdiff);
        yscale = gsap.utils.clamp(0.8,1.2, ydiff);

        xprev=dets.clientX;
        yprev=dets.clientY;

        cirMousefollower(xscale, yscale);//call cirMousefollower
        //---------------------------------------------------------------------------
        timeout = setTimeout(function(){
            document.querySelector("#mincircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;  
        }, 100);
        
    });
}


document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var difrot=0;
    
    elem.addEventListener("mousemove", function(dets){
       var diff = dets.clientY - elem.getBoundingClientRect().top;       
       console.log(diff);
       difrot = dets.clientX-rotate;
       rotate = dets.clientX;
       if(diff>=5 && diff<=220){
       gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, difrot*0.8),

        });
    }
    else{
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            
            

        });

    }
    });
});

circleChepa();
cirMousefollower();
firstPageAnim();