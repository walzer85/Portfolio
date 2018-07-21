import React, { Component } from 'react';
import { footer } from 'react-bootstrap';
import { Row, Col } from 'react-flexbox-grid';
import '../App.css'

class Footer extends Component {
  render() {
    return(
      <div className='Footer'>
        <Row middle='xs'>
          <Col xs>
            <h4>Created by Eric Walz for his portfolio, 2018.</h4>
          </Col>
          <Col xs>
            <h4>See his resume at ADD LINK HERE.</h4>
          </Col>
        </Row>
        <Row>
          <Col xs>
            <h4><a href='mailto:walzer85@gmail.com?' target='_top'>Contact Eric</a></h4>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Footer;