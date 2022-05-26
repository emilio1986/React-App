//funcion para comprobar items duplicados y no repetirlos en el carrito
function duplicado(array, item) {

    if (array && item != null) {

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element.id === item.id) {
                return true;
            }
            else {
                return false;
            }
        }

    }
}

export default duplicado;