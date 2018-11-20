import React from 'react'
import { Grid, Input, Button } from 'semantic-ui-react'

const RecordCounter = () => (
    <Grid divided='vertically'>
        <Grid.Row columns={2}>
            <Grid.Column>
                <p><strong>
                    WINS:
                </strong></p>
                <form>
                    <Input placeholder="Update Wins" action>
                        <input id="wins" />
                        <Button color="green">
                            Update
                        </Button>
                    </Input>
                </form>
            </Grid.Column>
            <Grid.Column>
                <p><strong>
                    LOSSES:
                </strong></p>
                <form>
                    <Input placeholder="Update Losses" action>
                        <input id="losses" />
                        <Button color="red">
                            Update
                        </Button>
                    </Input>
                </form>
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default RecordCounter