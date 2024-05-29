import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ProductCart.css"
function ProductCart(props) {
    // console.log(props.title);
  return (
    <>
    {/* <div className='container'> */}
    <Card style={{ width: '15rem',height:"28rem",pading:'10px',margin:'10px'}}>
      <Card.Img variant="top" src={props.image}

/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>bulk of the card's content.</Card.Text>
        <h4>${props.price}</h4>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default ProductCart;