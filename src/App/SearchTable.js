import React from 'react'
import { Table, Icon, Popup, Image } from 'semantic-ui-react'
import Scrollbar from 'react-scrollbars-custom'

const SearchTable = (props) => (
    <Scrollbar style={ {width: '100%', height: '100%', minHeight: 300} } >
        <Table sortable singleLine >
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Color</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Mana</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body> {
                (props.cards.map((card , i) => (
                    <Popup trigger= {
                        <Table.Row key ={i} onClick={() => {
                            props.onSearchTableClick(card);
                        }}>
                        <Table.Cell> {
                            card.color != ""  ? <Icon circular color={card.color} name='users' />
                            : <Icon circular name='circle outline' />
                        }
                        </Table.Cell>
                        <Table.Cell>{card.name.padEnd('25')}</Table.Cell>
                        <Table.Cell>{card.type.padEnd('15')}</Table.Cell>
                        <Table.Cell>{card.mana}</Table.Cell>
                        </Table.Row>
                    } content={
                        <Image src={card.image} size='small' />
                    } />
                )))
                }
        </Table.Body>
        </Table>
    </Scrollbar>
)

export default SearchTable