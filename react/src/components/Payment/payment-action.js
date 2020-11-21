const buildPayments = (method = {}, formData = {}, callback) => {
    return {
        type : {},
        payload : method,
        formData : formData,
        callback : callback
    }
}

export {
    buildPayments
}