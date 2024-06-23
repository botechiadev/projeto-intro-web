const itemModelo = {
    value1: "", //nome-aluno
    value2: "",// sobrenome-aluno
    value3: 0,//matricula
    value6: [],//array de notas
    value7: {}
}

const estudante = {
    nome: "Vini",
    sobrenome: "Oliveira",
    matricula: 32481,
    notas: [10, 8, 5],
    
}

//estudante.modulo = "Módulo 1"
estudante['modulo'] = "Módulo 1"

console.log("nome: " , estudante.nome)
console.log("Segunda nota: " , estudante["notas"][1])
console.log("Módulo: ", estudante.modulo)


const novoObjeto = estudante
novoObjeto.nome = "Julia"
console.log("nome: ", novoObjeto.nome)