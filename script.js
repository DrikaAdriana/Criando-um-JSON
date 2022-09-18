const objs = [
  {
    nome: "Adriana Silva",  
    idade: 49,
    esta_trabalhando: true,
    detalhes_profissao: {
      profissao: "Programadora",
      empresa: "DBC"
    },
    hobbies: [1, "viajar", true],
  },
  {
    nome: "Josué Moutinho Silva",  
    idade: 16,
    esta_trabalhando: false,
    detalhes_profissao: {
      profissao: null,
      empresa: null
    },
    hobbies: ["Desenhar, Estudar"],
  },
]

const jsonData = JSON.stringify(objs)//OBJ PARA JSON

console.log(jsonData)
console.log(typeof jsonData) //JSON

const objData = JSON.parse(jsonData)
console.log(objData)
console.log(typeof objData)

objData.map((pessoa => {
  console.log(pessoa.nome)
}))



//1)EXEMPLO:  Converter objeto para JSON com o método .stringify()
//Obs: Quando o JSON é tranferido para API (POST) ele é trsnsferido como texto , mas esse método garante que 
// ele seja um texto com um JSON válido.

//2) Converter JSON para OBJ assim consigo tratar e mapear usando métodos e funções de array por exemplo: .map
//Obs: Quando recebo (GET) um JSON e preciso converter para OBJ

