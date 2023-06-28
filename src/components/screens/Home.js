import React from "react";

const Home = () => {
    return (
        <div className="home">
            <div className="card post-detail">
                <div className="sender">
                    <img src="https://media.licdn.com/dms/image/D4D03AQHmEDOc6gQTZg/profile-displayphoto-shrink_800_800/0/1683106795228?e=2147483647&v=beta&t=aI1x1sIyqrLyNX9zkE1CC8-3nc096UeRDLCWzYLoVoI" className="profile-picture-sm" />
                    <h6>_apurv_kulkarni_</h6>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1669564181791-24f69fd3e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNxdWFyZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="card-content">
                    <i class="material-icons">favorite</i>
                    <i class="material-icons">comment</i>
                    <i class="material-icons">send</i>

                    <h6>lorem ipsum this is dummy text for caption area</h6>
                    <input type="text" placeholder="Enter caption"></input>
                </div>
            </div>
            <div className="card post-detail">
                <div className="sender">
                    <img src="https://media.licdn.com/dms/image/D4D03AQHmEDOc6gQTZg/profile-displayphoto-shrink_800_800/0/1683106795228?e=2147483647&v=beta&t=aI1x1sIyqrLyNX9zkE1CC8-3nc096UeRDLCWzYLoVoI" className="profile-picture-sm" />
                    <h6>_apurv_kulkarni_</h6>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1669564181791-24f69fd3e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNxdWFyZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="card-content">
                    <i class="material-icons">favorite</i>
                    <i class="material-icons">comment</i>
                    <i class="material-icons">send</i>

                    <h6>lorem ipsum this is dummy text for caption area</h6>
                    <input type="text" placeholder="Enter caption"></input>
                </div>
            </div>
        </div>
    );
}

export default Home;