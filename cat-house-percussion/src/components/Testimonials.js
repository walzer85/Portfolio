import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import '../App.css';

class Cajon extends Component {
  render(){ 
    return (
      <div>
        <h1 className='Home-header'>Who uses Cat House Percussion</h1>
        <div className='Home-body'>
          <p>Lorem ipsum dolor amet pug brooklyn jean shorts hoodie mixtape, banjo hashtag. Fixie offal green juice kinfolk, microdosing four dollar toast irony trust fund blue bottle tumblr franzen cardigan. Shoreditch jianbing celiac, ugh selfies distillery iPhone enamel pin before they sold out. Hella direct trade street art bicycle rights, flexitarian intelligentsia lo-fi drinking vinegar quinoa 3 wolf moon meditation portland air plant. Normcore snackwave iceland master cleanse polaroid +1 vexillologist.</p>
          <Row>
            <Col xsOffset={7} xs={5}>
              <p>-Some Musician</p>
            </Col>
          </Row>
        </div>
        <div className='Home-body'>
          <p>Pinterest unicorn tilde, ethical drinking vinegar slow-carb kinfolk gochujang taiyaki ramps celiac cold-pressed. Woke portland farm-to-table celiac. Fanny pack chicharrones sustainable butcher twee pitchfork snackwave 3 wolf moon seitan selfies blue bottle yr occupy. La croix pug paleo jianbing. Cold-pressed bushwick vape gastropub try-hard hella ethical street art gochujang shaman roof party next level wayfarers live-edge. Echo park brooklyn jianbing green juice.</p>
          <Row>
            <Col xsOffset={7} xs={5}>
              <p>-Some Musician</p>
            </Col>
          </Row>
        </div>
        <div className='Home-body'>
          <p>I'm gonna sing my song and you won't take long. Hey Jude, don't let me down. Over men and horses hoops and garters. And don't you know that it's just you. (1409607566242). Hey Jude, don't make it bad. I got everything that you want. For well you know that it's a fool. Better, better, better, better, (I'm begging you) better. Take a sad song. Na na na naa-naa. Remember to let her under your skin (got the wrong chord!). In this way Mr. K. will challenge the world!. The Hendersons will all be there. (1409607566242)</p>
          <Row>
            <Col xsOffset={7} xs={5}>
              <p classname='Musician-name'>-Some Musician</p>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Cajon;