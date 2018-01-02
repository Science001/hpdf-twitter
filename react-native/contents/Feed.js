import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, List, Card, CardItem, Button, Icon, ListItem, Thumbnail, Left, Right, Body, Text} from 'native-base';

export default class Feed extends Component {
  render() {
   return (
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.horoscope.com/images-US/signs/profile-aries.png'}} />
                <Body style={{flex: 1, flexDirection: 'row'}}>
                  <Text>Ganesh Ramkumar </Text>
                  <Text note>@grk001 . 2m</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            <Left />
              <Image source={{uri: 'https://www.cleverfiles.com/howto/wp-content/uploads/2016/08/mini.jpg'}} style={{height: 200, width: 400}}/>
            </CardItem>
            <CardItem  style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button transparent vertical="false">
                  <Icon name="ios-text-outline" />
                </Button>
                <Text>2</Text>
                <Button transparent vertical="false">
                  <Icon name="ios-git-compare-outline" />
                </Button>
                <Text>2</Text>
                <Button transparent vertical="false">
                  <Icon name="ios-heart-outline" />
                </Button>
                <Text>4</Text>
                <Button transparent vertical="false">
                  <Icon name="ios-mail-outline" />
                </Button>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.horoscope.com/images-US/signs/profile-aries.png'}} />
                <Body style={{flex: 1, flexDirection: 'row'}}>
                  <Text>Ganesh Ramkumar </Text>
                  <Text note>@grk001 . 2m</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            <Left />
              <Image source={{uri: 'https://www.cleverfiles.com/howto/wp-content/uploads/2016/08/mini.jpg'}} style={{height: 200, width: 400}}/>
            </CardItem>
            <CardItem  style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button transparent vertical="false">
                  <Icon name="ios-text-outline" />
                </Button>
                <Text>2</Text>
                <Button transparent vertical="false">
                  <Icon name="ios-git-compare-outline" />
                </Button>
                <Text>2</Text>
                <Button transparent vertical="false">
                  <Icon name="ios-heart-outline" />
                </Button>
                <Text>4</Text>
                <Button transparent vertical="false">
                  <Icon name="ios-mail-outline" />
                </Button>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.horoscope.com/images-US/signs/profile-aries.png'}} />
                <Body style={{flex: 1, flexDirection: 'row'}}>
                  <Text>Ganesh Ramkumar </Text>
                  <Text note>@grk001 . 2m</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            <Left />
              <Image source={{uri: 'https://www.cleverfiles.com/howto/wp-content/uploads/2016/08/mini.jpg'}} style={{height: 200, width: 400}}/>
            </CardItem>
            <CardItem  style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button transparent vertical="false">
                  <Icon name="ios-text-outline" />
                </Button>
                <Text>2</Text>
                <Button transparent vertical="false">
                  <Icon name="ios-git-compare-outline" />
                </Button>
                <Text>2</Text>
                <Button transparent vertical="false">
                  <Icon name="ios-heart-outline" />
                </Button>
                <Text>4</Text>
                <Button transparent vertical="false">
                  <Icon name="ios-mail-outline" />
                </Button>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.horoscope.com/images-US/signs/profile-aries.png'}} />
                <Body style={{flex: 1, flexDirection: 'row'}}>
                  <Text>Ganesh Ramkumar </Text>
                  <Text note>@grk001 . 2m</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            <Left />
              <Image source={{uri: 'https://www.cleverfiles.com/howto/wp-content/uploads/2016/08/mini.jpg'}} style={{height: 200, width: 400}}/>
            </CardItem>
            <CardItem  style={{flex:1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Button transparent vertical="false">
                  <Icon name="ios-text-outline" />
                </Button>
                <Text>2</Text>
                <Button transparent vertical="false">
                  <Icon name="ios-git-compare-outline" />
                </Button>
                <Text>2</Text>
                <Button transparent vertical="false">
                  <Icon name="ios-heart-outline" />
                </Button>
                <Text>4</Text>
                <Button transparent vertical="false">
                  <Icon name="ios-mail-outline" />
                </Button>
            </CardItem>
          </Card>
        </Content>
   );
 }
}
