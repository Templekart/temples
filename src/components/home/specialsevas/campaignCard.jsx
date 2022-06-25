import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
class CampaignCard extends Component {
  state = {  
      campain1_Img: 'https://ik.imagekit.io/templekart/camp1_FtE2wFwmX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1653406730895'
    } 
    render() { 
        return (
            <>
                <Card style={{ width: '16rem' }}>
  <Card.Img variant="top" src={this.state.campain1_Img} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </>
        );
    }
}
 
export default CampaignCard;