try {
  //Chequeamos el evento
  if (!event || !event?.body) {
    return respond(400, { msg: "empty body" });
  }

  const body =
    typeof event.body !== "string" ? event.body : JSON.parse(event.body);

  //Chequeamos el username
  const username = body.username;
  if ("montevideo" !== username) {
    return respond(402, { msg: "credentials mismatch" });
  }

  //Retornamos en caso de exito
  return respond(200, {
    status: "success",
    data: {
      quote: "Ha Ha!",
      character: "Nelson Muntz",
      image:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    },
  });
} catch (e) {
  console.error(e);
  return respond(500, {
    status: "internal-error",
  });
}

const respond = (status, body = {}) => {
  return {
    statusCode: status,
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(body),
  };
};

