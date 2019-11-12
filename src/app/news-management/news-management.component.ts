import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-management',
  templateUrl: './news-management.component.html',
  styleUrls: ['./news-management.component.scss']
})
export class NewsManagementComponent {

  //-- CONSTRUCTORS
  /**
   * @description Default constructor.
   */
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

}
