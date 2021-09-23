class Carrinho {
  private _produto: string;
  private _preco: number;
  private _quantidade: number;

  constructor (produto: string, preco: number, quantidade: number) {
    this._produto = produto;
    this._preco = preco;
    this._quantidade = quantidade;
  }

  public get produto() {
    return this._produto;
  }

  public set produto(produto: string) {
    if (produto === "") {
      throw new Error("Produto não pode ser vazio")
    }

    this._produto = produto;
  }

  public get preco() {
    return this._preco;
  }

  public set preco(preco: number) {
    if (preco === 0) {
      throw new Error("Preço não pode ser 0");
    }

    this._preco = preco;
  }

  public get quantidade() {
    return this._quantidade;
  }

  public set quantidade(quantidade: number) {
    if (quantidade === 0) {
      throw new Error("Quantidade não pode ser 0");
    }

    this._quantidade = quantidade;
  }

  public desconto(): number {
    let desconto = 0;
    if (this.quantidade <= 10) {
      desconto = 0;
      return desconto;
    } else if (this.quantidade >= 11 && this.quantidade <= 20) {
      desconto = 0.1;
      return desconto;
    } else if (this.quantidade >= 21 && this.quantidade <= 50) {
      desconto =  0.20;
      return desconto;
    }

    desconto = 0.25;
    return desconto;
  }

  public precoFinal(): number {
    const precoTotal = this.quantidade * this.preco ;
    if (this.quantidade <= 10) {
      return precoTotal;
    } else if (this.quantidade >= 11 && this.quantidade <= 20) {
      return precoTotal - (precoTotal * this.desconto());
    } else if (this.quantidade >= 21 && this.quantidade <= 50) {
      return precoTotal - (precoTotal * this.desconto())
    }

    return precoTotal - (precoTotal * this.desconto());
  }

}

try {
  const carrinho = new Carrinho("Camiseta", 39.99, 10);
console.log(`O produto ${carrinho.produto} de preço ${carrinho.preco}, quantidade comprada de ${carrinho.quantidade} teve o desconto de ${carrinho.desconto() * 100}% e o valor pago foi de ${carrinho.precoFinal()}`)
} catch (error) {
  console.log(error)
}