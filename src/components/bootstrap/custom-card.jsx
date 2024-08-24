import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import InstagramHert from '../heart/instagram-heart';
function CustomRectangleCard({title,text,removeHandler,ind}) {
  return (
    <Card >
      
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {text}
        </Card.Text>
      
        <div>
          <InstagramHert/>
        </div>
       
        <Button variant="primary" onClick={()=>removeHandler(ind)}>Click here to Remove Card</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomRectangleCard;