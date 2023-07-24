import React from 'react'
import { Button, Box, Modal } from '@mui/material';
import Carousel from '../images/Carousel.svg';
import Banner from '../images/Banners.svg';
import Banners from '../images/Banners 2.svg';
import SearchIcon from '@mui/icons-material/Search';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 854,
    height: 470,
    bgcolor: '#F9FAFB',
    boxShadow: 24,
    pt: 3,
    px: 3,
    pb: 3,
    py: 3,
};
export default function PopupFilter({ open, handleClose, handleOpen, setnextComponent }) {
    return (
        <>
            <React.Fragment>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description">
                    <Box sx={{ ...style, borderRadius: '10px' }}>
                        <center>
                            <div className='popUpBox'>
                                <div className='popUpHead'>
                                    <div className="popUpLeft">
                                        <h2>choose Component</h2>
                                    </div>
                                    <div className="popUpRight">
                                        <span class="material-symbols-outlined"><SearchIcon/></span>
                                        <input type='text' className='PopUpInput' placeholder=' Search by component type' />
                                    </div>
                                </div>
                                <div className='containerBox'>
                                    <div className='box'>
                                        <input type='radio' id='radio1' name='radiobtn' checked='checked' />
                                        <div className='boxView'>
                                            <div className='img'>
                                                <img src={Carousel} alt='' />
                                            </div>
                                            <h4>Hero Banner</h4>
                                            <p>Top banner carousel user sees arriving on the website, it displays mostly offers categories, etc.</p>
                                        </div>
                                    </div>
                                    <div className='box'>
                                        <input type='radio' id='radio2' name='radiobtn' />
                                        <div className='boxView'>
                                            <div className='img'>
                                                <img src={Banner} alt='' />
                                            </div>
                                            <h4>Promotional Banner</h4>
                                            <p>Used primarily to publicise the advertisers products or services & for promotion of brands, events & products.</p>
                                        </div>
                                    </div>
                                    <div className='box'>
                                        <input type='radio' id='radio' name='radiobtn' />
                                        <div className='boxView'>
                                            <div className='img'>
                                                <img src={Banners} alt='' />
                                            </div>
                                            <h4>2-in-1 Banner</h4>
                                            <p>Banner is used for the promotion of brands, events, categories, products and more.</p>
                                        </div>
                                    </div>
                                    <div className='box'>
                                        <input type='radio' id='radio' name='radiobtn' />
                                        <div className='boxView'>
                                            <div className='img'>
                                                <img src={Banner} alt='' />
                                            </div>
                                            <h4>Quick Booking Banner</h4>
                                            <p>Wizard to recommend doctors based on user profile, choice of speciality and mode of consultation</p>
                                        </div>
                                    </div>
                                    <div className='box'>
                                        <input type='radio' id='radio' name='radiobtn' />
                                        <div className='boxView'>
                                            <div className='img'>
                                                <img src={Banner} alt='' />
                                            </div>
                                            <h4>Instant Booking Banner</h4>
                                            <p>Provides user the option to book an immediate Video Consultation with a General Practitioner.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </center>
                        <div className='btn'>
                            <Button onClick={handleClose}>Cancle</Button>
                            <button className='createBtn'onClick={()=>setnextComponent(true)}>Create a component</button>
                        </div>
                    </Box>
                </Modal>
            </React.Fragment>

        </>
    )
}
