import React, { useContext, useEffect } from 'react'
import { SeatingChartContainer } from './styles'
import { GridContext } from '../../Context/gridContext'
import StudentCard from '../StudentCard';

const SeatingChart = () => {
  const {chairs, rows, studentsArray} = useContext(GridContext);

  useEffect(() => {

  }, [studentsArray])

  return (
    <SeatingChartContainer chairs={chairs} rows={rows}>
      {studentsArray.length > 1 && 
      studentsArray.map((student, index) => 
      <StudentCard 
        key={index} 
        studentName={student} 
        studentIndex={index}
      />)}
    </SeatingChartContainer>
  )
}

export default SeatingChart