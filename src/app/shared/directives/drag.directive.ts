import { DragEventData } from '@mini-trello/shared/model';
import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDrag]',
})
export class DragDirective {
  @Input('itemIndex') public itemIndex: number;
  @Input('listIndex') public listIndex: number;
  @Output() public switch: EventEmitter<DragEventData> = new EventEmitter();
  @Output() public transfer: EventEmitter<DragEventData> = new EventEmitter();

  @HostBinding('draggable') public draggable = true;
  @HostBinding('class.over') public isIn = false;

  @HostListener('dragenter') dragEnter() {
    this.isIn = true;
  }
  @HostListener('dragleave') dragLeave() {
    this.isIn = false;
  }
  @HostListener('dragstart', ['$event']) dragStart($event: DragEvent) {
    if (this.itemIndex && $event.dataTransfer) {
      $event.dataTransfer.setData('itemIndex', this.itemIndex.toString());
      $event.dataTransfer.setData('listIndex', this.listIndex.toString());
    }
  }
  @HostListener('drop', ['$event']) drop($event: DragEvent) {
    if (this.itemIndex && $event.dataTransfer) {
      this.isIn = false;
      const srcListIndex = +$event.dataTransfer.getData('listIndex');
      if (this.listIndex === srcListIndex) {
        this.switch.emit({
          src: {
            itemIndex: +$event.dataTransfer?.getData('itemIndex'),
          },
          dst: {
            itemIndex: this.itemIndex,
          },
        });
      } else {
        this.transfer.emit({
          src: {
            itemIndex: +$event.dataTransfer.getData('itemIndex'),
            listIndex: +$event.dataTransfer.getData('listIndex'),
          },
          dst: {
            listIndex: this.listIndex,
          },
        });
      }
    }
  }
  @HostListener('dragover', ['$event']) dragOver($event: DragEvent) {
    $event.preventDefault();
  }

  constructor() {
    this.itemIndex = 0;
    this.listIndex = 0;
  }
}
