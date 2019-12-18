import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Henry\'s coat';
  name: string="Carol Connor";
  itemList: string []=["item 1","item 2", "item 3", "item 4"];
  rectangle = {
    length: 5,
    width: 6,
    area: function() {
       return this.length * this.width;
    }
 }
}
