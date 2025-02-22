import React, { useState } from 'react'
import './Home.css'
import logo from '../assets/logo.svg'
import logo2 from '../assets/logotrans1.png'
import purchaseImg from '../assets/purchaseitem.svg'
import requiredImg from '../assets/required.svg'
import sampleImg from '../assets/sample.svg'
import sketch from '../assets/sketches.svg'
import purchaselogo from '../assets/purchaselogo.svg'
import requiredlogo from '../assets/requiredlogo.svg'
import samplelogo from '../assets/samplelogo.svg'
import sketchlogo from '../assets/sketcheslogo.svg'
import { CgMenuGridO } from "react-icons/cg";
import { IoIosArrowRoundDown } from "react-icons/io";
import LoadModal from './LoadModal'

const data = [
    {
        id: 1,
        title: 'Sample_img-0233Diperson.mov',
        logoUrl: samplelogo,
        imgUrl: sampleImg,
    },
    {
        id: 2,
        title: 'Drawings_sketches.png',
        logoUrl: sketchlogo,
        imgUrl: sketch,
    },
    {
        id: 3,
        title: 'PURCHASE_ITEMS.pdf',
        logoUrl: purchaselogo,
        imgUrl: purchaseImg,
    },
    {
        id: 4,
        title: 'Required Specification.xlsx',
        logoUrl: requiredlogo,
        imgUrl: requiredImg,
    },
]

const Home = () => {
    const [modal, setModal] = useState(false);
    const handleModalOpen = () => {
        setModal(true);
    }
    const handleModalClose = () => {
        setModal(false);
    }

    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='home'>
        {modal && <LoadModal handleCloseModal={handleModalClose}/>}
            <nav>
                <div className='home-logo-wrapper'>
                    <img src={logo2} alt="logo" />
                    <h3>Drive</h3>
                </div>
                <div className='home-menu'><CgMenuGridO /></div>
            </nav>
        <hr />
        <div className='home-sub-header'>
            <p className='home-sub-header-text'>Shared Files Below</p>
            <p onClick={handleModalOpen} className='home-sub-header-donwload'>DOWNLOAD ALL</p>
        </div>
        <hr />
        <div className='home-arrow'>
            <div className='arrow-one'><IoIosArrowRoundDown /></div>
            <div className='home-arrow-flex'><p>Name</p><IoIosArrowRoundDown className='arrow-one'/></div>
        </div>
        <div className='home-docs'>
            {
                data.map(item => (
                    <div key={item.id} className='home-docs-wrapper' onClick={handleModalOpen}>
                        <img src={item.imgUrl} alt={item.title} />
                        <div className='home-docs-bottom'>
                            <img src={item.logoUrl} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <hr />
        <div className='home-footer'>
            <p>All rights reserved.
            ©{year} <a href="#">GOOGLE INC.</a></p>
        </div>
    </div>
  )
}

export default Home