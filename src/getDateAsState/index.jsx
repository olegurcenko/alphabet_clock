import React, { useState, useEffect } from 'react';
import { Algoritm } from '../algoritm/from0to19';


export function CurrentDate() {
	const [date, setDate] = useState(new Date());
	let prevMinute = -1; // Initialize with an invalid minute
  
	useEffect(() => {
	  const timer = setInterval(() => {
		const newDate = new Date();
		setDate(newDate);
		checkMinuteChange(newDate);
	  }, 1000);
  
	  return () => {
		clearInterval(timer);
	  };
	}, []);
  
	const checkMinuteChange = (newDate) => {
	  const currentMinute = newDate.getMinutes();
	  if (currentMinute !== prevMinute) {
		Algoritm(newDate.toTimeString().slice(0, 5));
		prevMinute = currentMinute;
	  }
	};
  
	//const Algorithm = (newDate) => {
	//  // Your algorithm implementation here
	////  console.log('Minute has changed:', newDate);
	//};

  return (
    date
  );
}