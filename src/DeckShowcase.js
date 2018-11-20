import React from 'react'
import { Image, List, Icon } from 'semantic-ui-react'

const DeckShowcase = (props) => {
    return(
    <List divided horizontal size="massive">
    <List.Item></List.Item>
    <br></br>
        {props && props.cards ? (props.cards.map((card , i) => (
            <List.Item key={i}>
              <Image avatar src={card.mini_image} />
              <List.Content>
                <List.Header>
                    {card.name}
                    <Icon onClick={() => {
                        props.deleteCard(i);
                    }} size="small" name='delete' />
                </List.Header>
              </List.Content>
            </List.Item>
        ))) : (false)}
    </List>)
}

export default DeckShowcase