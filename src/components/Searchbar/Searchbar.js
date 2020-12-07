import React, { useContext } from "react";
import * as BiIcons from "react-icons/bi";
import PageContext from "../../providers/Context/PageContext";
import apiYoutube from "../../utils/apiYoutube";
import { useHistory } from "react-router-dom";
import "./Searchbar.css";

const Searchbar = () => {
  const history = useHistory();
  const { searchText, setSearchText } = useContext(PageContext);
  const { setVideoList } = useContext(PageContext);

  const handleSearch = (event) => {
    const auxText = event.target.value;
    setSearchText(auxText);
  };

  const enterSearch = (e) =>{
    if (e.key === 'Enter') {
      console.log('do validate');
      searchVideo(e);
    }

  }
  const searchVideo = (e) => {

    const params = {
      q: searchText
    };
    apiYoutube
      .get("/search", { params })
      .then((response) => {
        setVideoList(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });

    e.stopPropagation();
    e.preventDefault();
    history.push('/');
    return setSearchText("");
    
  };

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            className="searchTerm"
            type="text"
            value={searchText}
            name="search"
            placeholder="Search.."
            onChange={handleSearch}
            onKeyDown ={enterSearch}
          />
          <button type="submit" className="searchButton" onClick={searchVideo}>
            <BiIcons.BiSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
