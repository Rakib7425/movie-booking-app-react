// import React from 'react'
// import { Link } from 'react-router-dom'

// const LeftBar = () => {
//     let genres = [
//         {
//             "id": 28,
//             "name": "Action"
//         },
//         {
//             "id": 12,
//             "name": "Adventure"
//         },
//         {
//             "id": 16,
//             "name": "Animation"
//         },
//         {
//             "id": 35,
//             "name": "Comedy"
//         },
//         {
//             "id": 80,
//             "name": "Crime"
//         },
//         {
//             "id": 99,
//             "name": "Documentary"
//         },
//         {
//             "id": 18,
//             "name": "Drama"
//         },
//         {
//             "id": 10751,
//             "name": "Family"
//         },
//         {
//             "id": 14,
//             "name": "Fantasy"
//         },
//         {
//             "id": 36,
//             "name": "History"
//         },
//         {
//             "id": 27,
//             "name": "Horror"
//         },
//         {
//             "id": 10402,
//             "name": "Music"
//         },
//         {
//             "id": 9648,
//             "name": "Mystery"
//         },
//         {
//             "id": 10749,
//             "name": "Romance"
//         },
//         {
//             "id": 878,
//             "name": "Science Fiction"
//         },
//         {
//             "id": 10770,
//             "name": "TV Movie"
//         },
//         {
//             "id": 53,
//             "name": "Thriller"
//         },
//         {
//             "id": 10752,
//             "name": "War"
//         },
//         {
//             "id": 37,
//             "name": "Western"
//         }
//     ]
//     return (
//         <>
//             <div className="leftbar max-w-fit min-h-full border-2 border-red-400 mr-2 bg-orange-400">
//                 <h2 className='text-center text-2xl'>Genres</h2>
//                 <hr />
//                 <ul className='text-left text-[1.2rem] mx-4'>
//                     {
//                         Array.isArray(genres) &&
//                         genres.map((item, index) => {
//                             return (
//                                 <li className='p-2' key={index}>
//                                     <Link key={index}>{item.name}</Link>
//                                 </li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//         </>
//     )
// }

// export default LeftBar