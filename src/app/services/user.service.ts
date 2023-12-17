import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  profileclicked = false;
  panier: any = {
    id: -1,
    phonename: '',
    phonebrand: '',
    phoneprice: 0,
    phonecolor: '',
    phoneimage: '',
    phonepromo: false,
    phoneprixPromo: 0,
    orderdate: new Date(),
    phoneqte: 0,
  };
  users: any = [
    {
      id: 0,
      username: 'admin',
      image: 'https://www.w3schools.com/howto/img_avatar.png',
      email: 'admin@capeesh.com',
      adresse: 'admin adresse',
      password: 'admin',
      status: 'admin',
      panier: [],
      pricePanier: 0,
      phoneNumber: '123456789',
    },
    {
      id: 1,
      username: 'user1',
      image: 'https://www.w3schools.com/howto/img_avatar.png',
      email: 'user1@email.com',
      adresse: 'user1 adresse',
      password: 'user1',
      status: 'user',
      panier: [],
      pricePanier: 0,
      phoneNumber: '123456789',
    },
    {
      id: 2,
      username: 'user2',
      image: 'https://www.w3schools.com/howto/img_avatar.png',
      email: 'user2@email.com',
      adresse: 'user2 adresse',
      password: 'user2',
      status: 'user',
      panier: [],
      pricePanier: 0,
      phoneNumber: '123456789',
    },
  ];
  phones: any[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S10',
      brand: 'Samsung',
      price: 700,
      color: 'black',
      description: 'A smart phone from Samsung.',
      image:
        'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-1.jpg',
      promo: true,
      prixPromo: 100,
      qte: 10,
    },
    {
      id: 2,
      name: 'iPhone 11 Pro',
      brand: 'Apple',
      price: 1000,
      color: 'white',
      description: 'A smart phone from Apple.',
      image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-pro-10.jpg',
      promo: true,
      prixPromo: 0,
      qte: 10,
    },
    {
      id: 3,
      name: 'Huawei P30',
      brand: 'Huawei',
      price: 900,
      color: 'blue',
      description: 'A smart phone from Huawei.',
      image: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p30-pro-1.jpg',
      promo: true,
      prixPromo: 100,
    },
    {
      id: 4,
      name: 'Samsung A25',
      brand: 'Samsung',
      price: 1000,
      color: 'yellow',
      description: 'A smart phone from Samsung.',
      image:
        'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a25-1.jpg',
      promo: true,
      prixPromo: 200,
    },
    {
      id: 5,
      name: 'Huawei P30',
      brand: 'Huawei',
      price: 900,
      color: 'blue',
      description: 'A smart phone from Huawei.',
      image: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p30-pro-1.jpg',
      promo: false,
      prixPromo: 0,
      qte: 10,
    },
    {
      id: 6,
      name: 'Huawei P30',
      brand: 'Huawei',
      price: 900,
      color: 'blue',
      description: 'A smart phone from Huawei.',
      image: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p30-pro-1.jpg',
      promo: false,
      prixPromo: 0,
      qte: 10,
    },
    {
      id: 7,
      name: 'Google Pixel 4',
      brand: 'Google',
      price: 800,
      color: 'black',
      description: 'A smart phone from Google.',
      image: 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel-4-1.jpg',
      promo: false,
      prixPromo: 0,
      qte: 15,
    },
    {
      id: 8,
      name: 'OnePlus 7T',
      brand: 'OnePlus',
      price: 700,
      color: 'silver',
      description: 'A smart phone from OnePlus.',
      image: 'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-7t-1.jpg',
      promo: true,
      prixPromo: 50,
      qte: 20,
    },
    {
      id: 9,
      name: 'Xiaomi Mi 9',
      brand: 'Xiaomi',
      price: 600,
      color: 'red',
      description: 'A smart phone from Xiaomi.',
      image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi-9-1.jpg',
      promo: true,
      prixPromo: 75,
      qte: 18,
    },
    {
      id: 10,
      name: 'Sony Xperia 1',
      brand: 'Sony',
      price: 850,
      color: 'purple',
      description: 'A smart phone from Sony.',
      image: 'https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-1-1.jpg',
      promo: false,
      prixPromo: 0,
      qte: 12,
    },
    {
      id: 12,
      name: 'Motorola Moto G Power',
      brand: 'Motorola',
      price: 300,
      color: 'black',
      description: 'A budget-friendly smartphone from Motorola.',
      image:
        'https://fdn2.gsmarena.com/vv/pics/motorola/motorola-moto-g-power-1.jpg',
      promo: false,
      prixPromo: 0,
      qte: 25,
    },
  ];
  currentUser: any = {
    id: -1,
    username: '',
    image: '',
    email: '',
    adresse: '',
    password: '',
    status: '',
    panier: [],
    pricePanier: 0,
    phoneNumber: '',
  };

  isAdmin() {
    return this.currentUser.username == 'admin';
  }
  isLoggedIn() {
    return localStorage.getItem('user') != null;
  }
  constructor(private router: Router) {}
  logout() {
    this.currentUser = {
      id: -1,
      username: '',
      image: '',
      email: '',
      adresse: '',
      password: '',
      status: '',
      panier: [],
      pricePanier: 0,
      phoneNumber: '',
    };
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
  RelatedPhones(brand: any, id: any, price: any) {
    return this.phones.filter(
      (phone) =>
        (phone.brand == brand && phone.id != id && phone.qte > 0) ||
        (phone.price >= price - 100 && phone.id != id && phone.qte > 0)
    );
  }
  phoneExist(data: any) {
    return this.phones.some(
      (phone: { name: any; brand: any }) =>
        phone.name === data.name && phone.brand === data.brand
    );
  }
  findUser(id: Number) {
    return this.users.find((user: { id: Number }) => user.id === id);
  }
  findPhone(id: Number) {
    return this.phones.find((phone: { id: Number }) => phone.id === id);
  }
  isExist(data: any) {
    return this.users.some(
      (user: { username: any; password: any }) =>
        user.username === data.username && user.password === data.password
    );
  }
  modifieUser(data: any) {
    this.currentUser = data;
    alert('User modified successfully');
  }
  deletePhone(id: Number) {
    let index = this.phones.findIndex((phone) => phone.id == id);
    if (index != -1) {
      this.phones.splice(index, 1);
      alert('Phone deleted successfully');
    } else {
      alert('Phone not found');
    }
  }
  modifiePhone(id: Number, data: any) {
    let index = this.phones.findIndex((phone) => phone.id == id);
    if (index != -1) {
      this.phones[index - 1] = data;
      alert('Phone modified successfully');
    } else {
      alert('Phone not found');
    }
  }
  decreaseQte(id: Number) {
    let index = this.phones.findIndex((phone) => phone.id == id);
    if (index != -1) {
      if (this.phones[index].qte > 0) {
        this.phones[index].qte--;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  addPhone(data: any) {
    if (this.phones.length == 0) {
      data.id = 1;
    } else {
      if (this.phoneExist(data)) {
        alert('Phone already exist');
        return false;
      } else {
        data.id = this.phones[this.phones.length - 1].id + 1;
      }
    }
    this.phones.push(data);
    return true;
    alert('Phone added successfully');
  }
  foundinPanier(id: Number) {
    const found = this.currentUser.panier.some(
      (phone: { id: Number }) => phone.id === id
    );
    const index = this.currentUser.panier.findIndex(
      (phone: { id: Number }) => phone.id === id
    );
    if (found) {
      return index;
    } else {
      return -1;
    }
  }

  addPhoneToPanier(phone: any) {
    console.log(this.currentUser.panier);

    if (this.decreaseQte(phone.id)) {
      let newPanier = {
        id: phone.id,
        phonename: phone.name,
        phonebrand: phone.brand,
        phonecolor: phone.color,
        phoneimage: phone.image,
        phonepromo: phone.promo,
        orderdate: new Date(),
        phoneprixPromo: phone.prixPromo,
        phoneqte: 1,
        phoneprice: phone.price,
      };

      let foundIndex = this.foundinPanier(phone.id);
      if (foundIndex != -1) {
        newPanier.phoneqte = this.currentUser.panier[foundIndex].phoneqte + 1;
        newPanier.phoneprice = phone.price * newPanier.phoneqte;
        this.currentUser.panier[foundIndex] = newPanier;
      } else {
        this.currentUser.panier.push(newPanier);
      }

      alert('Phone added to cart');
    } else {
      alert('Phone not available');
    }
  }

  login(data: any) {
    if (this.isExist(data)) {
      localStorage.setItem('user', JSON.stringify(data));
      this.currentUser = this.users.find(
        (user: { username: any; password: any }) =>
          user.username === data.username && user.password === data.password
      );
      this.router.navigate(['/store']);
    } else {
      alert('Wrong username or password');
    }
  }

  registre(data: any, image: any) {
    if (this.isExist(data)) {
      alert('User already exist');
    } else {
      if (this.users.length == 0) {
        data.id = 1;
      } else {
        data.id = this.users[this.users.length - 1].id + 1;
      }
      data.status = 'user';
      data.panier = [];
      data.pricePanier = 0;
      data.image = image;
      this.users.push(data);
      this.currentUser = data;
      localStorage.setItem(
        'user',
        JSON.stringify({
          username: data.username,
          password: data.password,
        })
      );
      alert('User added successfully');
    }
  }
}
