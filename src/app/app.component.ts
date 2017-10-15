import { Component, HostBinding, OnDestroy, OnInit,ViewEncapsulation  } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
//import {MatChipsModule} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false
})
export class AppComponent {
  @HostBinding('class') componentCssClass;
  title = 'Custom Material Theme';

 //  constructor(
 //   public overlayContainer: OverlayContainer,
 //   //private store: Store<any>
 // ) {}


 ngOnInit(): void {
     //this.overlayContainer.getContainerElement().classList.add(""theme"");
    }

}
