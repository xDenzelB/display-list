export function renderTacoma(tacomaData) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const img = document.createElement('img');
    

    div.classList.add('tacoma');

    div.style.fontsize = `${tacomaData.age}rem`;

    div.style.backgroundColor = tacomaData.color;

    p.textContent = tacomaData.name;

    img.src = tacomaData.image_url;

    div.append(p, img);

    return div;
}