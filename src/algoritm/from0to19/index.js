import { Matrix } from "../../lettersMatrix";
import { CurrentDate } from "../../getDateAsState";
import { Hodiny, MinutyDeset, MinutyNavic } from "./dataForAlgorithm";

export const Algoritm = (dateStr) => {
	const deActivate = () => {
		let i = 0;
		while (Matrix[i]) {
			let j = 0;
			while (Matrix[i][j]) {
				Matrix[i][j++].active = false;
			}
			i++;
		}
	}

	const execFunc = (arrayToExec) => {
		let i = 0;
		while (arrayToExec[i]) {
			Matrix[arrayToExec[i][0]][arrayToExec[i++][1]].active = true
			}
	}

	deActivate()

	execFunc(Hodiny[dateStr.slice(0,2)])

	if (Math.floor(parseInt(dateStr.slice(3, 5)) / 5) % 2 != 0) {
		if (dateStr[3] == '1') {
			execFunc(MinutyNavic['15'])
		} else {
			execFunc(MinutyDeset[dateStr[3]]);
			execFunc(MinutyNavic['5']);
		}
	} else {
		execFunc(MinutyDeset[dateStr[3]])
	}
}