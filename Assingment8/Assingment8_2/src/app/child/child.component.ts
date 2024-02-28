import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
    @Input() public Name = "";

  @Output() public obj = new EventEmitter;

  Senddata()
  {
      this.obj.emit("Hello From Child");
  }

}
