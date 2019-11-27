import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Apollo, QueryRef } from 'apollo-angular';
import gql from 'graphql-tag';
import { DatePipe } from '@angular/common';

const ALLPUBLISHEDNEWS_QUERY = gql`
  query{
    retrieveAllPublishedNews(page:1, limit:10){
      _id,
      title,
      news_summary,
      news_content,
      source,
      comments,
      created_at,
      view_count,
      bookmarked
    }
  }
`;

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss'],
  providers: [DatePipe]
})
export class ListNewsComponent {

  rows = [
  ];
  temp = [];
  columns = [
    { name: 'Index' },
    { name: 'Title' },
    { name: 'Author' },
    { name: 'Categories' },
    { name: 'Comments' },
    { name: 'Date' },
    { name: 'ID' },
    { name: 'Views' },
    { name: 'Active' },
    { name: 'Actions' }
  ];
  selected = [];

  employees: any[] = [];
  private query: QueryRef<any>;

  constructor(private router: Router, private toastr: ToastrService, private apollo: Apollo, private datePipe: DatePipe) {

  }

  ngOnInit() {
    console.log(this.datePipe.transform(new Date(), "dd/MM/yyyy"));
    this.query = this.apollo.watchQuery({
      query: ALLPUBLISHEDNEWS_QUERY,
      variables: {}
    });

    this.query.valueChanges.subscribe(result => {
      this.rows = result.data && result.data.retrieveAllPublishedNews;
      console.log('this.rows', this.rows);
    });
    this.temp = [...this.rows];


  }
  onCreateNews() {
    this.router.navigate(['news-management/create-news'])
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function (d) {
      return (d.title + d.author).toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
  }

  onUpdate(rowIndex) {
    this.router.navigate(['news-management/update-news/' + this.rows[rowIndex].id])
  }

  onPublish(rowIndex) {
    this.rows[rowIndex].active = false;
  }

  onDraft(rowIndex) {
    this.rows[rowIndex].active = true;
  }


}
