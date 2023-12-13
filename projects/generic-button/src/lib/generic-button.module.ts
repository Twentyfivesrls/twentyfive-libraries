import {NgModule} from '@angular/core';
import {GenericButtonComponent} from './generic-button.component';
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule, RouterOutlet} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {GenericButtonOnlyIconComponent} from "./generic-button-only-icon.component";
import {GenericButtonTextWithIconComponent} from "./generic-button-text-with-icon.component";
import {GenericRadioButtonComponent} from "./generic-radio-button.component";


@NgModule({
  declarations: [
    GenericButtonComponent,
    GenericButtonOnlyIconComponent,
    GenericButtonTextWithIconComponent,
    GenericRadioButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot([]),
    RouterOutlet,
  ],
  exports: [
    GenericButtonComponent,
    GenericButtonOnlyIconComponent,
    GenericButtonTextWithIconComponent,
    GenericRadioButtonComponent
  ]
})
export class GenericButtonModule {
}
