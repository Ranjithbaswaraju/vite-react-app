import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent({title,image,description,price,ranjith}) {
  return (
    <Card style={{ width: '300px',  height:"450px", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'center',textAlign:'center'}}>
        <Card.Title style={{height:"20px", display:'-webkit-box',WebkitBoxOrient:"vertical",overflow:'hidden',WebkitLineClamp:1}}>{title}</Card.Title>
      <Card.Img  src={image} style={{height:"200px", width:"250px", }}/>
      <Card.Body >
        
        <Card.Text style={{display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden", WebkitLineClamp: 4 }}>
        {description}
        </Card.Text>
        <Card.Title >{ranjith}</Card.Title>
        <Button >{price}</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;