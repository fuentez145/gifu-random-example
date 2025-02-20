import GetItems from "@/lib/items";
import Link from "next/link";
interface Item {
    id : number;
    name : string;
    data : any; 
}
interface ItemData {
    price : number;
    color : string;
    capacity : number;
}

const page = async () => {
    const items : Item[] = await GetItems();

    return (
        <div>
        <h1>Page 1</h1>
        <pre>
            {JSON.stringify(items, null, 2)}
        </pre>
        {
            items.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2> 
                    <Link href={`/page/${item.id}`}>View</Link>
                    <span>Price : {JSON.stringify(item.data?.price)} </span>
                </div>
            ))
        }
        <picture>
            <source srcSet="/images/1.webp" type="image/webp" />
            <img src="/images/1.jpg" alt="A picture of a cat" />
        </picture>


        </div>
    )
}

export default page