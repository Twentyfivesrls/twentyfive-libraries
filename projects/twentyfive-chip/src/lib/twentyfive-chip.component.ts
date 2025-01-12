import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChipTheme} from "twentyfive-style";

@Component({
  selector: 'lib-twentyfive-chip',
  templateUrl: './twentyfive-chip.component.html',
  styleUrls: ['./twentyfive-chip.component.scss']
})
export class TwentyfiveChipComponent {

  @Input() chipText: string = 'Testo della chip';
  @Input() chipIcon: string = 'bi bi-tag';
  @Input() chipImg: string = '';
  @Input() closeableChip: boolean = true;
  @Input() showIcon: boolean = false;
  @Input() showImg: boolean = false;

  @Input() chipStyle: any;
  @Input() customCssClass: string = '';

  @Output() closeChip: EventEmitter<any> = new EventEmitter<any>();


  iconClicked() {
    this.closeChip.emit();
  }

  protected readonly ChipTheme = ChipTheme;
}
