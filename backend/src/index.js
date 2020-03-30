const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:]
  * 
  * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) (users/:id)
  * & (e comercial) concatenar parametros
  * Route Params: Parâmetros utilizados para identificar recursos (?name=Marcio)
  * Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */

   app.listen(3333);

/*
  app.get('/users', (request, response) => {
    const params = request.query;
    console.log(params);

    return response.json({
        event: 'Semana Omnistack 11',
        user: 'Marcio Costa'
    });
});

app.post('/users', (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json({
        event: 'Semana Omnistack 11',
        user: 'Marcio Costa' 
    });
});
*/
