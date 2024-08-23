import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomRectangleCard({text,title}) {
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Text>
         {title}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomRectangleCard;