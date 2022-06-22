import { useParams } from "react-router"
import List from "../components/List"
import { ListContext } from "../hooks/useListContext"
import { mockList } from "../libs/mockGenerator"

export const Detail = () => {
    const params = useParams()
    return <div style={{height: "100%"}}>
        <ListContext.Provider value={mockList}>
            <List/>
        </ListContext.Provider>
    </div>
}