import { Component } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forum-threads',
  templateUrl: './forum-threads.component.html',
  styleUrls: ['./forum-threads.component.scss']
})
export class ForumThreadsComponent {

  //-- CONSTRUCTORS
  /**
   * @description Default constructor.
   */
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

}
