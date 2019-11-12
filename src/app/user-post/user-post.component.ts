import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent {

  //-- CONSTRUCTORS
  /**
   * @description Default constructor.
   */
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

}
