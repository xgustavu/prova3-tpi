export default class Funcionario {
    constructor(
        public matricula: number,
        public nome: string,
        public idade: number,
        public email: string,
        public salario: number
    ) {}

    validaEmail(): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(this.email);
    }

    calcINSS(): number {
        let inss: number;
        const salario = this.salario;
        if (salario <= 1412.00) {
            inss = salario * 0.075;
        } else if (salario <= 2666.68) {
            inss = salario * 0.09;
        } else if (salario <= 4000.03) {
            inss = salario * 0.12;
        } else {
            inss = Math.min(salario * 0.14, 908.85);
        }
        return inss;
    }

    calcSalario(): number {
        return this.salario - this.calcINSS();
    }
}