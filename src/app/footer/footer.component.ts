import { compileNgModule } from '@angular/compiler';
import { Component, OnInit,  } from '@angular/core';
import { ModalContentType } from '../Shared/modal-enums';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  ModalContentType = ModalContentType;

  selectedModalContent: ModalContentType | undefined;
  onButtonClick(buttonType: ModalContentType) {
    console.log('Button clicked:', buttonType);
    this.selectedModalContent = buttonType;
    console.log();
  }
  
 
}
