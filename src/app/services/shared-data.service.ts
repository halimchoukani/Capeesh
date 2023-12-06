import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  users: any = [
    {
      username: 'admin',
      password: 'admin',
    },
    {
      username: 'user',
      password: 'user',
    },
    {
      username: 'test',
      password: 'test',
    },
    {
      username: 'test1',
      password: 'test1',
    },
    {
      username: 'test2',
      password: 'test2',
    },
  ];

  phones: any = [
    {
      id: 1,
      name: 'iPhone 12 Pro Max',
      price: 1099,
      brand: 'Apple',
      description: 'A large phone with one of the best screens',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-max-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000',
      promo: true,
    },
    {
      id: 2,
      name: 'iPhone 12 Pro',
      price: 999,
      brand: 'Apple',
      description: 'A great phone with one of the best cameras',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021658000',
      promo: false,
    },
    {
      id: 3,
      name: 'iPhone 12',
      price: 699,
      brand: 'Apple',
      description: 'A great phone with one of the best cameras',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000',
      promo: true,
    },
    {
      id: 4,
      name: 'iPhone 12 Mini',
      price: 599,
      brand: 'Apple',
      description: 'A great phone with one of the best cameras',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000',
      promo: true,
    },
    {
      id: 5,
      name: 'iPhone SE',
      price: 399,
      brand: 'Apple',
      description: 'A great phone with one of the best cameras',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1586574262177',
      promo: true,
    },
  ];
  constructor() {}
}
