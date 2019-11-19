import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.scss']
})
export class UpdateNewsComponent {

  //-- CONSTRUCTORS
  /**
   * @description Default constructor.
   */
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

}
