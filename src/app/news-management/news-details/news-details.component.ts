import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent {

  //-- CONSTRUCTORS
  /**
   * @description Default constructor.
   */
  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }
  onBack() {
    this.router.navigate(['news-management/news'])
  }
}
