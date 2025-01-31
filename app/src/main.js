import palettes from './palettes.json';
import './style.css';
import { cardPalette } from './dom-helpers';

console.log('test');

const paletteAssembly = (event) => {
  const information = {
    uuid: crypto.randomUUID(),
    title: event.target.name.value,
    colors: [
      event.target.colorsOne.value,
      event.target.colorsTwo.value,
      event.target.colorsThree.value,
    ],
    temperature: event.target.temperature.value,
  };
  console.log(event.target.name.value);
  return information;
};

const handleSubs = (e) => {
  e.preventDefault();

  cardPalette(paletteAssembly(e));
};

function main() {
  const submission = document.getElementById('form');
  submission.addEventListener('submit', handleSubs);
  Object.values(palettes).forEach((pale) => cardPalette(pale));
}
main();
