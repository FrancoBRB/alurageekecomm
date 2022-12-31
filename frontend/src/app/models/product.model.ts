export class Product {
  id: number | null = null;
  name: string = '';
  price: number = -1;
  category: string = '';
  image: string = '';
  desc: string = '';

  constructor(
    id: number | null,
    name: string,
    price: number,
    category: string,
    image: string,
    desc: string
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.image = image;
    this.desc = desc;
  }
}
