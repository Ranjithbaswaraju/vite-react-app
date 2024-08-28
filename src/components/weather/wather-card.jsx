
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  const { title ,image,description,onClick} = props;
  
  return (
    <Card style={{ width: '22rem', textAlign:'center'}} onClick={onClick}>
      
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image} height={'250px'} />
        <Card.Text>{description}</Card.Text>
        {/* <Card.Text>{Area}</Card.Text>
        <Card.Text>{Humidity}</Card.Text>
        <Card.Text>{Temperature}</Card.Text>
        <Card.Text>{Wind}</Card.Text> */}

<button >see more</button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;

