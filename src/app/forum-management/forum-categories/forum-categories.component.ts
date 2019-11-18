import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CATEGORIES } from '../forum-categories.config';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forum-categories',
  templateUrl: './forum-categories.component.html',
  styleUrls: ['./forum-categories.component.scss']
})
export class ForumCategoriesComponent {

  rows = [];
  subrows = [];
  temp = [];
  columns = [
    { name: 'ID' },
    { name: 'Name' },
    { name: 'Subcategories' },
    { name: 'Actions' }
  ];
  subcolumns = [
    { name: 'ID' },
    { name: 'Name' },
    { name: 'Threads' },
    { name: 'Actions' }
  ];
  selected = [];
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.rows = CATEGORIES.filter(categories => categories);
    this.selected = [this.rows[0]]
    this.subrows = this.rows[0].subcategories;
    console.log('this.rows', this.rows);

  }
  onSelect({ selected }) {
    this.subrows = selected[0].subcategories;
  }

  onViewThread(rowIndex) {
    console.log('onViewThread', this.subrows);

  }

  onSubUpdate(rowIndex) {
    console.log('onSubUpdate');

  }

  onSubDelete(rowIndex) {
    if (confirm('Are you sure to delete "' + this.subrows[rowIndex].name + '" SubCategory ?')) {
      this.toastr.success('Deleted SubCategory Successfully', 'Success');
    }
  }
  onUpdate(rowIndex) {
    this.router.navigate(['user-management/update-admin/' + rowIndex])
  }

  onDelete(rowIndex) {
    if (confirm('Are you sure to delete "' + this.rows[rowIndex].name + '" Category ?')) {
      this.toastr.success('Deleted Category Successfully', 'Success');
    }
  }

}
