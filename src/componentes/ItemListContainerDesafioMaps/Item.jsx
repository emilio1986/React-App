import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { ListGroup } from 'react-bootstrap';
import { Link, Router } from 'react-router-dom';


function Item({ titulo, descripcion, precio, img, stock, id }) {

    return (


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
                    <Link to={`/detalle/${id}`} >Ver Detalle</Link>
                </Card.Body>
            </Card>
        </div>

    )

}

export default Item;