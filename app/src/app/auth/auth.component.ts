import { Component, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: false
})
export class AuthComponent implements OnInit, OnDestroy {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'bg-primary');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'bg-primary');
  }
}