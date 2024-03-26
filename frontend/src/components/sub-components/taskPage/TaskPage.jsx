import React from 'react'
import FormSubmission from './Formsubmission';
import { FormProvider } from './FormContext';


const TaskPage = () => {
  return (
    <div>
        <FormProvider>
            <div>
            <FormSubmission />
            </div>
        </FormProvider>
    </div>
  )
}

export default TaskPage