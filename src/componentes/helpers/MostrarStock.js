function MostrarStock(stock) {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(stock)
        }, 2000)
    }
    )
}

export default MostrarStock;