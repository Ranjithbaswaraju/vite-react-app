
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  const { Latitude, Longitude, Area, Humidity, Temperature, Wind, image } = props;
  
  return (
    <Card style={{ width: '22rem', textAlign:'center'}}>
      <Card.Img variant="top" src={image} height={'250px'} /> {/* Use image URL directly */}
      <Card.Body>
        <Card.Text>{Latitude}</Card.Text>
        <Card.Text>{Longitude}</Card.Text>
        <Card.Text>{Area}</Card.Text>
        <Card.Text>{Humidity}</Card.Text>
        <Card.Text>{Temperature}</Card.Text>
        <Card.Text>{Wind}</Card.Text>

      
      </Card.Body>
    </Card>
  );
}

export default BasicExample;

