import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../redux/reducers/locationReducer";
import { selectLocation } from "../redux/selectors";

function Search({ fetchData }) {
  const location = useSelector(selectLocation);
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchData(location);
    }
  };

  const handleChange = (event) => {
    dispatch(setLocation(event.target.value));
  };

  return (
    <div className="search">
      <input
        value={location}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter Location"
        type="text"
      />
    </div>
  );
}

export default Search;
