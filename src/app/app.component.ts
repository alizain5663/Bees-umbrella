import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { backgroundColors, COLOR } from './Shared/background-colors-enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <app-footer (openModal)="openModal($event)"></app-footer>
`
})
export class AppComponent implements OnInit {
 
  @ViewChild('One') One:ElementRef | any;
  @ViewChild('Two') Two:ElementRef | any;
  @ViewChild('Three') Three:ElementRef | any;
  @ViewChild('Four') Four:ElementRef | any;
  public backgroundColor: string = '';
  public color:string = '';
  @HostListener('window:scroll') onWindowScroll() {
    const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const max = document.documentElement.clientHeight;
    console.log(max)
    // switch (true) {
    //   case scroll < max || scroll === 0:
    //     this.backgroundColor = backgroundColors.One;
    //     break;
    //   case scroll >= max:
    //     this.backgroundColor = backgroundColors.Two;
    //     break;
    // }
    if(scroll === 0){
      this.backgroundColor = backgroundColors.One;
      this.color = COLOR.One;
    }
    if (scroll > 1600) {
      this.backgroundColor = backgroundColors.Two;
      this.color = COLOR.Two;
    }
    // 1600
    if (scroll > 4700) {
      this.backgroundColor = backgroundColors.Three;
    }
    // 2400
    if (scroll > 5700) {
      this.backgroundColor = backgroundColors.Four;
    }
    // 3000
    if (scroll > 6100) {
      this.backgroundColor = backgroundColors.Five;
    }
  }
  // @HostListener('window:scroll', ['$event']) onWindowScroll(e:any) {
  //   var target = e.target || e.srcElement || e.currentTarget;
  //   console.log(target.attributes.id);
  //   // Your Code Here

  // }
  constructor( ) { }
 

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(this.One)
  }

}
