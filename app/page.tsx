import Link from "next/link";


export default async function Home() {

    interface myBook {
        id: number,
        name: string,
        type: string,
        available: boolean
    }

    const res = await fetch("https://simple-books-api.glitch.me/books");

    const data: myBook[] = await res.json();

    data[0].name;

    console.log(data);
    
    

    return (
        <>
        <h1>Books</h1>
        <ul>
            {
                data.map((book) => {
                    return (
                        <Link href={`/books/${book.id}`}  key={book.id}>
                        <h2 >{book.name}</h2>
                        </Link>
                    )
                })
            }
        </ul>
        </>
    )
};