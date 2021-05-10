import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit, ViewChild, AfterViewInit, ChangeDetectorRef, ContentChild } from '@angular/core';
import { MensajeAutenticacionComponent } from './mensaje-autenticacion/mensaje-autenticacion.component';
import { RememberComponent } from './remember/remember.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterContentInit, AfterViewInit {
  @ContentChild(RememberComponent, {static:true}) 
  remember: RememberComponent | null = null;
 
  @Input()
   checkBoxEstado: boolean = false;
  constructor(private cd: ChangeDetectorRef) { }
  ngAfterViewInit(){
    

  }
  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
   // console.log(this.remember)
   
    
  }
  enviarUsuario(form: any){
    console.log(form, this.checkBoxEstado);
  }

}
