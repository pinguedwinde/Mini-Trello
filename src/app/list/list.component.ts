import { List } from './../shared/model/list.model';
import { Component, Input, OnInit } from '@angular/core';
import { Item } from '@cocktail-store/shared/model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() list: List;
  public itemContent = '';

  constructor() {
    this.list = {
      label: '',
      items: [],
    };
  }

  ngOnInit(): void {}

  public addItem() {
    if (this.itemContent) {
      this.list.items.push({
        content: this.itemContent,
      });
    }
    this.itemContent = '';
  }

  public switchItems($event: { srcIndex: number; dstIndex: number }) {
    const tmp = this.list.items[$event.srcIndex];
    this.list.items[$event.srcIndex] = this.list.items[$event.dstIndex];
    this.list.items[$event.dstIndex] = tmp;
  }
}
