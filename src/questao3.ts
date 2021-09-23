class Funcionarios {
  private _nome: string;
  private _salarioHora: number;
  private _diasTrabalhados: number;
  private _totalFaltasAno: number;

  constructor (
    nome: string, 
    salarioHora: number, 
    diasTrabalhados: number, 
    totalFaltasAno: number
  ) {
    this._nome = nome;
    this._salarioHora = salarioHora;
    this._diasTrabalhados = diasTrabalhados;
    this._totalFaltasAno = totalFaltasAno;
  }

  public get nome () {
    return this._nome;
  }

  public set nome(nome: string) {
    if (nome === "") {
      throw new Error("Nome não pode ser vazio");
    }

    this._nome = nome;
  }

  public get salarioHora() {
    return this._salarioHora;
  }

  public set salarioHora(salarioHora: number) {
    if (salarioHora === 0) {
      throw new Error("Salario hora não pode ser 0");
    }

    this._salarioHora = salarioHora;
  }

  public get diasTrabalhados() {
    return this._diasTrabalhados;
  }

  public set diasTrabalhados(diasTrabalhados: number) {
    if (diasTrabalhados < 0) {
      throw new Error("Dias trabalhados hora não pode ser negativo");
    }

    this._diasTrabalhados = diasTrabalhados;
  }

  public get totalFaltasAno() {
    return this._totalFaltasAno;
  }

  public set totalFaltasAno(totalFaltasAno: number) {
    if (totalFaltasAno < 0) {
      throw new Error("Total de faltas no ano não pode ser negativo");
    }

    this._totalFaltasAno = totalFaltasAno;
  }

  public calcularSalarioBruto() {
    return this._salarioHora * this._diasTrabalhados;
  }

  public calcularPLR() {
    if (this._totalFaltasAno === 0) {
      return this.calcularSalarioBruto();
    } else if (this._totalFaltasAno === 1) {
      return this.calcularSalarioBruto() * 0.94;
    } else if (this._totalFaltasAno === 2) {
      return this.calcularSalarioBruto() * 0.92;
    } else if (this._totalFaltasAno === 3) {
      return this.calcularSalarioBruto() * 0.90;
    } else if (this._totalFaltasAno === 4) {
      return this.calcularSalarioBruto() * 0.88;
    }
    return 0;
  }

  public calcularDesconto() {
    return this.calcularSalarioBruto() * 0.05;
  }

  public calcularSalarioLiquido() {
    return this.calcularSalarioBruto() - this.calcularDesconto() + this.calcularPLR();
  }
}

try {
  const funcionario = new Funcionarios("Lucas", 100, 365, 1);

  console.log(`O funcionário de nome ${funcionario.nome} tem o salário bruto de ${funcionario.calcularSalarioBruto()}, 
              teve ${funcionario.totalFaltasAno} falta(s) e sua PLR foi
              de ${funcionario.calcularPLR()}`
  )

  console.log(`O funcionário de nome ${funcionario.nome} tem o salário bruto de ${funcionario.calcularSalarioBruto()}, 
                o desconto de ${funcionario.calcularDesconto()}, a PLR de
                ${funcionario.calcularPLR()} e o salário líquido de ${funcionario.calcularSalarioLiquido()}`
  )
} catch (error) {
  console.log(error);
}