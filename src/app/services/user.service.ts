import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  // سایر فیلدها...
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUsers(): Observable<User[]> {
    // داده‌های ساختگی
    const users: User[] = [
      { id: 1, firstName: 'علی', lastName: 'احمدی', email: 'ali@example.com' },
      { id: 2, firstName: 'سارا', lastName: 'موسوی', email: 'sara@example.com' },
      { id: 3, firstName: 'رضا', lastName: 'کریمی', email: 'reza@example.com' },
      { id: 4, firstName: 'مینا', lastName: 'نوری', email: 'mina@example.com' },
      { id: 5, firstName: '2حسن', lastName: 'جعفری', email: 'hassan@example.com' },
      { id: 6, firstName: '3علی', lastName: 'احمدی', email: 'ali@example.com' },
      { id: 7, firstName: '4سارا', lastName: 'موسوی', email: 'sara@example.com' },
      { id: 8, firstName: '5رضا', lastName: 'کریمی', email: 'reza@example.com' },
      { id: 9, firstName: '6مینا', lastName: 'نوری', email: 'mina@example.com' },
      { id: 10, firstName: '6حسن', lastName: 'جعفری', email: 'hassan@example.com' },
    ];
    return of(users); // بازگرداندن یک Observable از داده‌ها
  }
}
