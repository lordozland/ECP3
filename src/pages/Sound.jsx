import React from 'react';
import ReactPlayer from "react-player";

const Sound = () => {
    return (
        <div class="container">
            <div class="row">

            <h3 class="center">Oh Dude, the Sound</h3>

            <p class="center">Mwahahahahahahaha!</p>

            <div>
            <ReactPlayer width="100%" height="200px" className="TrakzPage"
            url="https://soundcloud.com/user-234357210/nova-demo-09jun21-wav"
            />
            </div>
            <div>
            <ReactPlayer width="100%" height="200px" className="TrakzPage"
            url="https://soundcloud.com/user-234357210/scamp-demo-22may21_2-wav"
            />
            </div>
            </div>
            <div>
            <ReactPlayer width="100%" height="200px" className="TrakzPage"
            url="https://soundcloud.com/user-234357210/something"
            />
            </div>
            <div>
            <ReactPlayer width="100%" height="200px" className="TrakzPage"
            url="https://soundcloud.com/user-234357210/hyperemesis-gravidarum-demo"
            />
            </div>

            
        </div>
    )
}

export default Sound