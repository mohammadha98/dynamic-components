import { TemplateRef } from "@angular/core";

// models/table.interface.ts
export interface ITableColumn {
    /** عنوان ستون */
    header: string;
    /** کلید داده مربوط به ستون */
    field: string;
    /** کلاس CSS اختیاری برای ستون */
    class?: string;
    /** آیا ستون قابل مرتب‌سازی است */
    sortable?: boolean;
    /** آیا ستون در جستجو در نظر گرفته شود */
    searchable?: boolean;
    /** قالب سفارشی برای سلول (برای افزودن دکمه یا محتواهای خاص) */
    cellTemplate?: TemplateRef<any>;
}

export interface ITableAction {
    /** برچسب دکمه */
    label: string;
    /** آیکون اختیاری (مثلاً کلاس‌های FontAwesome) */
    icon?: string;
    /** کلاس CSS اختیاری */
    class?: string;
    /** کلید عملکرد برای شناسایی تابع مربوطه */
    actionKey: string;
}
export interface ITableConfig {
    /** عنوان جدول */
    tableTitle: string;
    /** داده‌های جدول */
    data: any[];
    /** آیا صفحه‌بندی فعال باشد */
    pagination?: boolean;
    /** تعداد سطرها در هر صفحه */
    pageSize?: number;
    /** آیا جستجو فعال باشد */
    search?: boolean;
    /** دکمه‌های سفارشی برای هر سطر */
    actions?: ITableAction[];
}
