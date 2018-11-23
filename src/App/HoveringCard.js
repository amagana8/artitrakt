import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const HoveringCard = (props) => (
    <Grid columns='two' divided>
        <Grid.Row>
        <Grid.Column>
            <Image src={props.card.image} size='small' />
        </Grid.Column>
        <Grid.Column>
            <p> test </p>
        </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default HoveringCard;