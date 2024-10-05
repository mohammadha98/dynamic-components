import { ITableConfig } from '../models/table.interface';

export const sampleTableConfig: ITableConfig = {
  tableTitle: 'لیست کاربران',

  data: [], // داده‌ها را بعداً از سرویس دریافت می‌کنیم
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
