import { Component } from '@angular/core';
import { DragEventData, List } from './shared/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Mini Trello';
  public listLabel = '';
  public lists: List[] = [
    {
      label: 'To be Done',
      items: [
        {
          content: 'Create the directive for implementing the Drag and Drop',
        },
        {
          content: 'Test the Drag and Drop feature',
        },
      ],
    },
    {
      label: 'In progress',
      items: [
        {
          content: 'Create List Component',
        },
        {
          content: 'Add list items',
        },
        {
          content: 'Display lists int the app',
        },
        {
          content: 'Add drag and drop feature',
        },
      ],
    },

    {
      label: 'To be tested',
      items: [
        {
          content: 'Create List Component',
        },
        {
          content: 'Material feature',
        },
      ],
    },
    {
      label: 'Done',
      items: [
        {
          content: 'Init Angular mini Trello app',
        },
        {
          content: 'Init git for versionning in the projet',
        },
        {
          content: 'Add  README.md',
        },
        {
          content: 'Config App with Material and FlexLayout',
        },
      ],
    },
  ];

  public addList() {
    if (this.listLabel) {
      this.lists.push({
        label: this.listLabel,
        items: [],
      });
    }
    this.listLabel = '';
  }

  public transferItem($event: DragEventData) {
    console.log('treanfer app.comp');

    if (
      $event.src?.itemIndex !== undefined &&
      $event.dst?.itemIndex !== undefined &&
      $event.src?.listIndex !== undefined &&
      $event.dst?.listIndex !== undefined
    ) {
      this.lists[$event.dst.listIndex].items.push(
        this.lists[$event.src.listIndex].items[$event.src.itemIndex]
      );
      this.lists[$event.src.listIndex].items.splice($event.src.itemIndex, 1);
    }
  }
}
