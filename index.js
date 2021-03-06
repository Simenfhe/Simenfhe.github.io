const nPadContainer = document.querySelector(".n-pad-container");
const nKnobContainer = document.querySelector(".n-s2-knob-container");
const nPadUpperChildren = document.querySelector(".n-pad-upper").children;
const nPadLowerChildren = document.querySelector(".n-pad-lower").children;
let timeBeforeAction = 0;

const nObserver = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log("N: Pad colors change..")
            for (let i = 0; i < 4; i++) { 
                let LowerTo = 4 + i;

                let waitAmount = 750;
                timeBeforeAction += waitAmount;
                let that = 2000 + waitAmount;
                let timeBeforeAction2 = timeBeforeAction + that;

                setTimeout(function(){
                    nPadUpperChildren.item(i).classList.toggle("n-pad-"+i+"-lit");
                }, timeBeforeAction);
                setTimeout(function(){
                    nPadLowerChildren.item(i).classList.toggle("n-pad-"+LowerTo+"-lit");
                },timeBeforeAction2);

            }
            nKnobContainer.classList.add("n-s2-knob-container-anim");
            nPadContainer.classList.add("n-pad-container-anim");
        }   
    });
});

nObserver.observe(nPadContainer);

const section = document.querySelector('#s_mario');

const options = {
    threshold:.9
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        console.log(entry.target)
        let sCheck = console.log(entry.isIntersecting)
        if(entry.isIntersecting){
            section.classList.toggle("s_animjs")
        }
})
} ,options);

observer.observe(section)

function resetAnimationSimen(){
    window.location.reload()
}


const dObject1 = document.querySelector(".d-cardBox");
const dObject2 = document.querySelector(".d-mobileCards");
const dObject3 = document.querySelector(".d-pcMacCards");

const dObserver1 = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            dObject1.classList.add("d-cardAnimation");
        }
    });
});

const dObserver2 = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            dObject2.classList.add("d-cardAnimation");
        }
    });
});

const dObserver3 = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            dObject3.classList.add("d-cardAnimation");
        }
    });
});

dObserver1.observe(dObject1);
dObserver2.observe(dObject2);
dObserver3.observe(dObject3);
