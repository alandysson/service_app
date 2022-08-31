const API_URL = 'http://192.168.0.106:3000';
const TRANSACOES_URI = `${API_URL}/transacoes`;
const CONTA_URI = `${API_URL}/conta`;

export function fetchToDo<T>(endpoint: string, options: object): Promise<T> {
   return fetch(API_URL + endpoint, options).then(response => {
      return response.json().then(data => data as T);
   })
}
// const conecta = (uri, options = {}) => {
//    return fetch(uri, options).then(async (resposta) => {
//       if (resposta.ok) {
//          const dados = await resposta.json();
//          return dados;
//       }

//       console.log(resposta)
//       throw new Error(resposta);
//    })
// }

// const listaTransacoes = () => conecta(TRANSACOES_URI);

// const buscaSaldo = () => conecta(CONTA_URI).then(dados => dados.saldo);

// const atualizaSaldo = (saldo) => conecta(CONTA_URI, {
//    method: 'POST',
//    headers: { 'Content-Type': 'application/json;charset=utf-8' },
//    body: JSON.stringify({ saldo }),
// });

// const atualizaTransacoes = (dados) => conecta(TRANSACOES_URI, {
//    method: 'POST',
//    headers: { 'Content-Type': 'application/json;charset=utf-8' },
//    body: JSON.stringify(dados),
// });
