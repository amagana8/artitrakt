import React from 'react'
import { Grid, Input, Button, Transition} from 'semantic-ui-react'

const RecordCounter = (props) => (
    <Grid divided='vertically'>
        <Grid.Row columns={2}>
            <Grid.Column>
                <Transition
                visible={props.decks.length !== 0}
                animation="scale"
                duration={500}
                >
                <p><strong>
                    WINS:
                </strong></p>
                </Transition>
                    <Transition
                    visible={props.decks.length !== 0}
                    animation="scale"
                    duration={500}
                    >
                    <form onSubmit={props.updateDeckWin}>
                    <Input placeholder={props.selected_deck.wins} action>
                        <input id="wins" />
                        <Button color="green">
                            Update Wins
                        </Button>
                    </Input>
                    </form>
                    </Transition>
            </Grid.Column>
            <Grid.Column>
                <Transition
                visible={props.decks.length !== 0}
                animation="scale"
                duration={500}
                >
                <p><strong>
                    LOSSES:
                </strong></p>
                </Transition>
                <Transition
                    visible={props.decks.length !== 0}
                    animation="scale"
                    duration={500}
                    >
                    <form onSubmit={props.updateDeckLoss}>
                    <Input placeholder={props.selected_deck.losses} action>
                        <input id="losses" />
                        <Button color="red">
                            Update Losses
                        </Button>
                    </Input>
                    
                </form>
                </Transition>
            </Grid.Column>
            <Grid.Column>
                <Transition
                visible={props.decks.length !== 0}
                animation="scale"
                duration={500}
                >
                <p><strong>
                    DRAWS:
                </strong></p>
                </Transition>
                <Transition
                    visible={props.decks.length !== 0}
                    animation="scale"
                    duration={500}
                    >
                    <form onSubmit={props.updateDeckDraw}>
                    <Input placeholder={props.selected_deck.draws} action>
                        <input id="draws" />
                        <Button color="gray">
                            Update Draws
                        </Button>
                    </Input>
                </form>
                </Transition>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default RecordCounter