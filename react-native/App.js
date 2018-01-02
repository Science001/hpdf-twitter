import React, { Component } from 'react';
import { Container, Header, Tabs, Item, Input, Fab, Tab, Card, CardItem, Thumbnail, List, ListItem, StyleProvider, TabHeading, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Expo from "expo";
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import Feed from './contents/Feed';

class Main extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <StyleProvider style={getTheme(platform)}>
      <Container>
        <Header hasTabs>
          <Left>
          <Button transparent onPress= {() => this.props.navigation.navigate('DrawerOpen')}>
            <Icon style={{color:"#00aced"}} name="menu" />
          </Button>
          </Left>
          <Body>
            <Title style={{color: "#000000"}}>Home</Title>
          </Body>
          <Right />
        </Header>
        <Tabs initialPage={0} onChangeTab= {()=>this.props.navigation.navigate('Search')}>
          <Tab heading={<TabHeading><Icon name="home" /></TabHeading>}>
            <Content>
              <Feed />
            </Content>
          </Tab>
          <Tab heading={<TabHeading><Icon name="search" /></TabHeading>}>
            <Content>
              <Text>Search</Text>
            </Content>
          </Tab>
          <Tab heading={<TabHeading><Icon name="notifications" /></TabHeading>}>
            <Content>
              <Text>
                Notifications
              </Text>
            </Content>
          </Tab>
          <Tab heading={<TabHeading><Icon name="mail" /></TabHeading>}>
            <Content>
              <Text>
                Messages
              </Text>
            </Content>
          </Tab>
        </Tabs>
        <Fab
          style={{ backgroundColor: '#00aced' }}
          position="bottomRight"
        >
          <Icon name="add" />
        </Fab>
        </Container>
        </StyleProvider>
        /*
        <Footer>
          <FooterTab>
              <Button active vertical='false'>
                <Text>All</Text>
              </Button>
              <Button vertical='false'>
                <Text>Mentions</Text>
              </Button>
            <Right>
              <Button transparent>
                <Icon name="ios-settings-outline" style={{color: "#00aced"}} />
              </Button>
            </Right>
          </FooterTab>
        </Footer>*/
    );
  }
}

class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Card transparent>
            <CardItem>
                <Thumbnail source={{uri: 'https://www.horoscope.com/images-US/signs/profile-aries.png'}} />
            </CardItem>
            <CardItem style={{flex:1, flexDirection:'column'}}>
            <Body>
              <Text>Ganesh Ramkumar</Text>
              <Text note>@grk001</Text>
            </Body>
            </CardItem>
            <CardItem style={{flex:1, flexDirection:'row'}}>
              <Text>123</Text>
              <Text note> Following</Text>
              <Text>   204</Text>
              <Text note> Followers</Text>
            </CardItem>
            <CardItem>
              <List
                dataArray={[{name:"Profile", icon:'person'}, {name:"Lists", icon:'list-box'}, {name:"Moments", icon:'flash'}, {name:"Highlights", icon:'albums'}]}
                renderRow={data => {
                  return (
                    <ListItem noBorder
                      button
                      onPress={() => this.props.navigation.navigate(data)}>
                      <Icon name = {data.icon} />
                      <Text>     {data.name}</Text>
                    </ListItem>
                  );
                }}
              />
            </CardItem>
            <CardItem>
              <Text>Settings and Privacy</Text>
            </CardItem>
            <CardItem>
              <Text>Help Center</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

class Search extends React.Component {
  render() {
    return(
      <StyleProvider style={getTheme(platform)}>
      <Container>
        <Header searchBar rounded>
          <Item>
            <Button transparent onPress = {() => this.props.navigation.navigate('Main')}>
              <Icon name="arrow-back" style={{color: "#00aced"}}/>
            </Button>
            <Input placeholder="Search Twitter" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Body />
      </Container>
      </StyleProvider>
    )
  }
}

const App = StackNavigator({
  Home: {screen: Main},
});

const Draw = DrawerNavigator({
  Home: {screen: Main},
  Search: {screen: Search},
}, {
  contentComponent: props => <SideBar {...props}/>
});

export default class Twitter  extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fontLoaded: false };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({fontLoaded: true});
  }

  render() {
    if (!this.state.fontLoaded) {
      return <Expo.AppLoading />;
    }
    return <Draw/>
  }
}
