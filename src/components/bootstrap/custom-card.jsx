import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import InstagramHert from '../heart/instagram-heart';
function CustomRectangleCard({title,text,roles,removeHandler,ind}) {
  return (
    <Card style={{ textAlign: "center" }}>
      
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {text}
         <div>
         {roles}
         </div>
         
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