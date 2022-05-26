//funcion para remover  un item por id en  el carrito
function remover(array, itemId) {

    if (array && itemId != null) {
        ok = false;
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element.id === itemId) {
                ok = true;
                array[element].remove();
            }
            
        }
        if (ok) console.log("El elemento fue eliminado del carrito");

    }
    return ok;
}

export default remover;