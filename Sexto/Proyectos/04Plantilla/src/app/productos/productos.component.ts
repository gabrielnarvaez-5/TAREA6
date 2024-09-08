import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../theme/shared/shared.module';
import { RouterLink } from '@angular/router';
import { IProducto } from '../Interfaces/iproducto';
import { ProductoService } from '../Services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit {
  listaproductos: IProducto[] = [];

  constructor(private prodcutoServicio: ProductoService) {}

  ngOnInit(): void {
    this.cargaproductos();
  }

  cargaproductos() {
    this.prodcutoServicio.todos().subscribe((data) => {
      this.listaproductos = data;
      console.log(data);
    });
  }
  trackByFn() {}

  eliminar(idProductos) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el producto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.prodcutoServicio.eliminar(idProductos).subscribe((data) => {
          this.cargaproductos();
        });
        Swal.fire('Eliminado', 'El producto ha sido eliminado', 'success');
      } else {
        Swal.fire('Error', 'Ocurrio un erro', 'error');
      }
    });
  }

  verDescripcionProv(event: Event, producto: IProducto) {
    const input = event.target as HTMLInputElement;
    producto.Nombre_Producto = input.value;
  }

  actualizarProducto(producto: IProducto) {
    this.prodcutoServicio.actualizar(producto).subscribe(
      (response) => {
        Swal.fire('Actualizado', 'El producto ha sido actualizado', 'success');
        this.cargaproductos(); // Recargar productos para reflejar los cambios
      },
      (error) => {
        Swal.fire('Error', 'Ocurrió un error al actualizar el producto', 'error');
        console.error('Error al actualizar producto:', error);
      }
    );
  }
  
}
