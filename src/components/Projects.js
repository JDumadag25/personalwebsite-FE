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
       <br></br>
       <br></br>
       <br></br>
       <Container>
        <p>
          Gainzlife <br></br>
        Lifestyle and Fitness tracker for everyone. This application will help keep your productivity and health at peak performance. Gainzlife will track
        your daily calories through a food log, Heartrate, Sleep patterns, Calories burned and steps. For productivity it tracks your daily habits, and weekly goals. Gainzlife
        was built using React calling to the Nutritionix API for food logging and the FitBit API for sleep patterns, heart rate, Calories burned and steps all synced from the
        Users personal FitBit device.
        </p>
      </Container>
      </div>
    )
  }
}
export default Projects
