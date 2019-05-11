// import React from 'react'
// import AboutMe from './AboutMe'
// import Projects from './Projects'
// import Contact from './Contact'
// import { Button } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'
// import scrollIntoView from 'scroll-into-view-if-needed'
//
// class Homepage extends React.Component{
//
//   render(){
//     return(
//       <div>
//         <div className='welcome'>
//           <h1>JUSTIN DUMADAG</h1>
//           <h3>Software Developer</h3>
//           <Button as={Link} to='/aboutme'>ABOUT ME</Button><Button as={Link} to='/contact'>CONTACT</Button>
//         </div>
//         <AboutMe/>
//         <Projects/>
//         <Contact/>
//       </div>
//     )
//   }
// }
// export default Homepage


import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Form
} from 'semantic-ui-react'
import PartyFy from '../images/Partyfy.png'
import GainzLife from '../images/Gainzlife.png'
import Trek from '../images/Trek.png'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='JUSTIN DUMADAG'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Software Developer.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}


class DesktopContainer extends Component {

  state = {}



  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  topofpage = () => {
    console.log('top');
    let top = document.getElementById('topofpage')
    top.scrollIntoView({behavior: "smooth", block: "start", inline: "end"})
  }

  aboutme = () => {
    let aboutmeelement = document.getElementById('aboutme')
    aboutmeelement.scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
    console.log('click');
  }

  showProjects = () => {
    let projectelement = document.getElementById('projects')
    projectelement.scrollIntoView({behavior: "smooth", block: "start", inline: "end"})
  }

  showContact = () => {
    let contactelement = document.getElementById('contact')
    contactelement.scrollIntoView({behavior: "smooth", block: "start", inline: "end"})
  }


  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
            id='topofpage'
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active onClick={this.topofpage}>
                  Home
                </Menu.Item>
                <Menu.Item as='a' onClick={this.aboutme}>About Me</Menu.Item>
                <Menu.Item as='a' onClick={this.showProjects}>Projects</Menu.Item>
                <Menu.Item as='a' onClick={this.showContact}>Contact</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Resume
                  </Button>
                  <Button as='a'  inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }} href={"http://github.com/jdumadag25"} target="_blank">
                    GitHub
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Work</Menu.Item>
          <Menu.Item as='a'>Company</Menu.Item>
          <Menu.Item as='a'>Careers</Menu.Item>
          <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                    Log in
                  </Button>
                  <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '7em 0em' }} vertical id='aboutme'>
      <Grid container stackable verticalAlign='middle' >
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              About Me
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Full Stack Software Developer, based in New York City. Began my Engineering Journey self-teaching through various online courses and
              enrolling to the Flatiron Coding bootcamp where I honed my skills. I am experienced in both front and back-end development. I am
              proficient in JavaScript, React/Redux, Ruby on Rails, HTML, CSS and SQL. I am confident in my abilites to develop an effective product. I am now looking for an opportunity to continue to grow my
              Software Development career and work with smart, passionate and dedicated people.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/wireframe/white-image.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical id='projects'>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }} textAlign='center'>
          Current Projects:
        </Header>
        <p style={{ fontSize: '1.33em' }}>
    Currently working on Udemy's course: Mastering the Coding Interview: Data Structures & Algorithms to help solidify my understanding of
    Algorithmic Paradigms
        </p>

      </Container>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              PartyFy
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Using the Spotify API, I created an application that allows users to search for songs and request for the
              song to be added to the queue. Other party-goers can approve or veto a song. Built with a React frontend, handling the calls to the API, and
              a Rails backend in charge of Authentication and vote counting. Implemented ActionCable websocket for a chat feature to provide a more social feel.
            </p>
            <a href='https://github.com/JDumadag25/Partify-frontend'>GitHub</a> / <a href='https://youtu.be/ZXYmRIIfzhQ'>Video Demo</a>
          </Grid.Column>
          <Grid.Column>
            <Image src={PartyFy}  size='large' centered={true}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              GainzLife
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Lifestyle and Fitness tracker for everyone. This application will help keep your productivity and health at peak performance. Gainzlife will track
              your daily calories through a food log, Heartrate, Sleep patterns, Calories burned and steps. For productivity it tracks your daily habits, and weekly goals. Gainzlife
              was built using React calling to the Nutritionix API for food logging and the FitBit API for sleep patterns, heart rate, Calories burned and steps all synced from the
              Users personal FitBit device.
            </p>
            <a href='https://github.com/JDumadag25/gainzlyfe'>GitHub</a> / <a href="https://youtu.be/n4DJT_cemRQ">Video Demo</a>
          </Grid.Column>
          <Grid.Column>
              <Image src={GainzLife} size='large' centered={true}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Trek
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Messaging App without language barriers. One of my earliest projects to be completed. Trek is a messaging platform that breaks the language barrier. Users sign up choosing their perferred language and can
              message other users within the application. The message is then translated to the recipients language of choice and vice-versa. Trek is built completely on Ruby on Rails
              and the translating is done with Google's tranlate API.
            </p>
            <a href='https://github.com/JDumadag25/universal-translator-app-'>GitHub</a> / <a href='https://youtu.be/lHwy91gsoqw'>Video Demo</a>
          </Grid.Column>
          <Grid.Column>
              <Image src={Trek} size='large' centered={true}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical id='contact'>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }} textAlign='center'>
          Get in Contact!
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
          <Form.Input fluid label='Email' placeholder='Email' />
        </Form.Group>

        <Form.TextArea label='Message' placeholder='Message' />

        <Form.Button>Submit</Form.Button>
      </Form>
        </p>
      <div>
        <Button color='github'>
          <Icon name='github' /> GitHub
        </Button>
        <Button color='linkedin'>
          <Icon name='linkedin' /> LinkedIn
        </Button>
        <Button color='medium'>
          <Icon name='medium' /> Medium
        </Button>
      </div>

      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='LINKS' />
              <List link inverted>
                <List.Item as='a'>LinkedIn</List.Item>
                <List.Item as='a'>GitHub</List.Item>
                <List.Item as='a'>Medium</List.Item>
                <List.Item as='a'>Email</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={7}>
              <Header as='h4' inverted>
                CONTACT ME
              </Header>
              <p>
                Justin.Dumadag@gmail.com
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout
