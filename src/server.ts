import express from 'express';
import { response } from 'express';
import { request } from 'express';

//@types/express
const app = express();

/*
*GET    => BUSCAR INFORMAÇÃO
*POST   => INSERIR INFORMAÇÃO
*PUT    => ALTERAR INFORMAÇÃO
*DELETE => DELETAR DADO
*PATCH  => ALTERAR INFORMAÇÃO ESPECIFICA
*/

// PASSAR RECURSO = ROTA
app.get("/teste", (request, response) => {
    //Request => entrando
    //Response => Saindo
    return response.send("Aoba");
})

app.post("/teste-post", (request, response) => {
    return response.send("Aoba post")
});

//http://localhost:3000
app.listen(3000, () => console.log("server rodando"));
