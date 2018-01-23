import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-numeric-up-down',
  templateUrl: './numeric-up-down.component.html',
  styleUrls: ['./numeric-up-down.component.scss']
})
export class NumericUpDownComponent implements OnInit {

  @Input()
  val = 0;

  @Input()
  minVal = 0;

  @Input()
  maxVal = 0;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  up() {
    if (this.val < this.maxVal) {
      this.val++;
      this.change.emit(this.val);
    }
  }
  down() {
    if (this.val > this.minVal) {
      this.val--;

      this.change.emit(this.val);
    }
  }
}
