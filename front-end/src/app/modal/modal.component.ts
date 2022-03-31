import { Component, OnInit, Output } from '@angular/core'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { faTag, faCircleUser, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})


export class ModalComponent implements OnInit {
	closeResult = ''
	faPerson = faCircleUser
	faWarehouse = faTag
	faClock = faClock
	state: any = {}
	inputs: Array<string> = ["nombre", "apellido", "direccion", "cedula", "dob", "sueldo"]

	constructor(private modalService: NgbModal) {

	}

	ngOnInit(): void { }

	open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true }).result.then((result) => {
			this.closeResult = `Closed with: ${result}`
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
		})
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

	handleDobFormat(data: string): string {
		if (data === "dob") {
			return "Fecha De Nacimiento"
		}
		return data
	}

	


	handlePrint = (): void => {
	}

	handleExport = (): void => {
	}

	handleCreateOrder = (): void => {
	}

	handleOnChanche = (e: any): void => {
		this.state[e.target.name] = e.target.value
	}

	handleClick = async (): Promise<void> => {
		const { nombre, apellido, direccion, cedula, dob, sueldo } = this.state
		if (nombre || apellido || direccion || cedula || dob || sueldo) {
			await axios.post("http://localhost:3000/users", { nombre, apellido, direccion, cedula, dob, sueldo }).then((res) => {
				// console.log(res.data);
				window.location.reload()

			}).catch((err) => {
				console.log(err)
			})
		} else {
			console.log("False")
		}
	}
}
