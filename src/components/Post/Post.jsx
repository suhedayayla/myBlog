import "./post.css"


export default function Post () {
    return (
        <div className="post">
            <img className="postImg"
            src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
            alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Müzik</span>
                    <span className="postCat">Yaşam</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, distinctio. Cupiditate est nisi sit. Molestiae !</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi earum enim, eius esse rerum molestiae quo ea autem excepturi nemo? Quo officia laboriosam nobis quaerat possimus consequatur natus. Dolorum!</p>
        </div>
        )
    
}
    