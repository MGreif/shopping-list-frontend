import { Button, Checkbox, Input, InputWrapper } from '@mantine/core'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import classes from './NewListForm.module.css'
import { GenericForm } from './GenericForm'
type TNewListForm = {
    description: string
    editable: boolean,

}

export default () => {
    const navigate = useNavigate()

    return <div className={classes.container}>
      <GenericForm
        initialValues={{ description: '', editable: true }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("SU>BMIT")
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            navigate('/shared/abc')
            setSubmitting(false);
          }, 400);
        }}>
          {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }: any) => (
          <>
          <InputWrapper label="Description" >
            {console.log("description")}
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                placeholder="Shopping cart for sophis birthday"
                name="description"
              />
              {errors.description && touched.description && errors.description}
          </InputWrapper>
          <InputWrapper label="Editable">
              <Checkbox 
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.editable}
                name="editable"
              />
              {errors.editable && touched.editable && errors.editable}
          </InputWrapper>
          <Button type="submit" disabled={isSubmitting} style={{margin: "1em 0"}}>Create</Button>
          </>
        )
        }
      </GenericForm>
    </div>
}