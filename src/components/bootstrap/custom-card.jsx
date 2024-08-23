import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomRectangleCard({text,title,imagesrc}) {
  return (
    <Card >
      <Card.Img variant="top" src={imagesrc} height={200} />
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