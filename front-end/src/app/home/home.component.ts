import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker'
import axios from "axios"

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	empleados: Array<any> = []

	

	title = 'Hoo'

	collectionSize: number
	page = 1;
	pageSize = 12;
	customers: Array<any> = []

	constructor() {
		this.collectionSize = this.customers.length / this.pageSize
	}
	async ngOnInit(): Promise<void> {
		axios.get("http://localhost:3000/users").then((res) => {
			this.customers = res.data.Empleado
			console.log(res.data.Empleado);
		})
	}

	refreshCountries() {
		this.customers = this.customers.map((country, i) => ({ id: i + 1, ...country }))
			.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
	}

}
