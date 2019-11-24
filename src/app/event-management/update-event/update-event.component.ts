import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.scss']
})
export class UpdateEventComponent {

  @ViewChild('f') eventForm: NgForm;

  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.eventForm.setValue({
        eventname: "Weekend Party",
        startdate: "2019-11-24",
        enddate: "2019-11-25",
        details: "This is weekend Party. Thank you very much!"
      })
    }, 100);
  }

  onCancel() {
    this.router.navigate(['event-management/list-events']);
  }
  onUpdate() {
    this.router.navigate(['event-management/list-events']);
    this.toastr.success('Update Event Successfully', 'Success');
  }
}
