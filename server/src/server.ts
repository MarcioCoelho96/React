import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express(); //express é uma função é invocada aqui

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): Criação ou atualização de um registo
// Route Parameters: Identificar qual recurso quero atualizar ou apagar
// Query Params: paginação, filtros, ordenar

app.use(cors());
app.use(express.json());

app.use(routes);


app.listen(3333);

