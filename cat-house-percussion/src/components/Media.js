import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import { Row } from 'react-flexbox-grid';
import '../App.css'

class Media extends Component {

  render() {
    return (
      <div>
        <Row center='xs'>
          <h1>Check Out Our Cajones</h1>
        </Row>
        <Row center='xs'>
          <Carousel className="Cajones-pics">
            <Carousel.Item>
              <img className="images" width={900} height={500} src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/20375699_1445428622213831_6741714741730397326_n.jpg?_nc_cat=0&oh=85da1a57e5f1c663c77fd1d2be8b9846&oe=5BDF0DEF" />
              <Carousel.Caption>
                <h3>Cat House Percussion Cajone</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="images" width={900} height={500} src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/20476132_1445428468880513_5375022236302808177_n.jpg?_nc_cat=0&oh=df44fdfcfb0ce2a396e195ff43a94f69&oe=5BDAC499" />
            <Carousel.Caption>
            <h3>Cat House Percussion Cajone</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="images" width={900} height={500} src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/20479824_1445428548880505_4015277875968963110_n.jpg?_nc_cat=0&oh=e4002eb1941f182d1f411a59022f42f4&oe=5BE019DC" />
            <Carousel.Caption>
            <h3>Cat House Percussion Cajone</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row center='xs'>
          <h1>Behind The Scenes</h1>
        </Row>
        <Row center='xs'>
          <Carousel className="Cajones-pics">
            <Carousel.Item>
              <img className="images" width={900} height={500} src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/20375699_1445428622213831_6741714741730397326_n.jpg?_nc_cat=0&oh=85da1a57e5f1c663c77fd1d2be8b9846&oe=5BDF0DEF" />
              <Carousel.Caption>
                <h3>Cat House Percussion Cajone</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="images" width={900} height={500} src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/20476132_1445428468880513_5375022236302808177_n.jpg?_nc_cat=0&oh=df44fdfcfb0ce2a396e195ff43a94f69&oe=5BDAC499" />
            <Carousel.Caption>
            <h3>Cat House Percussion Cajone</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img className="images" width={900} height={500} src="https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/20479824_1445428548880505_4015277875968963110_n.jpg?_nc_cat=0&oh=e4002eb1941f182d1f411a59022f42f4&oe=5BE019DC" />
            <Carousel.Caption>
            <h3>Cat House Percussion Cajone</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </div>
    )
  }
}

export default Media;