import React from 'react'
import MovieCard from './MovieCard'
import LeftBar from './LeftBar'
import { Button } from "@material-tailwind/react";
import { ArrowLongRightIcon, ArrowLongLeftIcon } from "@heroicons/react/24/outline";

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

    const pagePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }
    const pageNext = () => {
        setPage(page + 1);
    }

    return (
        <>
            {/* <h1>Home</h1> */}
            <main className='flex'>
                <div className='leftBar'>
                    <LeftBar />
                </div>

                <div className="rightBar flex flex-wrap gap-4 items-center justify-between">
                    {/* <h1 className='bg-green-400 bottom-0 right-0 w-[80vw] h-screen'>Page No: {page}</h1> */}
                    {
                        fData.map((item, index) => {
                            return (
                                <>
                                    <div className='' key={index}>
                                        {/* <h1>{item.title}</h1> */}
                                        <MovieCard title={item.title} setPage={setPage} vote_average={item.vote_average} overview={item.overview} />

                                    </div>

                                </>
                            );
                        })
                    }

                </div>

            </main>
            <div className="prev-next flex items-center justify-between mx-auto w-[90%] h-20">
                <Button onClick={pagePrev} variant="text" className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500">
                    <ArrowLongLeftIcon strokeWidth={2} className="h-5 w-5" />Previous Page
                </Button>
                <Button onClick={pageNext} variant="text" className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500">
                    Next Page <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
                </Button>
            </div>
        </>
    )
}

export default Home