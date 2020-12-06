import React, { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import PageContext from "../../providers/Context/PageContext";
import Home from "../../pages/Home/Home";
import Favourites from "../../pages/Favourites/Favourites";
import VideoPlayer from "../../pages/VideoPlayer/VideoPlayer";
import FormLoggin from "../../pages/Login/FormLogging";
import Navbar from "../Navbar/Navbar";
import {videos} from '../../mock/video';

import "./styles.css";


const App = () => {
  const [searchText, setSearchText] = useState("");
  const [sideBar, setSideBar] = useState(false);
  const [mapFavs, setMapFavs] = useState(new Map())
  const [objVideo, setObjVideo] = useState({});
  const [favVideos, setFavVideos] = useState([]);
  const [videoList, setVideoList] = useState(videos.items);
  const [userLogged, setUserLogged] = useState({
    userStatus: false,
    user: ""
  });
  const [video, setVideo] = useState({
    title: "",
    views: "",
    likes: "",
    dislikes: "",
    id: "",
    publishedDate: "",
    description: ""
  });
  
  return (
    <div className="App">
      <BrowserRouter>
        <PageContext.Provider
          value={{
            searchText,
            setSearchText,
            video,
            setVideo,
            sideBar,
            setSideBar,
            videoList,
            setVideoList,
            userLogged,
            setUserLogged,
            objVideo,
            setObjVideo,
            favVideos,
            setFavVideos
          }}
        >
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/FormLogIn" component={FormLoggin} />
            <Route path="/favs" component={Favourites} />
            <Route path="/video-player" component={VideoPlayer} />
          </Switch>
        </PageContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
