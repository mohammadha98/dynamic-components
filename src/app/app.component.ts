import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {loginFormConfig, registerFormConfig} from "./constants/register-form.config";
import {IForm} from "./models/form.interface";
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { ITableColumn, ITableConfig } from './models/table.interface';
import { sampleTableConfig } from './constants/sample-table.config';
import { User, UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DynamicFormComponent,DynamicTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dynamic-forms-json';
  readonly registerForm: IForm = loginFormConfig;
 
  tableConfig: ITableConfig = {
    tableTitle: 'لیست کاربران',
    data: [],
    pagination: true,
    pageSize: 5,
    search: true,
    actions: [
      {
        label: 'ویرایش',
        icon: 'fa fa-edit',
        class: 'btn btn-primary',
        actionKey: 'edit',
      },
      {
        label: 'حذف',
        icon: 'fa fa-trash',
        class: 'btn btn-danger',
        actionKey: 'delete',
      },
    ],
  };

  // نگاشت کلیدهای عملکرد به توابع مربوطه
  actionFunctions: { [key: string]: (row: any) => void } = {
    edit: this.editUser.bind(this),
    delete: this.deleteUser.bind(this),
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.tableConfig.data = users;
      },
      (error) => {
        console.error('خطا در دریافت داده‌ها:', error);
      }
    );
  }

  // عملکرد دکمه ویرایش
  editUser(user: User): void {
    // منطق ویرایش کاربر را اینجا اضافه کنید
    console.log('ویرایش کاربر:', user);
    alert(`ویرایش کاربر: ${user.firstName} ${user.lastName}`);
  }

  // عملکرد دکمه حذف
  deleteUser(user: User): void {
    // منطق حذف کاربر را اینجا اضافه کنید
    console.log('حذف کاربر:', user);
    alert(`حذف کاربر: ${user.firstName} ${user.lastName}`);
  }
}
