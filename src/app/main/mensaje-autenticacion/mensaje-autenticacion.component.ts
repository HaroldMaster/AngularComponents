import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje-autenticacion',
  templateUrl: './mensaje-autenticacion.component.html',
  styleUrls: ['./mensaje-autenticacion.component.scss']
})
export class MensajeAutenticacionComponent implements OnInit, OnChanges {
  @Input()
  obtenerCheck: any;
  diasLogeados: number = 8
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
    
    
  }

}
