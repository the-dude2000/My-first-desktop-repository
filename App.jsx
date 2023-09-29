import { useQuery, useMutation } from "@tanstack/react-query";


const POSTS = [
    {id: 1, title: "Post 1"},
    {id: 2, title: "Post 2"},
]

function App() {
    useQuery({
        queryKey: ["posts"]
    })
    return <h1>TanStack Query</h1>
}


function wait(duration) {
    return new Promise
}