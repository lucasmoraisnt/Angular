import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parents-data',
  templateUrl: './parents-data.component.html',
  styleUrls: ['./parents-data.component.css']
})
export class ParentsDataComponent implements OnInit {
  @Input() name = '';
  @Input() userData!: { email: String; role: String };

  constructor() { }

  ngOnInit(): void {
  }

}
