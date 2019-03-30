import React from 'react'
import { Container } from 'semantic-ui-react'
const src = '/images/wireframe/image-text.png'

class AboutMe extends React.Component{



  render(){
    return(
  <div>
    <Container>
     <p>
       JUSTIN DUMADAG this is my story

     </p>
   </Container>
   <br></br>
   <br></br>
   <br></br>
   <Container>
     <p>
       Based in New York 
     </p>
   </Container>
 </div>
    )
  }
}
export default AboutMe
