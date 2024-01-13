import { useState } from "react";

const Create = () => {

    const[title, setTitle]=useState('');
    const[body, setBody]=useState('');
    const[author, setAuthor]=useState('');

    const[isPending, setIsPending]=useState(false);




    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog ={ title, body, author};
        setIsPending(true)

        setTimeout(()=>{
        fetch('http://localhost:1000/blogs', {
            method:'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log('new blog added');
            setIsPending(false);
        })
    },1000);

    }




    return (  
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>

                <label >Blog title:</label>
                <input type="text" required value={title}
                onChange={(e)=>setTitle(e.target.value)}></input>
                <label >Blog Body:</label>
                <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label >Blog Author:</label>
                <select
                value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding blog..</button>}
            </form>
        </div>

    );
}
 
export default Create;