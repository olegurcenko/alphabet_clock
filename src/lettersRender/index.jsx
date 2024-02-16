import { useEffect } from "react";
import { CurrentDate } from "../getDateAsState";
import { Matrix } from "../lettersMatrix";
import styles from './css/lettersRender.module.css'

export const Render = () => {
	const rows = [];
	let i = 0;
	while (Matrix[i]) {
		rows.push(
			Matrix[i].map((letter) => <li className={letter.active ? styles.activeLetter : styles.usualLetter} >{letter.letter}</li>)
		)
		i++
	}

	CurrentDate()
	const newResult = rows.map((row) => <ul>{row}</ul>)
	return (
	<section className={styles.matrixBlock}>
		{newResult}
		{/*<CurrentDate/>*/}
	</section>	
	)
}