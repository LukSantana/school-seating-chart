import { useContext } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CloseAlertButton, ErrorAlertContainer, ErrorAlertMessage } from './styles'
import { ErrorContext } from "../../Context/errorContext";

interface ErrorAlertProps {
  errorMessage: string | undefined;
}

const ErrorAlert = ({errorMessage}: ErrorAlertProps) => {
  const {setError} = useContext(ErrorContext);

  const handleCloseAlert = () => {
    setError(false);
  }

  return (
    <ErrorAlertContainer>
      <ErrorAlertMessage>
      {errorMessage}
      </ErrorAlertMessage>
      <CloseAlertButton onClick={handleCloseAlert}>
        <AiOutlineCloseCircle size="1.5rem" color='white'/>
      </CloseAlertButton>
    </ErrorAlertContainer>
  )
}

export default ErrorAlert