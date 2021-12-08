export function renderSports(sportsData) {
    const p = document.createElement('p');

    p.textContent = sportsData;
    p.classList.add('sports');

    if (sportsData === 'basketball') {
        p.style.backgroundColor = 'orange';
    }

    if (sportsData === 'boxing') {
        p.style.backgroundColor = 'red';
    }

    if (sportsData === 'tennis') {
        p.style.transform = 'rotate(45deg)';
        p.style.backgroundColor = 'green';
    }
    return p;
}
