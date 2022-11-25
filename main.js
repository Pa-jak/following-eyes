const wrapper = document.querySelector('.wrapper')
const eyeSize = Number.parseInt(getComputedStyle(document.querySelector(':root')).getPropertyValue('--eye-size'));
const eyeMargin = Number.parseInt(getComputedStyle(document.querySelector(':root')).getPropertyValue('--eye-margin'));



const eye = `
<div class="eye">
    <div class="eye__ball">
        <div class="eye__iris"></div>
    </div>
    
</div>
`

function gridRender() {
    const wrapWidth = Number.parseInt(getComputedStyle(document.querySelector('.wrapper')).width ); 
    const wrapHeight =Number.parseInt(getComputedStyle(document.querySelector('.wrapper')).height ); 

    let columns = Number.parseInt(wrapWidth / (eyeSize + 2 * eyeMargin))
    let rows = Number.parseInt(wrapHeight / (eyeSize + (2 * eyeMargin)))

    let eyeCount = columns * rows 

    wrapper.innerHTML = eye.repeat(eyeCount)

    console.log(columns, rows, eyeCount)
}
gridRender()
window.addEventListener('resize', gridRender)

const eyes = document.querySelectorAll('.eye__ball');
const irises = document.querySelectorAll('.eye__iris')


function mouseInMove (e) {

    let mouseX = e.clientX;
    let mouseY = e.clientY;
    eyes.forEach(eye => {
        const {x, y} = eye.getBoundingClientRect()
        
        let XForThisEye = x + (eyeSize / 2);
        let YForThisEye = y + (eyeSize / 2);

        let X0 = XForThisEye - mouseX;
        let Y0 = YForThisEye - mouseY;
        let deg = Math.atan2(-X0,Y0) * 180 / Math.PI
        eye.style.transform = "rotate(" + deg + "deg)";

    })
}

window.addEventListener('mousemove', mouseInMove)

window.onresize = () => location.reload(); 

