import React from 'react'
import { Container } from 'semantic-ui-react'
const src = '/images/wireframe/image-text.png'

class AboutMe extends React.Component{



  render(){
    return(
  <div>
    <Container>
     <p>
       JUSTIN DUMADAG <br></br>
     FULL STACK SOFTWARE DEVELOPER
     </p>
   </Container>
   <br></br>
   <br></br>
   <br></br>
   <Container>
     <p>
       Full stack web developer with a goal to contribute to something greater in this world. Found my calling
       in web development where I can use my creativity and problem solving skills to build applications that can
       help empower people. I have knowledge in Ruby on Rails, JavaScript, React and Redux. Now I'm looking for an opportunity to
       grown my skillset and work with passionate, dedicated people to create something amazing. 
     </p>
   </Container>
 </div>
    )
  }
}
export default AboutMe
