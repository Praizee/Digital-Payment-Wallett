import React from 'react'

const Footer = () => {
    return (
        <section className=''>
            <div className='text-sm'>
                <p className='text-black border border-gray-300 mt-4 text-center tablet:mx-3 bg-white py-4'>
                    Made with 💙 by &nbsp;
                    <a href='https://stephen-adeniji.netlify.app/'
                        title='Stephen Adeniji'
                        className='link link-hover text-blue-700'>
                        Stephen Adeniji
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Footer