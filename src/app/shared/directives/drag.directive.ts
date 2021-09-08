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
  @Output() public switch: EventEmitter<DragEventData> = new EventEmitter();

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
      $event.dataTransfer.setData('srcIndex', this.itemIndex.toString());
    }
  }
  @HostListener('drop', ['$event']) drop($event: DragEvent) {
    if (this.itemIndex && $event.dataTransfer) {
      this.isIn = false;
      this.switch.emit({
        src: {
          itemIndex: +$event.dataTransfer?.getData('srcIndex'),
        },
        dst: {
          itemIndex: this.itemIndex,
        },
      });
    }
  }
  @HostListener('dragover', ['$event']) dragOver($event: DragEvent) {
    $event.preventDefault();
  }

  constructor() {
    this.itemIndex = 0;
  }
}
