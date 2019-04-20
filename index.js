let worker = new Worker("./worker.js");

const calculate = () => {
  const num = 40;
  worker.postMessage(num);
};

worker.onmessage = event => {
  const num = event.data;
  console.log(num);
};

const move = () => {
  for (let i = 0; i < 3; i++) {
    const shuttleID = `shuttle${i + 1}`;
    let shuttle = document.getElementById(shuttleID);

    let position = 0;
    let id = setInterval(animate, 5);

    function animate() {
      if (position > window.innerWidth / 1.2) {
        // clearInterval(id);
        position = 0;
      } else {
        position++;
        shuttle.style.left = position + "px";
      }
    }
  }
};
