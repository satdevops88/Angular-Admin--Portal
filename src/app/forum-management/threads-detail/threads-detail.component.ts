import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ForumCategoryApiService } from 'services/forumCategoryApi';

@Component({
  selector: 'app-threads-detail',
  templateUrl: './threads-detail.component.html',
  styleUrls: ['./threads-detail.component.scss']
})
export class ThreadsDatailComponent {

  threadID: String = "";
  categoryInfo: String = "";
  subCategoryInfo: String = "";
  threadInfo: any;
  threadPosts: any = [];
  currentPostPage = 0;
  totalPostPage = 0;

  constructor(private forumCategoryApi: ForumCategoryApiService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService) {

  }

  ngOnInit() {
    this.threadID = this.route.params['value'].threadID;
    console.log(this.threadID);
    this.retrieveForumThread(this.threadID);
    this.retrieveAllThreadPosts(this.threadID, 1, 10);
  }

  retrieveForumThread(_id: String) {
    var responsePayload = ['_id', { key: 'categoryId', fields: ['category'] }, { key: 'subcategoryId', fields: ['subcategory'] },
      { key: 'reference', fields: ['reference_type'] }, { key: 'thread_media', fields: ['tags', 'media_url', 'height', 'width'] },
      'title', 'content', 'status', 'likes', 'liked', 'subscribed', 'posts', 'views', 'isDuplicate',
      { key: 'createdBy', fields: ['_id', 'role_id', 'display_name', { key: 'profile_image', fields: ['media_url'] }] }, 'createdAt'];
    var params = { id: _id }
    this.forumCategoryApi.getOneThread(responsePayload, params).then(result => {
      this.threadInfo = result.data;
      console.log('Thread result => ', result);
    })
  }

  retrieveAllThreadPosts(_id: String, page: Number, limit: Number) {
    var responsePayload = ['_id', { key: 'thread_post_media', fields: ['tags', 'media_url', 'height', 'width'] },
      'content', 'status', 'likes', 'comments',
      { key: 'createdBy', fields: ['_id', 'display_name', { key: 'profile_image', fields: ['media_url'] }] }, 'createdAt'];
    var params = { id: _id, page: page, limit: limit }
    this.forumCategoryApi.getAllThreadPost(responsePayload, params).then(result => {
      this.currentPostPage = result.meta.currentPage;
      this.totalPostPage = result.meta.totalPage;
      result.data.forEach(post => {
        this.threadPosts.push(post);
      });
      console.log('Thread Posts => ', this.threadPosts);
    })
  }


  onUpdatePostStatus(status: String) {

  }

  onUpdatePostCommentStatus(status: String) {

  }
  onBack() {
    this.router.navigate(['forum-management/threads'])
  }
}
