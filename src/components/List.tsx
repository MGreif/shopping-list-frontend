import { useCallback, useState } from 'react'
import { useListContext } from '../hooks/useListContext'
import { randomString } from '../libs/mockGenerator'
import AddItemButton from './AddItemButton'
import classes from './List.module.css'
import { IBuyableItem, IListItem, ListItem } from './ListItem'

export interface IList {
    id: string,
    listItems: IListItem[]
    editable: boolean
    lastEdited: Date
    description: string
}

export default () => {

    const list: IList = useListContext()

    const [listItems, setListItems] = useState<IListItem[]>(list.listItems)


    // Probably useless. We gonna refetch on change and instantly POST the changes to the service

    const addListItem = useCallback((buyableItem: IBuyableItem) => {
        if (listItems.map(listItem => listItem.buyableItem.name).includes(buyableItem.name)) {
            const indexOfItem = listItems.map(listItem => listItem.buyableItem.name).indexOf(buyableItem.name)
            const newList = [...listItems]
            newList[indexOfItem].quantity = newList[indexOfItem].quantity + 1
            setListItems(newList)
        } else {
            const newListItem: IListItem = {
                bought: false,
                buyableItem,
                id: randomString(5, "id"),
                quantity: 1,
                votes: 0
            }
            setListItems([newListItem, ...listItems])
        }
    }, [listItems])

    //

    return <div className={classes.container}>
        <h1>{list.description}</h1>
        <div style={{width: "100%", maxWidth: "500px"}}>
            <AddItemButton onAdd={addListItem} />
            <div className={classes.list}>
                {
                    listItems.length === 0 && <span>No</span>
                }
                {listItems.map(data =>
                    <ListItem
                        key={data.buyableItem.name}
                        listItem={data}
                        onCheck={console.log}
                    />)}
            </div>
        </div>
    </div>
}