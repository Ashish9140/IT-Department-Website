import React from 'react'
import About from '../../components/About'
import CardGroup from '../../components/CardGroup'
import Crowsal from '../../components/Crowsal'
import Faculty from '../../components/Faculty'

const Home = () => {
    return (
        <>
            {/* Crowsal */}
            <Crowsal />

            {/* About Department */}
            < About />

            {/* About Department */}
            < CardGroup />

            {/* Faculty */}
            < Faculty />
        </>
    )
}

export default Home