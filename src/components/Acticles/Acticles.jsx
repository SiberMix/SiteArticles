import React, {useState} from "react";
import styles from "./Acticles.module.scss"

const Acticles = () => {
    const [posts, setPosts] = useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await responce.json()
                setPosts(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }


        }
        fetchData()
    }, [])
    return (

        <div>
            <h1>Статьи</h1>
            <input type="text" placeholder='type text this'/>
            <div>
                {posts.map(posts => (
                    <div className={styles.acticle}>
                        <div className={styles.card}>
                            <h4>{posts.title}</h4>
                            <p>{posts.body}</p>
                            <a href="">Читать здесь</a>
                        </div>
                    </div>))}
            </div>




        </div>
    )
}
export default Acticles