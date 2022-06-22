export const toggleVoteInSessionStorage = (listId: string, listItemId: string) => {
    let listStorage = getListStorage(listId)

    if (listStorage.includes(listItemId)) {
        listStorage = listStorage.filter(string => string !== listItemId)
    } else {
        listStorage = [...listStorage, listItemId]
    }
    sessionStorage.setItem(listId, JSON.stringify(listStorage))

}

export const checkIfVotedFor = (listId: string, listItemId: string) => {
    let listStorage = getListStorage(listId)
    return listStorage.includes(listItemId)
} 

export const getListStorage = (listId: string): string[] => {
    return JSON.parse(sessionStorage.getItem(listId) || "[]")
}