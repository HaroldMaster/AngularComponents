import { Component, OnInit, Output,Input, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-remember',
  templateUrl: './remember.component.html',
  styleUrls: ['./remember.component.scss']
})
export class RememberComponent implements OnInit, OnChanges {
  @Output()
  estadoCheck: EventEmitter<any> = new EventEmitter();

  mensajeInicial: string = 'Presiona'
  check: boolean = false;
  constructor() { }
  ngOnChanges(){
    console.log('hola');
  }
  ngOnInit(): void {
  }
  enviarEstado(event:any){
    //console.log("tipo",typeof(event.target.checked));
    //this.estadoCheck = event.target.checked;
    this.check = event.target.checked
    this.estadoCheck.emit(this.check);
  }
}
