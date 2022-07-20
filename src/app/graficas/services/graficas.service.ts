import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(
    private _http: HttpClient
  ) { }

  getUsuariosRedesSociales() {
    return this._http.get('http://localhost:3000/grafica');
  }

  getUsuariosRRSSData()  {
    return this.getUsuariosRedesSociales()
      .pipe(
        delay(1000),
        map(
          data => {
            const labels = Object.keys( data );
            const values = Object.values( data );
            return { labels, values };
          }
        )
      );
  }
}
