import { Component, EventEmitter, Output } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  @Output() public myobj = new EventEmitter;

  public Value : any = "";

  public fun(No : any)
  {
    this.myobj.emit(No);
  }
  
}

