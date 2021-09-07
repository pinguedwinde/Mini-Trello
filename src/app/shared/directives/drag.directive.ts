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
  @Input('index') public index: number | undefined;
  @Output() public switch: EventEmitter<{
    srcIndex: number;
    dstIndex: number;
  }> = new EventEmitter();

  @HostBinding('draggable') public draggable = true;
  @HostBinding('class.over') public isIn = false;

  @HostListener('dragenter') dragEnter() {
    this.isIn = true;
  }
  @HostListener('dragleave') dragLeave() {
    this.isIn = false;
  }
  @HostListener('dragstart', ['$event']) dragStart($event: DragEvent) {
    if (this.index && $event.dataTransfer) {
      $event.dataTransfer.setData('srcIndex', this.index.toString());
    }
  }
  @HostListener('drop', ['$event']) drop($event: DragEvent) {
    if (this.index && $event.dataTransfer) {
      this.isIn = false;
      this.switch.emit({
        srcIndex: +$event.dataTransfer?.getData('srcIndex'),
        dstIndex: this.index,
      });
    }
  }
  @HostListener('dragover', ['$event']) dragOver($event: DragEvent) {
    $event.preventDefault();
  }

  constructor() {}
}
