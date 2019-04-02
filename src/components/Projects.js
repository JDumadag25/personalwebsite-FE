import React from 'react'
import { Container } from 'semantic-ui-react'

class Projects extends React.Component{
  render(){
    return(
      <div>
        <Container>
         <p>
           PartyFy <br></br>
         21st century Jukebox. Using the Spotify API, I created an application that allows users to search for songs and request for the
         song to be added to the queue. Other party-goers can approve or veto a song. Built with a React frontend handling the calls to the API, and
         a Rails backend in charge of Authentication and vote counting. Implemented ActionCable websocket for a chat feature to provide a more social feel. 
         </p>
       </Container>
      </div>
    )
  }
}
export default Projects
