import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-threads-detail',
  templateUrl: './threads-detail.component.html',
  styleUrls: ['./threads-detail.component.scss']
})
export class ThreadsDatailComponent {

  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {

  }
  onBack() {
    this.router.navigate(['forum-management/threads'])
  }
}
