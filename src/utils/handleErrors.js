module.exports.handleHttpErrors = (res, message = "ERROR", code = 400) => {
    res.status(code).send({ status: 'ERROR', detail: message});
}