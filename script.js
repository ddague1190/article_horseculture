



// Draw the flower functionality

//credit: http://phrogz.net/svg/progressively-drawing-svg-path-via-dasharray.html

const distancePerPoint = 1;
const drawFPS = 60;

var orig = document.querySelector('.flower1'), length, timer;
orig.addEventListener('mouseenter', startDrawingPath);
orig.addEventListener('mouseout', stopDrawingPath);

function startDrawingPath() {
    length = 0;
    orig.style.stroke = '#CD5C5C';
    timer = setInterval(increaseLength, 1000/drawFPS);
}

function increaseLength() {
    let pathLength = orig.getTotalLength();
    length += distancePerPoint;
    orig.style.strokeDasharray = [length,pathLength].join(',');
    console.log(orig.style.strokeDasharray);
    if (length >= pathLength) clearInterval(timer);
   
}


function stopDrawingPath() {
        clearInterval(timer);
        orig.style.stroke = '';
        orig.style.strokeDasharray = '' 
}

// Minimize header title on scroll functionality


const title = document.querySelector(".header__text");

document.addEventListener("scroll", event => {
    console.log('hi');
    let opacity = (300 - window.scrollY) / 300;

    document.documentElement.style.setProperty('--headerOpacity', opacity);
    // document.documentElement.style.setProperty('--headerScale', scale);

    if(window.scrollY > 200) {

       (function() {
            length = 0;
            orig.style.stroke = '#CD5C5C';
            timer = setInterval(increaseLength, 1000/drawFPS);
        })();

            }



    
    
        
    
});