import { Button, Checkbox, Input, InputWrapper } from '@mantine/core'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import classes from './NewListForm.module.css'

type TNewListForm = {
    description: string
    editable: boolean,

}

export default () => {
    const [data, setData] = useState<TNewListForm>({
        description: "",
        editable: false
    })
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/shared/abc')
    }

    console.log(data)

    return <div className={classes.container}>
        <InputWrapper label="Description" >
            <Input onChange={(e: any) => setData({...data, description: e.target.value})} />
        </InputWrapper>
        <InputWrapper label="Editable">
            <Checkbox onChange={(e: any) => setData({...data, editable: e.target.checked})}/>
        </InputWrapper>
        <Button style={{margin: "1em 0"}} onClick={handleClick}>Create</Button>
    </div>
}