const red = "background-color: #ff3800;";

const purple =
  "font-family: 'Dancing Script', cursive, sans-serif, serif; background: `#7f00ff`; background: -webkit-linear-gradient(to left, #e100ff, #7f00ff); background: linear-gradient(to left, #e100ff, #7f00ff);";

const react = "font-family: sans-serif; background-color: #20232a;";

const themes = [red, react, purple];

function randomizer(arr) {
  const length = arr.length;
  const num = Math.floor(Math.random() * Math.floor(length));
  return arr[num];
}

export function theme(option) {
  return option && typeof option === "number" && option < themes.length
    ? themes[option]
    : randomizer(themes);
}
