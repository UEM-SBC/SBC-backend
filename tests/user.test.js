import request from 'supertest'
import app from '../src/app'

/* Testes
  Listagem de usuáriios sem token de acesso
  Listagem de usuários com token de acesso
  Cadastro de usuário sem dados
  Cadastro de usuário sem campos obrigatórios (nome, e-mail, cpf, rg, username, password)
  Cadastro de usuário com e-mail inválido
  Cadastro de usuário com e-mail em uso
  Cadastro de usuário com cpf inválido
  Cadastro de usuário com rg inválido
  Cadastro de usuário com nome de usuário em uso
  Cadastro de usuário com dados corretos
  Atualização de usuário sem os dados obrigatórios (nome, e-mail, cpf, rg)
  Atualização de usuário com e-mail em uso
  Atualização de usuário com nome de usuário em uso
  Atualização de usuário com rg inválido
  Atualização de usuário com cpf inválido
  Atualização de usuário sem token de acesso
  Atualização de usuário com dados corretos
  Deletar usuário com id que não existe
  Deletar usuário sem token de acesso
  Deletar usuário com token de acesso
*/

describe('User tests', () => {
  it('Should return 401 if call get users without accessToken', async () => {
    await request(app)
    .get('/user')
    .then(response => {
      expect(response.statusCode).toBe(401)
    });
  })
})