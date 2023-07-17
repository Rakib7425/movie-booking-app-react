import React from 'react'

const ShimmerUi = () => {
    return (
        <body class="p-20">

            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div class="w-full bg-white drop-shadow-md rounded-lg">
                    <div class="animate-pulse w-full h-48 bg-slate-200"></div>
                    <div class="p-3 space-y-4">
                        <div class="animate-pulse w-2/3 h-6 bg-slate-200"></div>
                        <div class="flex space-x-4">
                            <div class="animate-pulse w-1/3 h-3 bg-sky-200"></div>
                            <div class="animate-pulse w-1/3 h-3 bg-sky-200"></div>
                            <div class="animate-pulse w-1/3 h-3 bg-sky-200"></div>
                        </div>
                        <div class="space-y-2">
                            <div class="animate-pulse w-3/4 h-3 bg-slate-200"></div>
                            <div class="animate-pulse w-full h-3 bg-slate-200"></div>
                            <div class="animate-pulse w-2/3 h-3 bg-slate-200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default ShimmerUi