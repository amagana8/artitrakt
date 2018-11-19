import React, { Component } from 'react';
import SearchDeck from './SearchDeck/SearchDeck.js'

class AutoComplete extends Component {
  state = {
    def_search_deck : [],
    search_deck : [],
    selected_card : null,
    filter : ""
  }

  componentDidMount() {
    this.fetchCards();
  }

  fetchCards = async () => {
    try {
      var sd = await SearchDeck.getSearchDeck();
      console.log('test', sd[0]);
      this.setState({
        def_search_deck : sd,
        search_deck : sd
      });
    }
    catch(err) {
      console.log('err', err)
    }
  }

  onChange = (e) => {
    const target = e.target.value;
    var search_deck = this.state.def_search_deck;
    search_deck = search_deck.filter(item => item.card_name.english.toLowerCase().includes(target.toLowerCase()));
    this.setState({
      search_deck : search_deck,
      selected_card : null,
      filter : target
    });
  }

  render() {
    const show_auto_complete = this.state.filter.length != 0;
    const search_deck = this.state.search_deck;
    return (
      <div className="autoComplete" style={{ width : '300px' }}>
        <input id="myInput" type="text" placeholder="Enter a Card Name." onChange={this.onChange}/>

      <ul className="dd-list">
      {search_deck.map((val, i) => (
         <li className="dd-list-item" key={i} > {val.card_name.english} </li> ))}
      </ul>
      </div>

    );
  }
}

export default AutoComplete;
