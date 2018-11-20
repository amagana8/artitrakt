import React, { Component } from "react";
import Select from "react-select";
import SearchDeck from "./SearchDeck/SearchDeck.js";
import DeckShowcase from "./DeckShowcase.js"
import RecordCounter from "./RecordCounter.js"
import {
  Button,
  Divider,
  Grid,
  Icon,
  Input,
  Header,
  Message,
  Transition,
  Label
} from "semantic-ui-react";

/*
  selected_deck is the deck selected from the decks array. Starts with -1 as no decks are selected, but as you click on decks or make new decks, it changes.
  decks is an array of 'deck' (obviously). a deck object contains 'deck_name' and 'cards'.
  search_deck is a deck of all the cards in the game.
*/

class App extends Component {
  state = {
    selected_card: {},
    selected_deck: {},
    decks: [],
    search_deck: []
  };

  componentDidMount() {
    this.fetchCards();
  }

  fetchCards = async () => {
    try {
      var sd = await SearchDeck.getSearchDeck();
      this.setState({
        search_deck: sd
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    const value = e.target.deck_name.value;

    if (value) {
      let deck = {
        id: this.state.decks.length + 1,
        deck_name: value,
        cards: []
      };
      this.setState({
        decks: [...this.state.decks, deck],
        selected_deck: deck
      });
    }

    e.target.deck_name.value = "";
  };

  deleteDeck = () => {
    var decks = this.state.decks;
    for(var i = 0; i < decks.length; i++) {
      if (decks[i] === this.state.selected_deck) {
        decks.splice(i, 1);
        var selected_deck = {};
        this.setState({ decks, selected_deck });
        break;
      }
    }
  };

  handleClickDeck = selected_deck => {
    this.setState({ selected_deck });
  };

  onCardSelect = (selectedOption) => {
    this.setState({ selected_card : selectedOption.value});
  }

  addCardToDeck = () => {
    let selected_deck = this.state.selected_deck;
    let card = this.state.selected_card;

    if (card.hasOwnProperty("card_id")) {
      selected_deck.cards.push(card);
      this.setState({selected_deck});
    }
  }

  deleteCard = (idx) => {
    let selected_deck = this.state.selected_deck;
    selected_deck.cards.splice(idx, 1);
    this.setState({ selected_deck });
  }

  render() {
    const { selected_deck } = this.state;

    return (
      <div>
        <Grid container style={{ padding: "5em 0em" }}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1" dividing>
                ARTITRAKT
              </Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Message>
                <Header as="h1">Hello!</Header>
                <p>
                  Welcome to ARTITRAKT. Build Artifact decks and track how well
                  you compete with other players!
                  <br></br>
                  Created by amagana8 and ohjinsoo.
                </p>
                <Label.Group>
                  {this.state.decks.length === 0 ? (
                    <Label color="red">No Decks</Label>
                  ) : (
                    this.state.decks.map(deck => (
                      <Label
                        key={deck.id}
                        color={deck.id === selected_deck.id ? "green" : "blue"}
                        onClick={() => {
                          this.handleClickDeck(deck);
                        }}
                      >
                        {deck.deck_name} ( {deck.cards.length} cards )
                      </Label>
                    ))
                  )}
                </Label.Group>
              </Message>

              <form onSubmit={this.handleSubmit}>
                <Input placeholder="Deck Name" action>
                  <input id="deck_name" />
                  <Button color="blue">
                    Create a Deck
                    <Icon name="right arrow" />
                  </Button>
                </Input>
              </form>
              <Divider />

              <Transition
                visible={this.state.decks.length !== 0}
                animation="scale"
                duration={500}
              >
                <Select placeholder="Search for a Card..." options={this.state.search_deck} onChange={this.onCardSelect}/>
              </Transition>
              <br></br>
              <Transition
                visible={this.state.decks.length !== 0}
                animation="scale"
                duration={500}
              >
                <Button onClick={this.addCardToDeck}>
                  Add Card to Deck
                </Button>
              </Transition>
              <br></br>
              <Transition
                visible={this.state.decks.length !== 0}
                animation="scale"
                duration={500}
              >
                <RecordCounter/>
              </Transition>
              <Transition
                visible={this.state.decks.length !== 0}
                animation="scale"
                duration={500}
              >
            <DeckShowcase cards = {this.state.selected_deck.cards} deleteCard = {this.deleteCard} />
            </Transition>
            <Transition
              visible={this.state.decks.length !== 0}
              animation="scale"
              duration={500}
            >
              <Button color="red" onClick={this.deleteDeck}>
                DELETE THIS DECK
              </Button>
            </Transition>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    );
  }
}

export default App;
