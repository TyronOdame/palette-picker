const cardPalette = ({ uuid, title, colors, temperature }) => {
  const card = document.createElement('li');
  card.className = 'card';

  const name = document.createElement('h2');
  name.textContent = title;

  const temps = document.createElement('p');
  temps.textContent = temperature;

  const div = document.createElement('div');

  colors.forEach((color) => {
    const para = document.createElement('p');
    para.textContent = 'Text Example';
    para.style.backgroundColor = color;

    const copy = document.createElement('button');
    copy.setAttribute('data-hex', color);
    copy.textContent = `Copy ${color}`;

    copy.addEventListener('click', handleCopy);

    div.append(para, copy);
  });

  const dele = document.createElement('button');
  dele.textContent = 'Delete';

  dele.addEventListener('click', () => {
    card.remove();
  });

  card.append(name, div, temps, dele);
  document.getElementById('list').append(card);
};

const handleCopy = async (event) => {
  // Checks if clipboard is available
  if (!navigator.clipboard) return;
  // Tries to copy text to the clipboard
  try {
    const text = event.target.textContent;
    const colorProperties = [
      event.target.style.backgroundColor,
      event.target.style.color,
    ];
    const colorHex = `${event.target.dataset.hex}`;
    await navigator.clipboard.writeText(colorHex);
    event.target.textContent = `Copied Hex!`;
    event.target.style.backgroundColor = `#43AA8B`;
    event.target.style.color = `#FFFFFF`;
    setTimeout(() => {
      event.target.textContent = text;
      event.target.style.backgroundColor = colorProperties[0];
      event.target.style.color = colorProperties[1];
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};

export { cardPalette };
