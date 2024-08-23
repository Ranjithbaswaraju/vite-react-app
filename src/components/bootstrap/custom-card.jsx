import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomDNALoader from '../Loader/loader';
import InfinitySpin from '../Loader/infinite-loader';
import ToastContainer from "../toasts/toasts"
import InstagramHert from '../heart/instagram-heart';
function CustomRectangleCard({text,title}) {
  return (
    <Card >
      {/* <Card.Img variant="top" src={imagesrc} height={200} /> */}
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Text>
         {title}
        </Card.Text>
        <div>
          <InfinitySpin color={"red"}/>
        </div>
        <div>
          <CustomDNALoader height={"100"} width={"100"} visible={true}/>
          <InstagramHert/>
        </div>
        <div>
          <ToastContainer message={"i am card bro"}/>
        </div>
        <Button variant="primary" >Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomRectangleCard;