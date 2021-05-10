import { AfterContentInit, Component, OnChanges, ViewChild, ContentChildren, QueryList, AfterViewInit, ContentChild, ElementRef, ChangeDetectorRef, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { MainComponent } from './main/main.component';
import { MensajeAutenticacionComponent } from './main/mensaje-autenticacion/mensaje-autenticacion.component';
import { RememberComponent } from './main/remember/remember.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //implements AfterViewInit, AfterContentInit, AfterViewChecked {
  @ViewChild(RememberComponent, {static:true}) 
  remember !: RememberComponent;
  @ViewChild(MainComponent, {static:true}) 
  main !: MainComponent
  @ViewChild(MensajeAutenticacionComponent, {static:false}) 
  mensaje !: MensajeAutenticacionComponent
   //Funciona pero tiene que estar visible
  /*@ViewChild(MensajeAutenticacionComponent, {static:false, read:MensajeAutenticacionComponent})  set content(content: MensajeAutenticacionComponent) {
    if(content) { // initially setter gets called with undefined
      content.diasLogeados=88;  
      console.log("set view",content)
     }
 }*/

  title = 'ng-content';
  estadoBox: boolean= false;
  constructor(private cd: ChangeDetectorRef){}


  /* Descomentar esto
  ngAfterContentInit(){
    
    console.log('Content',this.remember)
    console.log('Content',this.main)
    console.log('Content',this.mensaje)
  }
  ngAfterViewInit(){
    console.log('View',this.remember)
    console.log('View',this.main)
    console.log('View',this.mensaje)
  }
  ngAfterViewChecked(): void {
    if(this.mensaje) this.mensaje.diasLogeados =32;
    this.cd.detectChanges();
     console.log('View checked',this.mensaje)
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    
  }*/
  obtenerEstadoCheck(event:any){
    this.estadoBox = event
  }
}
