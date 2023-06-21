import React from 'react'
// import MovieCard from './MovieCard'
import LeftBar from './LeftBar'

const Home = ({ data, page, setPage }) => {
    // console.log('From Home', data.results);


    let fData = data.results;
    // const fetchData = async () => {
    //     return await data.results;
    // }


    // useEffect(() => {
    //     fetchData();
    // }, [data])

    console.log('From Home', fData);

    return (
        <>
            {/* <h1>Home</h1> */}
            <main className='flex'>
                <div >
                    <LeftBar />
                </div>
                <div className="rightBar">
                    {/* {
                        fData.map((item, index) => {
                            return (
                                <>
                                    <div className="movies flex flex-wrap">
                                        <h1>{item.title}</h1>
                                        <MovieCard />
                                    </div>
                                </>
                            );
                        })
                    } */}
                </div>
            </main>
        </>
    )
}

export default Home