// http://websamuraj.pl/examples/js/projekt11/


const start = document.querySelector('.main');
const reset = document.querySelector('.reset');
const time = document.querySelector('.time div');

let Seconds = 0;
// let Milliseconds = new Date().getMilliseconds();

let anchor = true;
let id;

const stoperStart = () => {
    if(anchor === true){
        start.textContent = "Stop";
        console.log(start.textContent);
        anchor = false;
        id = setInterval(inter, 10);
    }else if (!anchor){
        start.textContent = "Start";
        console.log(start.textContent);
        anchor = true;
        clearInterval(id);
    }
    
}

let inter = () => {
    Seconds++;
    time.textContent = (Seconds / 100).toFixed(2);
};

const stoperReset = () =>{
    clearInterval(id);
    time.textContent = "---";
    anchor = true;
    Seconds = 0;
    start.textContent = "Start";
}

start.addEventListener('click', stoperStart);
reset.addEventListener('click', stoperReset);



// const stoper = () => {
        
//     const I1 = setInterval(() => {
//      Seconds++;
//         //  time.textContent = `${Seconds}.${Milliseconds}`
       
//     }, 1000);
    
//     const I2 = setInterval(() => {
//             Milliseconds++;
//                  // Milliseconds = Milliseconds > 99 ? Milliseconds === 0 : Milliseconds;
//                 // Milliseconds = Milliseconds < 10 ? Milliseconds + "0" : Milliseconds;
//                 if(Milliseconds > 100){
//                     Milliseconds = 0;
//                 } else if( Milliseconds < 10){
//                     Milliseconds += "0";
//                 }
//                 time.textContent = `${Seconds}.${Milliseconds}`
//                 // time.textContent = `${Seconds}.${Milliseconds}`
//                 }, 1);
//     start.textContent = "pauza";
    
//     resetStoper = () =>{
//         let Seconds = 0;
//         let Milliseconds = 0;
//         time.textContent = `---`;
//         clearInterval(I1);
//         clearInterval(I2);
//     }
    
//     reset.addEventListener('click', resetStoper);

//     stopStoper = () =>{
//         Seconds;
//         Milliseconds;
//         start.textContent = "start";
//     }
//     start.addEventListener('click', stopStoper )

// }

// start.addEventListener('click', stoper )

