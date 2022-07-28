import React from "react";

const ReadArticles = ()=>{
    useEffect(() => {
        axios.get(`https://62de61cc9c47ff309e71cc65.mockapi.io/api/articlestack/article`)
            .then((response) => {
                console.log(response.data);
            })
    }, [])
};

export default ReadArticles;