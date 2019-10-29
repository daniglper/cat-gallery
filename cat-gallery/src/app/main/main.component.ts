import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  protected listaGatos: any;

  protected urlImagen: String;

  constructor(private _restService: RestService) { }

  ngOnInit() {
    this.getRazas();
  }

  protected seleccionaGato(selected: String): void {
    this.urlImagen = undefined;
    if (selected !== '0') {
      this._restService.getInfo(selected).toPromise().then(
        response => {
          this.urlImagen = response && response.length > 0 ? response[0].url : undefined;
        }
      ).catch(error => console.log("ERROR: " + error));

    }
  }

  private getRazas(): void {
    this._restService.getRazas().toPromise().then(
      razas => {
        this.listaGatos = razas;
      }
    ).catch(error => console.log("ERROR: " + error));
  }
}
