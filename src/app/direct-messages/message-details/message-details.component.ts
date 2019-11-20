import { Component, ElementRef } from '@angular/core';
import { ApiService } from 'app/shared/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InboxService } from './inbox.service';
import { Mail, Message } from './inbox.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss'],
  providers: [InboxService]
})
export class MessageDetailsComponent {

  public isMessageSelected = true;
  mail: Mail[];
  message: Message;
  constructor(private elRef: ElementRef, private modalService: NgbModal, private inboxService: InboxService) {
    this.mail = this.inboxService.inbox.filter((mail: Mail) => mail.mailType === 'Inbox');
    this.message = this.inboxService.message.filter((message: Message) => message.mailId === 4)[0];
  }

  ngOnInit() {
    $.getScript('./assets/js/inbox.js');
  }

  DisplayMessage(event, mailId: number) {

    this.message = this.inboxService.message.filter((message: Message) => message.mailId.toString() === mailId.toString())[0];
    this.isMessageSelected = true;

    var hElement: HTMLElement = this.elRef.nativeElement;
    //now you can simply get your elements with their class name
    var allAnchors = hElement.querySelectorAll('.users-list-padding > a.list-group-item');
    //do something with selected elements
    [].forEach.call(allAnchors, function (item: HTMLElement) {
      item.setAttribute('class', 'list-group-item list-group-item-action no-border');
    });
    //set active class for selected item 
    event.currentTarget.setAttribute('class', 'list-group-item list-group-item-action bg-blue-grey bg-lighten-5 border-right-primary border-right-2');

  }

}
