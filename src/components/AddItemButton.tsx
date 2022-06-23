import { Autocomplete, Button, InputWrapper, Text } from "@mantine/core"
import { createRef, forwardRef, useEffect, useRef, useState } from "react"
import { mockBuyableItem } from "../libs/mockGenerator"
import { IBuyableItem } from "./ListItem"
import classes from './AddItemButton.module.css'
import { Group } from "@mantine/core"
import CreateItemButton from "./CreateItemButton"
const buyableItems: IBuyableItem[] = Array(100).fill(null).map(e => mockBuyableItem())

interface IAddItemButtonProps {
    onAdd: (buyableItem: IBuyableItem) => void
}

// Todo POST changes when added

export default ({ onAdd }: IAddItemButtonProps) => {
    const [searchTerm, setSearchTerm] = useState<string | undefined>()
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [item, setItem] = useState<IBuyableItem & { value: string}>()
    const handleChange = (item: (IBuyableItem & { value: string })) => {
      if (item?.id === "add-button") {
        setModalOpen(true)
      } else {
        setItem(item)
      }
    }


    const AutoCompleteItem = forwardRef<HTMLDivElement, IBuyableItem>(
      ({ category, fluid, id, name, ...others }: IBuyableItem, ref) => (
        <div ref={ref} {...others}>
          {
            id !== "add-button" ? (
              <Group noWrap>
            <span>I</span>

            <div>
              <Text>{name}</Text>
              <Text size="xs" color="dimmed">
                {id}
              </Text>
            </div>
          </Group>
            ) :
            <div className={classes.autocompleteAdd}>
              <span>+</span>
            </div>
          }
          
        </div>
      )
    );

    const handleModalSubmit = (values: IBuyableItem) => {
      buyableItems.unshift(values)
      setModalOpen(false)
    }
    
    const handleButtonClick = () => {

      const item = buyableItems.find(i => i.name === searchTerm)
      if (!item) return
      onAdd(item)
      setSearchTerm("")
      setItem(undefined)
    }

    return <InputWrapper label="Add Items">
        <div className={classes.container}>
        <CreateItemButton
          open={modalOpen}
          close={() => setModalOpen(false)}
          onSubmit={handleModalSubmit}
          defaultValues={{name: searchTerm}}  
        />
        <Autocomplete
            placeholder='Banana, Snickers, Whiskey ....'
            itemComponent={AutoCompleteItem}
            data={[
              ...buyableItems.map(x => ({...x, value: x.name, fluid: x.fluid.toString()})),
              { value: searchTerm || "", id: "add-button" }
            ]}
            onItemSubmit={handleChange}
            onChange={(value: string) => setSearchTerm(value)}
            value={searchTerm}
            defaultValue=""
        />
        { item && <Button onClick={handleButtonClick}>+</Button>}
        </div>

    </InputWrapper>
}