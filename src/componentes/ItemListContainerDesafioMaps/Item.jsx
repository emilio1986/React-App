import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { ListGroup } from 'react-bootstrap';
import { Link, Router } from 'react-router-dom';
import './ItemListContainerMaps';


function Item({ titulo, descripcion, precio, img, stock, id, categoria }) {

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
                    <Link to={`/detalle/${id}`}  className='card-links'>Ver Detalle</Link>
                </Card.Body>
            </Card>
        </div>

    )

}

export default Item;