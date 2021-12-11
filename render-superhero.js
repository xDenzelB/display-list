
export function renderSuperhero(heroData) {
    const heroDiv = document.createElement('div');
    const heroName = document.createElement('p');
    const heroLocation = document.createElement('p');
    const heroSuperpower = document.createElement('p');

    const alterEgoDiv = document.createElement('div');
    const alterName = document.createElement('p');
    const alterJob = document.createElement('p');

    heroDiv.classList.add('hero');
    alterEgoDiv.classList.add('alter');

    heroName.textContent = heroData.name;
    heroLocation.textContent = heroData.location;
    heroSuperpower.textContent = heroData.superpower;
    alterName.textContent = heroData.alterEgo.name;
    alterJob.textContent = heroData.alterEgo.job;

    

    alterEgoDiv.append(alterName, alterJob);

    heroDiv.append(heroName, heroLocation, heroSuperpower, alterEgoDiv);

    
    return heroDiv;
    
}

