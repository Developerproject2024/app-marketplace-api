export interface IProducts {
  name: string;
  sku: string;
  price: number;
  amount: number;
  userId: number;
}

export interface ICProducts {
  id: number;
  name: string;
  sku: string;
  price: number;
  amount: number;
  userId: any;
}

export class Product {
  constructor(private attributes: IProducts) {}

  static create(createProduct: {
    name: string;
    sku: string;
    price: number;
    amount: number;
    userId: number;
  }): Product {
    return new Product({
      name: createProduct.name,
      sku: createProduct.sku,
      price: createProduct.price,
      amount: createProduct.amount,
      userId: createProduct.userId,
    });
  }

  data(): IProducts {
    return {
      name: this.attributes.name,
      sku: this.attributes.sku,
      price: this.attributes.price,
      amount: this.attributes.amount,
      userId: this.attributes.userId,
    };
  }
}
