import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeTitle } from "../../store/PostsSlice";

const MainPage = () => {
    const title = useSelector(state => state.postsReducer.title); //
    const dispatch = useDispatch();

    const handleTitleChange = () => {
        dispatch(changeTitle());

    return (
        <div>
            <h1>{title}</h1>
            <button onClick={handleTitleChange}>Change Title</button> {}
        </div>
    );
};

export default MainPage;}
