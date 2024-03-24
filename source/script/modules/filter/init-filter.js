const dataUrl = 'projects.json';
const activeClass = 'is-active';
const cardsContainer = document.querySelector('[data-project="parent"]');
const cardTemplate = document.querySelector('[data-template="project-card"]');

const getDataProductList = async () => {
    const response = await fetch(dataUrl);
    return await response.json();
}

const createProductCard = (data) => {
    const card = cardTemplate.content.cloneNode(true).querySelector('[data-template="element"]');
    const cardContent = card.querySelector('.product-card');
    const cardLabel = card.querySelector('.product-card__label');
    const cardHit = card.querySelector('.product-card__hit');
    const cardTitle = card.querySelector('.product-card__title');
    const cardImg = card.querySelector('.product-card__img');
    const cardLink = card.querySelector('.product-card__shadow-link');
    const cardDate = card.querySelector('.product-card__date');

    cardContent.classList.add(data.classes);
    cardLabel.textContent = data.label;
    if (!data.hit) {
        cardHit.remove();
    }
    cardTitle.textContent = data.title;
    cardImg.src = data.src;
    cardImg.width = data.width;
    cardImg.height = data.height;
    cardImg.alt = data.alt;
    cardLink.href = data.href;
    cardDate.textContent = data.date;

    return card;
}

const createProductList = (container, dataCards, createCard, activeClass) => {
    container.innerHTML = '';
    dataCards.forEach((item) => {
        container.append(createCard(item));
    });
    container.classList.add(activeClass);
}

const dataCards = await getDataProductList();
createProductList(cardsContainer, dataCards, createProductCard, activeClass);
