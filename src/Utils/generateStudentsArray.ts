export const generateStudentsArray = (studentsNumber: number) => {
  const studentsArray: string[] = [];

  for(let i = 1; i <= studentsNumber; i++){
    const studentName: string = `Aluno ${i}`;
    
    studentsArray.push(studentName);
  }

  return studentsArray;
}