import Funcionario from "./Funcionario";

export default class Mensalista extends Funcionario {
    constructor(
        matricula: number,
        nome: string,
        idade: number,
        email: string,
        salario: number,
        public faltas: number,
        public cargo: string
    ) {
        super(matricula, nome, idade, email, salario);
        if (!this.validaEmail()) {
            console.log("e-Mail inválido!");
        }
    }

    validaEmail(): boolean {
        return super.validaEmail() && /@(adm|dev|vendas)\.xpto\.tec\.br$/.test(this.email);
    }

    calcFaltas(): number {
        return this.salario / 30 * this.faltas;
    }

    getSalarioContribuicao(): number {
        return this.salario - this.calcFaltas();
    }

    calcSalario(): number {
        return this.salario -
        this.calcFaltas() - this.calcINSS();
    }
}
