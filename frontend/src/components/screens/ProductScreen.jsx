import { useParams } from 'react-router-dom'
import{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Row,Col,Image,ListGroup,Card,Button, ListGroupItem} from 'react-bootstrap';
import React from 'react'
import axios from 'axios';

const ProductScreen = () => {
    const [product, setProduct] = useState({});
    const{id:productId} = useParams();
    useEffect(()=>{
      const fetchProduct = async () =>{
        const {data} = await axios.get(`/api/products/${productId}`);
         setProduct(data);
    }
    fetchProduct();
    },[productId]);
  return (<>
  <Link className='btn btn-light my-3' to='/'> Go Back 
  </Link>
  <Row>
    <Col md={5}>
     <Image src={product.image} alt={product.name} fluid/>
    </Col>
    <Col md={4}>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <h3>{product.name}</h3>
           
            </ListGroup.Item>
            <ListGroup.Item>
                Price:${product.price}
            </ListGroup.Item>
            <ListGroup.Item>Description:{product.description}</ListGroup.Item>
        </ListGroup>
        
    </Col>
    <Col md={3}>
        <Card>
            <ListGroup variant='flush'>
             <ListGroup.Item>
                <Row>
                <Col>Price:</Col>
                <Col>
                <strong>${product.price}</strong>
                </Col>
                </Row>
             </ListGroup.Item>
              <Button 
              className='btn-block'
              type='button'
              >
                Add to Cart

              </Button>
             <ListGroup.Item>
              
             </ListGroup.Item>
                </ListGroup>
        </Card>
    </Col>
  </Row>
  </>

    )
}

export default ProductScreen