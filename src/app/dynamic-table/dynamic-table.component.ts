// src/app/components/dynamic-table/table.component.ts
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ITableConfig, ITableAction } from '../models/table.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
  standalone:true,
  imports:[CommonModule,FormsModule]
})
export class DynamicTableComponent implements OnInit, OnChanges {
  @Input() config!: ITableConfig;
  @Input() actionFunctions: { [key: string]: (row: any) => void } = {};
  
  displayedData: any[] = [];
  columns: string[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  totalPages: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.initializeTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']) {
      this.initializeTable();
    }
  }

  initializeTable(): void {
    if (this.config.data && this.config.data.length > 0) {
      // استخراج کلیدهای اولین شیء داده‌ها به عنوان ستون‌ها
      this.columns = Object.keys(this.config.data[0]);
    } else {
      this.columns = [];
    }
    this.updateDisplayedData();
  }

  updateDisplayedData(): void {
    let data = [...(this.config.data || [])];

    // اعمال جستجو
    if (this.config.search && this.searchTerm) {
      data = data.filter((row) =>
        this.columns.some((key) => {
          const cellValue = row[key]?.toString().toLowerCase() || '';
          return cellValue.includes(this.searchTerm.toLowerCase());
        })
      );
    }

    // اعمال صفحه‌بندی
    if (this.config.pagination) {
      const pageSize = this.config.pageSize || 10;
      this.totalPages = Math.ceil(data.length / pageSize);
      const start = (this.currentPage - 1) * pageSize;
      const end = this.currentPage * pageSize;
      data = data.slice(start, end);
    }

    this.displayedData = data;
  }

  sortData(column: string): void {
    let sorted = [...(this.config.data || [])];
    const isAsc = true; // می‌توانید منطق تغییر جهت مرتب‌سازی را اضافه کنید

    sorted.sort((a, b) => {
      if (a[column] > b[column]) return isAsc ? 1 : -1;
      if (a[column] < b[column]) return isAsc ? -1 : 1;
      return 0;
    });

    this.config.data = sorted;
    this.updateDisplayedData();
  }

  onSearchChange(): void {
    this.currentPage = 1;
    this.updateDisplayedData();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedData();
    }
  }

  executeAction(actionKey: string, row: any): void {
    const actionFn = this.actionFunctions[actionKey];
    if (actionFn) {
      actionFn(row);
    }
  }
}
