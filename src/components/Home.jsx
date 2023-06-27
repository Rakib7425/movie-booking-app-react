import React from 'react'
import MovieCard from './MovieCard'
import LeftBar from './LeftBar'
import { Button } from "@material-tailwind/react";
import { ArrowLongRightIcon, ArrowLongLeftIcon } from "@heroicons/react/24/outline";

const Home = ({ data, page, setPage, inputData }) => {
    // console.log('From Home', data);
    // console.log('From Home', data.results);
    let fData = data.results;

    // console.log('From Home', fData);

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
                <div className='leftBar' >
                    <LeftBar />
                </div>
                <div className="rightBar flex flex-wrap gap-4 items-center justify-between">
                    <div className='w-[60vw]'>
                        <h1 className='text-3xl font-bold'><span> {inputData ? `${inputData}` : 'Now Palying,'}</span> Total results: {data.total_results}</h1>
                    </div>

                    {
                        Array.isArray(fData) &&
                        fData.map((item, index) => {
                            return (
                                <div className='' key={index}>
                                    {/* <h1>{item.title}</h1> */}
                                    <MovieCard title={item.title} setPage={setPage} vote_average={item.vote_average} overview={item.overview} original_language={item.original_language} poster_path={item.poster_path} />

                                </div>
                            );
                        })

                    }


                </div>

            </main>

            <div className={`${data.total_pages < 2 ? 'opacity-0' : ''}`} >
                <div className="prev-next flex items-center justify-around ml-auto w-[80%] h-20">
                    <Button onClick={pagePrev} variant="text" className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500">
                        <ArrowLongLeftIcon strokeWidth={2} className="h-5 w-5" />Previous Page
                    </Button>
                    <span>Page: {page} of {data.total_pages}</span>
                    <Button onClick={pageNext} variant="text" className="flex items-center gap-2 bg-blue-400 hover:bg-blue-500 ">
                        Next Page <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Home