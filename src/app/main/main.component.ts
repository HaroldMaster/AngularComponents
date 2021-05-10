import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit, ViewChild, AfterViewInit, ChangeDetectorRef, ContentChild, ElementRef, AfterContentChecked } from '@angular/core';
import { MensajeAutenticacionComponent } from './mensaje-autenticacion/mensaje-autenticacion.component';
import { RememberComponent } from './remember/remember.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements AfterContentInit, AfterContentChecked {
  @ContentChild(RememberComponent, {static:true}) 
  remember !: RememberComponent;
  @ContentChild('prueba', {static:false}) 
  prueba !: ElementRef;
 
  @Input()
   checkBoxEstado: boolean = false;
  constructor(private cd: ChangeDetectorRef) { }
  ngAfterContentInit(){
    if(this.prueba) {
      this.prueba.nativeElement.innerHTML = "Cambiando la prueba"
    console.log('Prueba Init', this.prueba.nativeElement.innerHTML)
    }
    
   /// console.log('contrasena', this.contra)
   /* if(this.remember) this.remember.mensajeInicial='Presionalo';
    console.log('init', this.remember)*/
  }
  ngAfterContentChecked(): void {
    if(this.prueba) {
      this.prueba.nativeElement.innerHTML = "Cambiando la prueba 1"
    console.log('Prueba Init', this.prueba.nativeElement.innerHTML)
    }
   /* if(this.remember) this.remember.mensajeInicial='Presionalo';
    console.log('checked', this.remember)*/
  }
  
  ngOnInit(): void {
  }

  enviarUsuario(form: any){
    console.log(form, this.checkBoxEstado);
  }

}
