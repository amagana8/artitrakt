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
    // localStorage.clear();
    let selected_deck = JSON.parse(localStorage.getItem("selected_deck"));
    let decks = JSON.parse(localStorage.getItem("decks"));

    
    console.log("sd: ", selected_deck);
    console.log("d: ", decks);

    if (selected_deck) {
      this.setState({ selected_deck });
    }

    if (decks) {
      this.setState({ decks });
    }
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
      let selected_deck = {
        id: this.state.decks.length,
        deck_name: value,
        wins: 0,
        losses: 0,
        cards: []
      };
      let decks = this.state.decks;
      decks.push(selected_deck);
      this.setState({
        decks,
        selected_deck
      });
      localStorage.selected_deck = JSON.stringify(selected_deck);
      localStorage.decks = JSON.stringify(decks);
      console.log("ls: ", decks);
    }

    e.target.deck_name.value = "";
  };

  deleteDeck = () => {
    var decks = this.state.decks;
    var idx = this.state.selected_deck.id;
    decks.splice(this.state.selected_deck.id, 1);
    for(var i = idx; i < decks.length; i++) {
      decks[i].id--;
    }
    var selected_deck = {};
    this.setState({ decks, selected_deck });
    localStorage.decks = JSON.stringify(decks);;
  };

  handleClickDeck = selected_deck => {
    this.setState({ selected_deck });
    localStorage.selected_deck = JSON.stringify(selected_deck);
  };

  onCardSelect = (selectedOption) => {
    this.setState({ selected_card : selectedOption.value});
  }

  addCardToDeck = () => {
    let selected_deck = this.state.selected_deck;
    let card = this.state.selected_card;

    if (card.hasOwnProperty("id")) {
      selected_deck.cards.push(card);
      this.setState({selected_deck});
      localStorage.selected_deck = JSON.stringify(selected_deck);
      localStorage.decks = JSON.stringify(this.state.decks);
    }
  }

  deleteCard = (idx) => {
    let selected_deck = this.state.selected_deck;
    selected_deck.cards.splice(idx, 1);
    this.setState({ selected_deck });
    localStorage.selected_deck = JSON.stringify(selected_deck);
    localStorage.decks = JSON.stringify(this.state.decks);
  }

  updateDeckWin = e => {
    e.preventDefault();
    const value = e.target.wins.value;

    if (!isNaN(value)) {
      let selected_deck = this.state.selected_deck;
      selected_deck.wins = value;
      this.setState({selected_deck});
      localStorage.selected_deck = JSON.stringify(selected_deck);
      localStorage.decks = JSON.stringify(this.state.decks);
    }
    e.target.wins.value = "";
  }

  updateDeckLoss = e => {
    e.preventDefault();
    const value = e.target.losses.value;

    if (!isNaN(value)) {
      let selected_deck = this.state.selected_deck;
      selected_deck.losses = value;
      this.setState({selected_deck});
      localStorage.selected_deck = JSON.stringify(selected_deck);
      localStorage.decks = JSON.stringify(this.state.decks);
    }
    e.target.losses.value = "";
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
              
              <RecordCounter decks = {this.state.decks} selected_deck = {this.state.selected_deck}
              updateDeckWin = {this.updateDeckWin} updateDeckLoss = {this.updateDeckLoss} />
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
