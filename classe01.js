class Lancamento{
    //é a forma 
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
    
}
class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    /**
     * 
     * @param  {...any} lancamentos 
     *  os "..." no parametro da função permite receber um array de parametros durante sua execução
     * desta forma é possível trabalhar com o forEach para popular o array lancamentos
     */
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }

}

const salario = new Lancamento('Salário', 45000)
const contaLuz = new Lancamento('Conta de Luz',-200)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaLuz)

console.log(contas.sumario())