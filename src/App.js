import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Dev from './pages/Dev'
import Yt from './pages/Yt'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

import Header from './components/section/Header'
import Main from './components/section/Main'
import Footer from './components/section/Footer'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Main>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/today' element={<Today/>} />
                    <Route path='/developer' element={<Dev/>} />
                    <Route path='/playlist' element={<Yt/>} />
                    <Route path='/channel/:handle' element={<Channel/>} />
                    <Route path='/video/:videoID' element={<Video/>} />
                    <Route path='/search/:searchID' element={<Search/>} />
                    <Route path='/*' element={<Not/>} />
                </Routes>
            </Main>
            <Footer />
        </BrowserRouter>
    )
}

export default App