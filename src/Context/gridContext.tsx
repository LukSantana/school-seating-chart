import React, { createContext, useContext, useState } from 'react';
import { ErrorContext } from './errorContext';
import { generateStudentsArray } from '../Utils/generateStudentsArray';

interface GridContextProps {
  studentsArray: string[]
  chairs: number;
  rows: number;
  setStudentsArray: (studentsArray: string[]) => void,
  setChairs: (chairs: number) => void;
  setRows: (rows: number) => void;
  generateGrid: (e: any) => void;
  updateStudentName: (studentName:string, studentIndex: number) => void;
  swapElements: (index1: number, index2: number) => void
}

export const GridContext = createContext<GridContextProps>({
  studentsArray: [],
  chairs: 0,
  rows: 0,
  setStudentsArray: () => {},
  setChairs: () => {},
  setRows: () => {},
  generateGrid: () => {},
  updateStudentName: () => {},
  swapElements: () => {}
});

const GridContextProvider = ({ children }: any) => {
  const { setError, setErrorMessage } = useContext(ErrorContext)

  const [studentsArray, setStudentsArray] = useState<string[]>(['']);
  const [chairs, setChairs] = useState<number>(0);
  const [rows, setRows] = useState<number>(0);

	const generateGrid = (e: any): void => {
		e.preventDefault();
		if(Number(chairs) <= 0 || Number(rows) <= 0){
			setError(true);
			setErrorMessage('Insira o número de fileiras e cadeiras.');
      return;
		};

    if(Number(chairs) > 6 || Number(rows) > 6){
			setError(true);
			setErrorMessage('Insira um número de 1 a 6 para fileiras e cadeiras.');
      return;
		};

    setError(false);

    const generatedStudentsArray = generateStudentsArray(Number(chairs) * Number(rows))

    setStudentsArray(generatedStudentsArray);
	}

  const updateStudentName = (studentName:string, studentIndex:number) =>{
    let copyStudentsArray = [...studentsArray]
    copyStudentsArray[studentIndex] = studentName;
    setStudentsArray(copyStudentsArray);
  }

  function swapElements(index1: number, index2: number): void {
    let copyStudentsArray = [...studentsArray]
    const temp = copyStudentsArray[index1];
    copyStudentsArray[index1] = copyStudentsArray[index2];
    copyStudentsArray[index2] = temp;
    setStudentsArray(copyStudentsArray);
  }
  

  return (
    <GridContext.Provider
      value={{studentsArray, setStudentsArray, chairs,setChairs, rows, setRows, generateGrid, updateStudentName, swapElements}}
    >
      {children}
    </GridContext.Provider>
  );
};

export default GridContextProvider;