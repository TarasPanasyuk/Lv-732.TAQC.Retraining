//task 1
function getPromise(message, delay) {
    return new promise((resolve,) => {
        setTimeout(function(){
            resolve(message);
        }, delay);
    });
}

getPromise("test promise", 2000).then(function (data) {
    comsole.log(data);
});

// task 2
const delay = (i, time) => new Promise((resolve) => setTimeout(() => resolve(i), time));

function showNumbers(){
    for (let i =0, p = Promise.resolve(0); i <= 10; i++) {
        const time = Math.floor(Math.random() * 3) * 1000;
        p = p.them(() =>
        delay(i, time).then((result) => {
            console.log(`result = ${result}, delay = ${time / 1000}sec`);
        })
    );
  }
}

showNumbers();