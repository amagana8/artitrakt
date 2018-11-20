import React from 'react'
import { Image, List } from 'semantic-ui-react'

const DeckShowcase = (props) => (
    <List divided horizontal size="massive">
    <List.Item></List.Item>
    <br></br>
        {props.cards.map((card) => (
            <List.Item key={card.card_id}>
              <Image avatar src={card.mini_image.default} />
              <List.Content>
                <List.Header> {card.card_name.english} </List.Header>
              </List.Content>
            </List.Item>
        ))}
    </List>
)

export default DeckShowcase