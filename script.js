const introBtn = document.querySelector('#introBtn')
const skillsBtn = document.querySelector('#skillsBtn')
const projectsBtn = document.querySelector('#projectsBtn')
const contactBtn = document.querySelector('#contactBtn')
const cutterWelcome = document.querySelector('#cutterWelcome')
const cutterAbout = document.querySelector('#cutterAbout')
const cutterSkills = document.querySelector('#cutterSkills')
const cutterProjects = document.querySelector('#cutterProjects')
const cutterContact = document.querySelector('#cutterContact')

let colors = ["white","#FB2576", "#00D7FF","#F2FA5A","#00FFDD","#FF008E","#93FFD8","#49FF00","#FF0000","#FF00E4","#F9B208","#F9F871","#FF005C","#D2E603","#05DFD7","#DC2ADE"];
let currentIndex = 0;

function changeColor() {
  let paragraph = document.getElementById("myParagraph");
  if (paragraph) {
    paragraph.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
  }
}

setInterval(changeColor, 1000);

cutterWelcome.addEventListener('click', welcome)
function welcome(){
  gsap.to(window, {duration: 2, scrollTo: {y: "#intro", offsetY: 0}});
}

cutterAbout.addEventListener('click',intro)
cutterSkills.addEventListener('click',skills)
cutterProjects.addEventListener('click',projects)
cutterContact.addEventListener('click',contact)

introBtn.addEventListener('click', intro)

function intro(){
  gsap.to(window, {duration: 2, scrollTo: {y: "#about", offsetY: 0}});
  gsap.from(".hero-pic",{
    opacity:0, delay:1, duration:2,
  })
  gsap.from(".parTwo",{
    opacity:0, delay:2,duration:2,
  })
  gsap.from(".parThree",{
    opacity:0, delay:3,duration:2,
  })
}

skillsBtn.addEventListener('click',skills)

function skills(){
  gsap.to(window, {duration: 2, scrollTo: {y: "#skills", offsetY: 0}});
  gsap.from("#tick",{
    opacity:0, stagger:0.5, delay:1,
  })
  gsap.from("#text",{
    opacity:0,duration:0.5,stagger:0.5,delay:0.5,
  })
  gsap.from("#icon",{
    opacity:0,delay:3,scale:3, duration: 1, rotation: 180,
  })
}

projectsBtn.addEventListener('click',projects)

function projects(){
  gsap.to(window, {duration: 2, scrollTo: {y: "#projects", offsetY: 0}});
  const adjectives = ['responsive.','modern.','fast.','intuitive.','dynamic.'];
  const cursor = gsap.to('.cursor',{opacity: 0,ease: 'power2.inOut',repeat: -1});
  const masterT1 = gsap.timeline({repeat: -1}).pause();
  const boxT1 = gsap.timeline();
  boxT1.to('.box',{duration: 1,width: '17vw',delay: 0.5,ease: "power4.inOut"})
        .from('.hi',{duration: 1,y: '7vw',ease: 'power3.out'})
        .to('.box',{duration: 1,height: '7vw',ease: 'elastic.out',onComplete: () => masterT1.play()})
        .to('.box',{duration: 2,autoAlpha: 0.7,yoyo: true,repeat: -1,ease: "rough({template: none.out,strength: 1,points: 20,taper: 'none',randomize: true,clamp: false})"});
        adjectives.forEach(word => {
        let t1 = gsap.timeline({repeat: 1,yoyo: true,repeatDelay: 1.5});
        t1.to('.text',{duration: 2,text: word});
        masterT1.add(t1);
  });
  gsap.from(".portfolio-item",{
    opacity:0, stagger:0.8,duration:1.8,ease: "power4.out",
  })
}

contactBtn.addEventListener('click',contact)
function contact(){
  gsap.to(window, {duration: 2, scrollTo: {y: "#contact", offsetY: 0}});
  const words = ['special','fresh','useful','new','awesome'];
  const cursor = gsap.to('.cursor1',{opacity: 0,ease: 'power2.inOut',repeat: -1});
  const masterT1 = gsap.timeline({repeat: 1}).pause();
  const boxT1 = gsap.timeline();
  boxT1.to('.box1',{duration: 1,width: '17vw',delay: 0.5,ease: "power4.inOut"})
        .from('.hi1',{duration: 1,y: '7vw',ease: 'power3.out'})
        .to('.box1',{duration: 1,height: '7vw',ease: 'elastic.out',onComplete: () => masterT1.play()})
        .to('.box1',{duration: 2,autoAlpha: 0.7,yoyo: true,repeat: 1,ease: "rough({template: none.out,strength: 1,points: 20,taper: 'none',randomize: true,clamp: false})"});
        words.forEach(word => {
        let t1 = gsap.timeline({repeat: 1,yoyo: true,repeatDelay: 1.5});
        t1.to('.text1',{duration: 1,text: word});
        masterT1.add(t1);
  });

  gsap.from(".par",{
    opacity:0, delay:1,duration:2,
  })
  gsap.from("form",{
      opacity:0, delay:2,duration:2,
    })
    gsap.from(".subheader",{
      opacity:0, duration:2, delay:3,
    })
    gsap.from(".fa",{
      opacity:0,ease: "bounce.out", y: -50,x:50,duration:1.5,stagger:0.5,delay:3.5,
    })
}

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#917FB3"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#917FB3"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 0,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#917FB3",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  

