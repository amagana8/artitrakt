import React from 'react'
import { Table, Icon, Popup, Image } from 'semantic-ui-react'
import Scrollbar from 'react-scrollbars-custom'

const DeckShowcase = (props) => (
    <Scrollbar style={ {width: '100%', height: '100%', minHeight: 300, minWidth: 600} } >
        <Table sortable singleLine>
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Color</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Mana</Table.HeaderCell>
            <Table.HeaderCell>Count</Table.HeaderCell>
            <Table.HeaderCell>DELETE</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body> {
                props && props.cards ? (props.cards.map((card , i) => (
                    <Popup trigger= {
                        <Table.Row key ={i}>
                            <Table.Cell> {
                                card.color != ""  ? <Icon circular color={card.color} name='users' />
                                : <Icon circular name='circle outline' />
                            }
                            </Table.Cell>
                            <Table.Cell>{card.name.padEnd('25')}</Table.Cell>
                            <Table.Cell>{card.type.padEnd('15')}</Table.Cell>
                            <Table.Cell>{card.mana}</Table.Cell>
                            <Table.Cell>{card.count}</Table.Cell>
                            <Table.Cell>
                                <Icon onClick={() => {
                                    props.deleteCard(i);
                                }} size="small" name='delete' />
                            </Table.Cell>
                        </Table.Row>
                    } content={
                        <Image src={card.image} size='small' />
                    } />
                ))) 
                : (false)
                }
        </Table.Body>
        </Table>
    </Scrollbar>
)

export default DeckShowcase