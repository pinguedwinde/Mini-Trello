import { DragEventData, List } from '@mini-trello/shared/model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() lists: List[];
  @Input() listIndex: number;
  @Output() transfer: EventEmitter<DragEventData> = new EventEmitter();
  public list: List;
  public itemContent = '';

  constructor() {
    this.lists = [];
    this.listIndex = 0;
    this.list = {
      label: '',
      items: [],
    };
  }

  ngOnInit(): void {
    this.list = this.lists[this.listIndex];
  }

  public addItem() {
    if (this.itemContent) {
      this.list.items.push({
        content: this.itemContent,
      });
    }
    this.itemContent = '';
  }

  public switchItems($event: DragEventData) {
    if (
      $event.src?.itemIndex !== undefined &&
      $event.dst?.itemIndex !== undefined
    )
      [
        this.list.items[$event.src.itemIndex],
        this.list.items[$event.dst.itemIndex],
      ] = [
        this.list.items[$event.dst.itemIndex],
        this.list.items[$event.src.itemIndex],
      ];
  }

  public transferItem($event: DragEventData) {
    this.transfer.emit($event);
  }
}
