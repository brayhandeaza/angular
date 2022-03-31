import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-calculadora',
	templateUrl: './calculadora.component.html',
	styleUrls: ['./calculadora.component.scss']
})

export class CalculadoraComponent implements OnInit {

	buttons: Array<any> = [
		"C", "+/-", "%", "/",
		7, 8, 9, "X",
		4, 5, 6, "-",
		1, 2, 3, "+",
		0, ".", "="
	]

	result: string = "0"
	leftNumber: number = 0
	symbol: string = ""

	ngOnInit(): void {
	}

	handleLightButton(index: number): string {
		switch (index) {
			case 0:
			case 1:
			case 2:
				return "light"
			default:
				if ((index + 1) % 4 == 0) {
					return 'yellow'
				}
				return 'dark'
		}
	}

	handleOnClick(e: any): void {
		if (this.result.length >= 10 && e.target.name != "C") return
		if (this.result == "0" && e.target.name != "C" && e.target.name != ".") {
			this.result = e.target.name
		} else {
			switch (e.target.name) {
				case "C":
					this.result = "0"
					this.symbol = ""
					this.leftNumber = 0
					break;
				case "+/-":
				case "%":
				case "X":
				case "-":
				case "+":
				case "/":
					this.leftNumber = parseFloat(this.result)
					this.symbol = e.target.name
					break;
				case ".":
					if (this.result === "0") {
						this.result = "0" + e.target.name
					} else if (!this.result.includes(".")) {
					}

					break
				case "=":
					if (this.leftNumber > 0 && this.symbol) {
						switch (this.symbol) {
							case "+":
								this.result = (this.leftNumber + parseFloat(this.result)) + ""
								break;
							case "X":
								this.result = (this.leftNumber * parseFloat(this.result)) + ""
								break;
							case "/":
								this.result = (this.leftNumber / parseFloat(this.result)) + ""
								break;
							case "-":
								this.result = (this.leftNumber - parseFloat(this.result)) + ""
								break;
						}
					}
					break
				default:
					if (this.symbol != "") {
						this.result = e.target.name
					} else {
						this.result += e.target.name
					}
					break
			}
		}
		console.log(this.leftNumber, this.symbol);

	}

	numberWithCommas(x: string): string {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}
}
