import { StudentCardContainer, InputContainer } from './styles'

import { useContext, useRef } from 'react';
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd'
import { BsPersonFill } from "react-icons/bs";

import { GridContext } from '../../Context/gridContext';

import InputComponent from '../InputComponent';

interface StudentCardProps{
  studentName: string;
  studentIndex: number;
}

const StudentCard = ({studentName, studentIndex}: StudentCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const {updateStudentName, swapElements} = useContext(GridContext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { studentIndex: studentIndex, studentName: studentName},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const [{ handlerId }, drop] = useDrop(() => ({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover: (item:StudentCardProps, monitor:DropTargetMonitor) => {
      const dragIndex = item.studentIndex
      const hoverIndex = studentIndex

      if (dragIndex === hoverIndex) {
        return
      }

      swapElements(dragIndex, hoverIndex)
    }
  }))

  drag(drop(ref))

  return (
    <StudentCardContainer isDragging={isDragging} ref={ref} data-handler-id={handlerId}>
      <BsPersonFill size="7rem"/>
      <InputContainer>
      <InputComponent 
      name={`input-card-aluno-${studentIndex}`} 
      type='text' 
      value={studentName}
      onChange={(e) => {
        e.preventDefault()
        updateStudentName(e.target.value, studentIndex)
      }}
      />
      </InputContainer>
    </StudentCardContainer>
  )
}

export default StudentCard