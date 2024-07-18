import React from 'react'

function Home() {
    return (
        <div className='m-16 '>
            <div className='text-center font-extrabold text-4xl m-16'>Project Overview</div>
            <div className='flex flex-col gap-8 mx-4 mb-16'>
                <div>
                    <div className='font-bold text-2xl'>Layout Structure:</div>
                    <p className='mt-2'>The layout of the project includes a fixed header at the top, a body content section in the middle, and a footer at the bottom. The footer's position adapts based on the content height and screen zoom level.</p>
                </div>
                <div>
                    <div className='font-bold text-2xl'>Behavior of the Footer:</div>
                    <ul className='mt-2 mx-4'>
                        <li className='mt-2'><span className='font-semibold'>Fixed Footer:</span> If the body content is less than the screen height, the footer remains fixed at the bottom of the screen.</li>
                        <li className='mt-2'><span className='font-semibold'>Scrollable Footer:</span> If the body content exceeds the screen height, the footer moves down and scrolls with the content.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home