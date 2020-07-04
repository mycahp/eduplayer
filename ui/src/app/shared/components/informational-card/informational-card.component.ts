import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informational-card',
  templateUrl: './informational-card.component.html',
  styleUrls: ['./informational-card.component.scss']
})
export class InformationalCardComponent implements OnInit {
  @Input() title: string;
  @Input() metric: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }

}
