import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'sb-nav-fixed');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'sb-nav-fixed');
  }
}
