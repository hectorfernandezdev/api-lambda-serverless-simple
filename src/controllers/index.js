exports.handler = async function (event) {
  return {
    statusCode: 200,
    headers: { "Content-type": "application/json" },
    body: JSON.stringify("¡Hola! desde la computadora de alguien mas"),
  };
};
