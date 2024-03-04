import { useEffect, useState } from "react";
import Products from '../components/products' 
import Spinner from '../components/Spinner'
const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";

    const [loading , setLoading] = useState(false);
    const [posts , setPosts] = useState([]);

    async function fetchProductdata() {
        setLoading(true);

        try{
            const result = await fetch (API_URL);
            const data = await result.json();
            console.log(data);
            setPosts(data);
        }
        catch(error){
            console.log("error");
            setPosts([]);
        }
        setLoading(false);
    };

    useEffect( ()=>{
        fetchProductdata();
    },[]);

    return (
        <div>
           { 
            loading ? (
                <div className="flex justify-center items-center w--screen h-screen">
                <Spinner/>
                </div>
           ):
            (
                posts.length > 0 ?
                ( <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2
                 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                {
                    posts.map( (post) =>(
                <Products post={post}/>
            ) )
                }
           </div>)
            :
            <div className="flex justify-center items-center"> <p> No data found </p></div>
            
            )
            }
        </div>
    )
}

export default Home;