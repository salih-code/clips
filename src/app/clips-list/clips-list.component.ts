import { DatePipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import IClip from '../models/clip.model';
import { ClipService } from '../services/clip.service';

@Component({
  selector: 'app-clips-list',
  templateUrl: './clips-list.component.html',
  styles: [],
  providers: [DatePipe],
})
export class ClipsListComponent implements OnInit, OnDestroy {
  clips: IClip[] = [];
  @Input() scrollable = true;

  constructor(private clipsService: ClipService) {}

  ngOnInit(): void {
    this.clipsService.getClips();
    this.clips = this.clipsService.pageClips;
    if (this.scrollable) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  ngOnDestroy(): void {
    if (this.scrollable) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = () => {
    const { scrollTop, offsetHeight } = document.documentElement;
    const { innerHeight } = window;

    const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight;

    if (bottomOfWindow) {
      this.clipsService.getClips();
      this.clips = this.clipsService.pageClips;
    }
  };
}
