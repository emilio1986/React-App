

function Item({ titulo, descripcion, precio, img, stock }) {

    return (

        <div className=" item">

            <div className="titulo">{titulo}</div>
            {/* <img src="{img}" alt="{titulo}" /> */}
            <div className="descripcion">{descripcion}</div>
            <button> Ver Detalles del Producto</button>
            <div className="precio">{precio}</div>
        </div>


    )

}

export default Item;