// import React, { createContext, useEffect, useState } from 'react'
// import MovieCard from '../components/MovieCard'

// const ApiContext = () => {
//     const [data, setData] = useState([])
//     const [page, setPage] = useState(1)
//     const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=c43eafb6cfde3357615b65d291332480&page=${page}`
//     useEffect(() => {
//         getData();
//         // eslint-disable-next-line
//     }, [page])

//     const getData = async () => {
//         const res = await fetch(url);
//         const result = await res.json();
//         setData(result);
//         // console.log(result);
//         // console.log(result.results);
//         // console.log(result.page);
//     };
//     const apiData = createContext(data);
//     return (
//         <apiData.Provider value={data}>
//             <MovieCard />
//         </apiData.Provider>
//     );
// }

// export default ApiContext;
// export { setPage, apiData };


import React from 'react'

const ApiContext = () => {
    return (
        <div>ApiContext</div>
    )
}

export default ApiContext