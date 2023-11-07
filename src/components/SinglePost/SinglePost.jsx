import "./singlePost.css"


export default function SinglePost () {
    return (
        <div className="singlePost">
           <div className="singlePostWrapper">
            <img
            src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"
            alt=""
            className="singlePostImg"
            />
            <h1 className="singlePostTitle">Lorem ipsum dolor 
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>      
                    <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
            </h1>
            
            <div className="singlePostInfo">
                <span className="singlePostAuthor"> Author: <b>Suheda</b></span>
                <span className="singlePostDate"> 1 hour ago </span>

            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Eius rerum laboriosam, 
                perferendis repellendus, voluptates facere 
                consequuntur nemo accusantium earum quam 
                alias deserunt nobis quod tempora sint sit 
                sunt. Sit, voluptatem!Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Eius rerum laboriosam, 
                perferendis repellendus, voluptates facere 
                consequuntur nemo accusantium earum quam 
                alias deserunt nobis quod tempora sint sit 
                sunt. Sit, voluptatem!Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Eius rerum laboriosam, 
                perferendis repellendus, voluptates facere 
                consequuntur nemo accusantium earum quam 
                alias deserunt nobis quod tempora sint sit 
                sunt. Sit, voluptatem!Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Eius rerum laboriosam, 
                perferendis repellendus, voluptates facere 
                consequuntur nemo accusantium earum quam 
                alias deserunt nobis quod tempora sint sit 
                sunt. Sit, voluptatem!</p>
           </div>
              </div>
        )
    
}
    