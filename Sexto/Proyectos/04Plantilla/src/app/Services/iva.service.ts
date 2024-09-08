import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IIVA } from '../Interfaces/iiva'; // Asegúrate de definir la interfaz IIVA

@Injectable({
  providedIn: 'root'
})
export class IvaService {
  apiurl = 'http://localhost/sexto/Proyectos/03MVC/controllers/iva.controller.php?op=';

  constructor(private lector: HttpClient) {}

  // Método para obtener todos los registros de IVA
  todos(): Observable<IIVA[]> {
    return this.lector.get<IIVA[]>(this.apiurl + 'todos');
  }
}
