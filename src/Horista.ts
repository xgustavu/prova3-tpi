import Funcionario from "./Funcionario";

export default class Horista extends Funcionario {
    constructor(
        matricula: number,
        nome: string,
        idade: number,
        email: string,
        salario: number,
        public horas: number,
        public funcao: string
    ) {
        super(matricula, nome, idade, email, salario);
        if (!this.validaEmail()) {
            console.log("e-Mail inválido!");
        }
    }

    validaEmail(): boolean {
        return super.validaEmail() && /@(adm|dev|vendas)\.xpto\.tec\.br$/.test(this.email);
    }

    calcSalarioBruto(): number {
        return this.salario * this.horas;
    }

    calcDsr(): number {
        return this.calcSalarioBruto() / 25 * 4;
    }

    getSalarioContribuicao(): number {
        return this.calcSalarioBruto() + this.calcDsr();
    }

    calcSalario(): number {
        return this.calcSalarioBruto() + this.calcDsr() - this.calcINSS();
    }
}
