console.log("effect running");

const snowflakeCount = 200;

// random functions
const randomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = (s, l) =>
  `hsl(${randomNumberBetween(200, 360)}, ${s}%, ${l}%)`;

// get root element
const root = document.querySelector(".wrapper");

// put snowflakes into DOM
for (let i = 0; i < snowflakeCount; i++) {
  const snowflake = document.createElement("div");
  root.append(snowflake);
  snowflake.classList.add("snowflake");
  snowflake.style.background = randomColor(80, 80);
}

// get all snowflakes
const snowflakes = document.querySelectorAll(".snowflake");
// initial position for each snowflake
snowflakes.forEach((snowflake) => {
  const randomTop = randomNumberBetween(-10, 110);
  const randomLeft = randomNumberBetween(-10, 110);
  snowflake.style.top = `${randomTop}vh`;
  snowflake.style.left = `${randomLeft}vw`;
});

// every n ms change top, left, background & width for each snowflake
function mixUp() {
  snowflakes.forEach((snowflake) => {
    const randomTop = randomNumberBetween(-10, 110);
    const randomLeft = randomNumberBetween(-10, 110);
    snowflake.style.top = `${randomTop}vh`;
    snowflake.style.left = `${randomLeft}vw`;
    snowflake.style.background = randomColor(80, 80);
    snowflake.style.setProperty("--width", `${randomNumberBetween(3, 8)}px`);
  });
}
setInterval(mixUp, 1000);
