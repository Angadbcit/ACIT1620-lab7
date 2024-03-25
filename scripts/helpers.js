export function shuffle(list) {
    /**
     * Scramble the order of items in a list
     */
    const templist = list;

    let currentIndex = templist.length;
    let randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        const temp = templist[currentIndex];
        templist[currentIndex] = templist[randomIndex];
        templist[randomIndex] = temp; 
    }
    return templist;
}

export function getCard() {
    return getCardNode().alt;
    /**
     * Get answer card name
     */
}

export function getCardNode() {
    return document.querySelector('.answer img');
    /**
     * Get answer card image node
     */
}

export function getCheckbox() {
    return document.querySelector('#tries-checkbox');
    /**
     * Get checkbox node
     */
}

export function getContinueBtn() {
    return document.querySelector('#continue');
    /**
     * Get 'continue/try again' button node
     */
}

export function getNumberInput() {
    return document.querySelector('#num-tries');
    /**
     * Get number input node
     */
}

export function getOutput() {
    return document.querySelector('output');
    /**
     * Get output node
     */
}

export function getPanel() {
    return document.querySelector('main > div:last-child');
    /**
     * Get card selection panel node
     */
}

export function getTiles() {
    return document.querySelectorAll('.tiles input');
    /**
     * Get the card tiles
     */
}

export function getTries() {
    return getNumberInput().value;
    /**
     * Get the current value of tries
     */
}

export function getRestartBtn() {
    return document.querySelector('#restart');
    /**
     * Get 'restart' button node
     */
}

export function getShowBtn() {
    return document.querySelector('#show-btn');
    /**
     * Get 'show' button node
     */
}

export function setCard() {
    /**
     * Randomly choose a card and load it into
     * the answer image element.
     * Initially, hide the card from the player
     */
    const cards = [ 
        "2 of spades", 
        '3 of diamonds', 
        '6 of clubs', 
        '10 of hearts', 
        'ace of clubs', 
        'jack of hearts', 
        'jack of spades', 
        'king of diamonds', 
        'queen of spades'
    ];

    const dex = math.round(math.random() * 9)   //coulad also use math.floor to round
    const card = cards[dex];
    const path = card.split(' ').join('_');
    const cardNode = getCardNode();
    cardNode.src = `images/${path}.svg`;
    cardNode.alt = card;
    // hide the card
    cardNode.classList.toggle('hidden', true);
     // cancel the animation
    getCardNode().classList.toggle('fade', false);
}

export function showCard() {
    getCardNode().classList.toggle('hidden', false);
    getShowBtn().toggleAttribute('disabled', true)
    
    document.querySelector('.answer').classList.toggle('flip', true);
    getCardNode().classList.toggle('fade', true);
    /**
     * Show the answer card and disable the 'show' button
     */
    // animate the card

}

export function toggleInputState(e) {
    getNumberInput().toggleAttribute('disabled', !e.target.checked);
    /**
     * Toggle active state of the number input node
     * This depends on whether the checkbox is checked or note.
     * The information is available in the event object passed to the
     * function at call time.
     */
}

