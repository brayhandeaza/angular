import { Component, OnInit, Input } from '@angular/core'
import * as moment from 'moment'

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
	@Input() customers: Array<any> = []
	page = 1;
	pageSize = 2;
	collectionSize: any

	formatSueldo(price: number): string {
		return price.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		})
	}

	formatDate(date: string): string { 
		return moment(date).format("lll")
	 }
	
	ngOnInit(): void {
		this.collectionSize = this.customers.length / this.pageSize
		console.log(this.collectionSize)
	}

	
	refreshCountries() {
		console.log(this.page);
		this.customers = this.customers.map((country, i) => ({ id: i + 1, ...country }))
			.slice((this.page - 1) * this.pageSize, -1);
	}

}
