import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  profileclicked = false;
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
      prixPromo: 600,
      qte: 10,
    },
    {
      id: 2,
      name: 'iPhone 11',
      brand: 'Apple',
      price: 1000,
      color: 'white',
      description: 'A smart phone from Apple.',
      image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg',
      promo: false,
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
      promo: false,
      prixPromo: 0,
    },
    {
      id: 4,
      name: 'Huawei P30',
      brand: 'Huawei',
      price: 900,
      color: 'blue',
      description: 'A smart phone from Huawei.',
      image: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p30-pro-1.jpg',

      promo: false,
      prixPromo: 0,
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
  phoneExist(data: any) {
    return this.phones.some(
      (phone: { name: any; brand: any }) =>
        phone.name === data.name && phone.brand === data.brand
    );
  }
  findUser(id: Number) {
    return this.users.find((user: { id: Number }) => user.id === id);
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
  addPhone(data: any) {
    if (this.phones.length == 0) {
      data.id = 1;
    } else {
      if (this.phoneExist(data)) {
        alert('Phone already exist');
      } else {
        data.id = this.phones[this.phones.length - 1].id + 1;
      }
    }
    this.phones.push(data);
    alert('Phone added successfully');
  }
  addPhoneToPanier(phone: any) {
    this.currentUser.panier.push(phone);
    this.currentUser.pricePanier += phone.price;
    alert('Phone added to cart');
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
