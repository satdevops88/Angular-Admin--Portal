import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent {

  //-- CONSTRUCTORS
  /**
   * @description Default constructor.
   */
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

}
