import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.scss']
})
export class UpdateNewsComponent {

  @ViewChild('f') newsForm: NgForm;
  constructor(private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.newsForm.setValue({
        title: "Local / Buhari, Obasanjo meet, shake hands, as President presides over National Council of State [PHOTOS]",
        content: "President Muhammadu Buhari is currently presiding over the National Council of State meeting at the Presidential Villa, Abuja. The Council of State is an organ of the Federal Government saddled with the responsibility of advising the executive on policy making. The meeting which is being held inside the Council Chambers began at 11: 00am. President Muhammadu Buhari is currently presiding over the National Council of State meeting at the Presidential Villa, Abuja."
      })
    }, 100);
  }

  onCancel() {
    this.router.navigate(['news-management/news']);
  }

  onUpdate() {
    this.router.navigate(['news-management/news']);
    this.toastr.success('Updated Successfully', 'Success');
  }

}
