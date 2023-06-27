import React from "react";

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-info-section">
                <div className="profile-picture-section">
                    <img src="https://media.licdn.com/dms/image/D4D03AQHmEDOc6gQTZg/profile-displayphoto-shrink_800_800/0/1683106795228?e=2147483647&v=beta&t=aI1x1sIyqrLyNX9zkE1CC8-3nc096UeRDLCWzYLoVoI" className="profile-picture" />
                </div>
                <div className="profile-detail-section">
                    <div>
                        <h5>_apurv_kulkarni_</h5>
                    </div>
                    <div className="profile-numbers">
                        <p><span className="num-data">2</span> posts</p>
                        <p><span className="num-data">428</span> followers</p>
                        <p><span className="num-data">410</span> following</p>
                    </div>
                    <div className="name-bio">
                        <p className="username">Apurv Kulkarni</p>
                        <p>There are 10 types of people in this world those who understand binary and those who don’t.</p>
                    </div>
                </div>

            </div>
            <div className="gallery-section">
                <img className="post" src="https://images.unsplash.com/photo-1668953296563-2f4e3e043929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"/>
                <img className="post" src="https://images.unsplash.com/photo-1668953296563-2f4e3e043929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"/>
                <img className="post" src="https://images.unsplash.com/photo-1668953296563-2f4e3e043929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"/>
                <img className="post" src="https://images.unsplash.com/photo-1668953296563-2f4e3e043929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"/>
            </div>
        </div>
    );
}

export default Profile;