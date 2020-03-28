/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * GET: Busca/listar uma informação do back-end
 * POST: Cria uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parãmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where() 
 */
const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // importando as rotas

const app = express();

app.use(cors()); //usa o que eu importei
app.use(express.json()); //usa o que eu importei
app.use(routes); //usa o que eu importei

app.listen(3333);