import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {

  @ViewChild('f') eventForm: NgForm;

  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {

  }

  onCancel() {
    this.router.navigate(['event-management/list-events']);
  }
  onCreate() {
    this.router.navigate(['event-management/list-events']);
    this.toastr.success('Created Event Successfully', 'Success');
  }
}
