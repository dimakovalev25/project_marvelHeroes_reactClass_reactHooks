import RandomChar from "../randomChar/RandomChar";
import ComicsList from "../comicsList/ComicsList";
import Comics from "../comics/Comics";
import React from "react";

const ComicsPage = () => {
    return (
        <>
            {/*<RandomChar/>*/}
            <Comics exact path='/comics'/>
        </>
    )
}

export default ComicsPage;