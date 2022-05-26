function actualizarItem(array, item) {
    if (array && item != null) {

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (element.id === item.id) {
                element.cantidad += item.cantidad;
                console.log("Se actualizo");
            }

            else {
                console.log("No se actualizo");
                return false;
            }
        }
    }
}

export default actualizarItem;