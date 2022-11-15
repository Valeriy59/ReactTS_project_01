import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1
    resultA = useMemo(() => {
        let tmpResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tmpResult *= i
        }
        return tmpResult
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }
    return (
        <>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS SECRET")
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemoExample = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dima", "Valera", "Artem"])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => addUser()}>add User</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS"])

    // const addBook = () => {
    //     const newBooks = [...books, 'Angular ' + new Date().getTime()]
    //     setBooks(newBooks)
    // }
    const memorizedBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])

    const memorizedBook2 = useCallback(() => {
            const newBooks = [...books, 'Angular ' + new Date().getTime()]
            setBooks(newBooks)
    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <Book addBook={memorizedBook}/>
        </>
    )
}

type BookSecretPropsTYpe = {
    addBook: () => void
}

const BooksSecret = (props: BookSecretPropsTYpe) => {
    console.log("BOOKS SECRET")
    return <div>
        <button onClick={() => props.addBook()}>add Book</button>
</div>
}
const Book = React.memo(BooksSecret)