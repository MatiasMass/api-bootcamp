const logger = (request, response, next) => {
  console.log(request.method)
  console.log(request.path)
  console.log(request.body)
  console.log('-----------')
  next() // va a la siguiente ruta que se tiene que ejecutar
}

module.exports = logger
