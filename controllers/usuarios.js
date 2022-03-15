const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { saludo, numero, apellido = "sin apellido" } = req.query;
  res.json({
    msg: "get API - controllers",
    saludo,
    numero,
    apellido,
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "put API - controllers",
    id: id,
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "post API - controllers",
    nombre,
    edad,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API -controlllers",
  });
};

const usuariosPatch = (req, res = response) => {
  //
  res.json({
    msg: "patch API -controlllers",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
