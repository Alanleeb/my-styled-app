import React from 'react'
import styled from 'styled-components'
import {
  Header,
  Button,
  Segment,
  Card,
  Icon,
  Grid,
} from 'semantic-ui-react'
import axios from 'axios'
import { HeaderText } from './commonStyles'

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, yellow, purple);
`

const Transparent = styled.div`
  background: transparent !important;
`

const StyledCard = styled(Card)`
  height: 200px;
`

const Truncated = styled.div`
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

class App extends React.Component {
  state = { repos: [] }

  componentDidMount() {
    //Normally get those repos
    //this.getRepos()
  }

  getRepos = () => {
    axios.get('https://api.github.com/users/alanleeb/repos?sort=created')
      .then( res => this.setState({ repos: res.data }) )
  }

  render() {
    return (
      <AppContainer>
        <Button onClick={this.getRepos}>Get Repos</Button>
        <HeaderText size="large">My Portfolio</HeaderText>
        <Segment as={Transparent}>
          <HeaderText>My Projects</HeaderText>
          <Grid>
            <Grid.Row>
              { this.state.repos.map( r =>
                  <Grid.Column key={r.id} width={4}>
                    <StyledCard>
                      <Card.Content>
                        <Card.Header>
                          <Truncated>
                            { r.full_name }
                          </Truncated>
                        </Card.Header>
                        <Card.Meta>
                          { r.description }
                        </Card.Meta>
                      </Card.Content>
                    </StyledCard>
                  </Grid.Column>
                )
              }
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment as={Transparent}>
          <HeaderText size="small">Contact</HeaderText>
        </Segment>
      </AppContainer>
    )
  }
}

export default App