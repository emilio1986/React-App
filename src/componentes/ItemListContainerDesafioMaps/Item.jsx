import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { ListGroup } from 'react-bootstrap';


function Item({ titulo, descripcion, precio, img, stock }) {

    return (

        //<div className=" item">

        //  <div className="titulo">{titulo}</div>
        //{/* <img src="{img}" alt="{titulo}" /> */}
        //<div className="descripcion">{descripcion}</div>
        //<button> Ver Detalles del Producto</button>
        //<div className="precio">{precio}</div>
        //</div>

        <div> 
        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
                <Button variant="success">Agregar al Carrito</Button>
            </Card.Body>
            <ListGroup className="list-group-flush">
                
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Ver Detalle</Card.Link>
            </Card.Body>
        </Card>
        </div>

    )

}

export default Item;