import { Component, OnInit, Input } from '@angular/core';
import { FeedItem } from 'src/app/core/models/feed-item';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss']
})
export class FeedItemComponent implements OnInit {

  @Input() feedItem: FeedItem;

  constructor() { }

  ngOnInit(): void {
  }

}
