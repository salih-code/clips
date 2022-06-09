import { Directive } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appEventBlocker]',
})
export class EventBlockerDirective {
  @HostListener('drop', ['$event'])
  @HostListener('dragover', ['$event'])
  public handleEvent(event: Event) {
    event.preventDefault();
  }
  constructor() {}
}
