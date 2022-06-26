import { useEffect } from "react"
import { useParams } from "react-router"
import List from "../components/List"
import { useFetchShoppingList } from "../hooks/useFetchShoppingList"
import { ListContext } from "../hooks/useListContext"

export const Detail = () => {
    const { id } = useParams()

    if (!id) return null 

    const { fetch: fetchShoppingList, data }: any = useFetchShoppingList(id)

    useEffect(() => {
      fetchShoppingList(id)
    }, [id])

    return <div style={{height: "100%"}}>
        <ListContext.Provider value={data}>
            <List/>
        </ListContext.Provider>
    </div>
}