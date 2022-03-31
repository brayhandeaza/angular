import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as xlsx from "xlsx"

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
	closeResult = ''
	state: any = {}
	fileName: string = "./data.xlsx"

	@Input() hiddenHeader: any
	@Input() handlePrintValue: any
	@Input() open: any
	@Input() content: any

	constructor(private modalService: NgbModal) {

	}


	ngOnInit(): void {
		console.log(this.hiddenHeader);
		
	}

	handlePrint = (): void => {
		window.print()
	}

	handleExport = (): void => {
		let element = document.getElementById("table-ecxel")
		const ws: xlsx.WorkSheet = xlsx.utils.table_to_sheet(element)
		const wb: xlsx.WorkBook = xlsx.utils.book_new()

		xlsx.utils.book_append_sheet(wb, ws, "Sheet1")
		xlsx.writeFile(wb, this.fileName)
	}



	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC'
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop'
		} else {
			return `with: ${reason}`
		}
	}

	handleCreateOrder = (): void => {
		this.open(this.content)
	}
}
