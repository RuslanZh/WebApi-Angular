import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myblog-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css']
})
export class LazyComponent implements OnInit {
  public lazyText: string;

  constructor() {
    this.lazyText = 'Lazy Text';
  }

  ngOnInit() {
  }

}
