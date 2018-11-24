import * as ArtifactApi from 'node-artifact-api';

async function getSearchDeck() {
    let search_deck = [];
    //let temp_set = await ArtifactApi.getSet("00", false);
    let temp_set = require('./cardSet.json');
    addToDeck(search_deck, temp_set);
    //temp_set = await ArtifactApi.getSet("01", false);
    addToDeck(search_deck, temp_set);

    return search_deck;
}

function addToDeck(search_deck, temp_set) {
    let card_list = temp_set.card_set.card_list;

    for (var i = 0; i < card_list.length; i++) {
        let card = card_list[i];
        if (card.card_type != "Stronghold" && card.card_type != "Pathing") {
            var color = "";
            if (card.is_red) {
                color = "red";
            }
            else if (card.is_green) {
                color = "green";
            }
            else if (card.is_blue) {
                color = "blue";
            }
            else if (card.is_black) {
                color = "black";
            }

            var value = {
                id : card.card_id,
                color : color,
                type : card.card_type,
                name : card.card_name.english,
                text : card.card_text.english,
                image : card.large_image.default,
                mana : card.mana_cost,
                count : 1
            }
            search_deck[search_deck.length] = value;
        }
    }
}

export default { getSearchDeck };
