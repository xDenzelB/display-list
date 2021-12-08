
export function renderSuperhero(heroData) {
    const div = document.createElement('div');
    const heroProfile = document.createElement('p');
    const alterEgoEl = document.createElement('p');

    heroProfile.classList.add('hero');
    alterEgoEl.classList.add('alter-ego');

    

    heroProfile.textContent = heroData.name;
    alterEgoEl.textContent = `Alter Ego: ${heroData.alterEgo}`;

    div.append(heroProfile, alterEgoEl);

    return div;
}

