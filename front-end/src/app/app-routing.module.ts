import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
	{ path: "", component: MainComponent },
	{ path: "table", component: HomeComponent },
	{ path: "calculadora", component: CalculadoraComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingCompinents = [HomeComponent, FooterComponent, CalculadoraComponent, MainComponent]
