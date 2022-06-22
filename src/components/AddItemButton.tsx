import { Autocomplete, Button, InputWrapper } from "@mantine/core"
import { createRef, useEffect, useRef, useState } from "react"
import { mockBuyableItem } from "../libs/mockGenerator"
import { IBuyableItem } from "./ListItem"
import classes from './AddItemButton.module.css'
const buyableItems: IBuyableItem[] = Array(100).fill(null).map(e => mockBuyableItem())

interface IAddItemButtonProps {
    onAdd: (buyableItem: IBuyableItem) => void
}

// Todo POST changes when added

export default ({ onAdd }: IAddItemButtonProps) => {
    const [item, setItem] = useState<IBuyableItem | null>(null)
    const handleChange = (item: (IBuyableItem & { value: string })) => {
        setItem(item)
    }
    
    const handleButtonClick = () => {

        if (!item) return
        onAdd(item)
        setItem(null)

    }

    return <InputWrapper label="Add Items">
        <div className={classes.container}>
        <Autocomplete
            placeholder='Banana, Snickers, Whiskey ....'
            data={buyableItems.map(x => ({...x, value: x.name, fluid: x.fluid.toString()}))}
            onItemSubmit={handleChange}
            onChange={() => setItem(null)}
            defaultValue=""
        />
        { item && <Button onClick={handleButtonClick}>+</Button>}
        </div>

    </InputWrapper>
}