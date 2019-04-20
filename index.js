const fibonacci = (num) => {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

const calculate = () => {
  const num = 40;
  console.log(fibonacci(num));
  return fibonacci(num);
}

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