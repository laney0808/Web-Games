let yourCard = 0;


function drawCard() {
    const card = document.getElementById('card');
    yourCard = Math.floor(Math.random()*9)+1;
    card.innerHTML = `${yourCard}`;
    return;
}

