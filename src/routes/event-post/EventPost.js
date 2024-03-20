import { useEffect, useState } from "react"
import allBlogPosts from '../../data/allBlogPosts'

const EventPost = () => {
    const [blogPost, setBlogPost] = useState({});
    useEffect(() => {
        document.title = `${blogPost.name} | Hash Grill`;
    }, [blogPost.name]);
    useEffect(() => {
        setBlogPost(allBlogPosts.filter((post) => post.name.toLowerCase() === window.location.pathname.toString().substring(6).replaceAll('-', ' '))[0])
    }, [])
    return (
        <main className="event-post">
            <img src={blogPost.img} alt="" aria-hidden="true" />
            <section>
                <h2>{blogPost.name}</h2>
                <p>{blogPost.content}</p>
            </section>
        </main>
    )
}

export default EventPost;