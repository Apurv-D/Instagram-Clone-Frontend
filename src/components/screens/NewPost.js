import React from "react";

const NewPost = () => {
    return (
        <div className="card input-feild post-detail create-post">
            <input type="text" placeholder="Caption" />
            <div className="file-field input-field">
                <div className="btn login-btn">
                    <span>File</span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn login-btn" type="submit" name="action">
                Post
            </button>
        </div>
    )

}

export default NewPost;