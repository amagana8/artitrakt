import * as ArtifactApi from 'node-artifact-api';

async function getSearchDeck() {
    let search_deck = [];
    let set_id = "0";
    let temp_set = await ArtifactApi.getSet(set_id, false);
    console.log("Hello look here");
    console.log(temp_set);

    while (typeof (temp_set = await ArtifactApi.getSet(set_id, false)) === 'object' && temp_set.hasOwnProperty('set_info')) {
        addToDeck(search_deck, temp_set);

        let integer = parseInt(set_id, 10);
        integer++;
        set_id = integer.toString(); 
        temp_set = {};  
    }

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
