import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderImgComponent } from './components/header-img/header-img.component';
import { ProductsComponent } from './components/products/products.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderImgComponent, ProductsComponent, ButtonsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina-web-tailwind';
}
