import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IClip from '../models/clip.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-clip',
  templateUrl: './clip.component.html',
  styles: [],
  providers: [DatePipe],
})
export class ClipComponent implements OnInit {
  clip?: IClip;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.clip = data['clip'];
    });
  }
}
