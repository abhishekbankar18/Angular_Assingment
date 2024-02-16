import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})

export class DemoComponent 
{
    public Name : string = "";

    public fun()
    {
      this.Name = "Educating for Better tommorrow";
    }
}
