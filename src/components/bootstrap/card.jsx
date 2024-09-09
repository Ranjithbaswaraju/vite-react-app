import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Component1(props) {
    const {title,image,text,category1,price} =props;
  return (
    <Card style={{ width: '22rem' ,textAlign:'center'}}>
      
      <Card.Body>
        <Card.Title  style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height:'50px',
           
        }}>{title}</Card.Title>
        <Card.Img variant="top" src={image} height={'200'} width={'200'}/>
        <Card.Text style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height:'50px',
             
        }}>{text}</Card.Text>
        <Card.Text style={{fontWeight:'bold'}}>{category1}</Card.Text>
        <Card.Text >{`price:${price}`}</Card.Text>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Component1;