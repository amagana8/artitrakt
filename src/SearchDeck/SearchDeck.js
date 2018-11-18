import * as ArtifactApi from 'node-artifact-api';

function getSearchDeck() {
    let search_deck = [];
    let set_id = "0";
    let temp_set = getSet(set_id, false);

    while (temp_set typeof 'object' && temp_set.hasOwnProperty('set_info')) {
        addToDeck(search_deck, temp_set);

        let integer = parseInt(set_id, 10);
        integer++;
        set_id = integer.toString();
        temp_set = getSet(set_id, false);
    }

    return search_deck;
}

function addToDeck(search_deck, temp_set) {
    let card_list = temp_set.card_list;

    for (var i = 0; i < card_list.length; i++) {
        search_deck[search_deck.length] = card_list[i];
    }
}

function filterSearch(search_deck, filter) {
    let new_deck = [];
    for (var i = 0; i < search_deck; i++) {
        if (search_deck[i].card_name.english.includes(filter)) {
            new_deck[new_deck.length] = search_deck[i];
        }
    }

    return new_deck;
}
