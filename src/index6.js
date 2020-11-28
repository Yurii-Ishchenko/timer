import pokeCardTpl from './templates/card.hbs'
import API from './api-servise'
const refs = {
    cardContainer: document.querySelector('.js-card-container'),
    searchForm: document.querySelector('.js-search-form')
}
refs.searchForm.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const searchQuery = form.elements.query.value

API.fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset())
}




function renderPokemonCard(pokemon) {
        const markup = pokeCardTpl(pokemon)
        refs.cardContainer.innerHTML = markup
}
function onFetchError(error) {
    console.log('ERROR!!!!!!!')
}


