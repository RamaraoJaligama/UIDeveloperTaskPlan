import React from 'react';
import Upload from '../images/Upload.svg';
import TelegramIcon from '@mui/icons-material/Telegram';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DashBordSection({setnextComponent}) {
  return (
    <div className='DashBord'>
        <div className='DashBordSection'>
          <div className="Left">
            <button className='Dashbtn' onClick={()=> setnextComponent(false)}><KeyboardArrowLeftIcon />Discard & Go Back</button>
            <button className='save' onClick={{}}><DoneIcon />Save</button>
          </div>
          <div className="Right">
            <button className='btn'><TelegramIcon />Submite for approval</button>
          </div>
        </div>
        <div className='allComponents'>
          <a href=''>All components</a>
          <span>  /  </span>
          <a href=''>New component</a>
        </div>
        <div className='addInput'>
          <div className='InputBanner'>
            <h4>Component Name*</h4>
            <input type='text' className='PopUpInput' placeholder=' HeroBanner_Campaign-03' />
          </div>
          <div className='heroBanner'>
            <p>Component Type</p>
            <span>hero Banner</span>
          </div>
        </div>
        <div className='uploadBannerHead'>
          <p>hero Banner</p>
          <span>Top banner carousel user sees arriving on the website, it displays mostly offers categories, etc.</span>
        </div>
        <div className='uploadBanner'>
          <p>Slide 1</p>
          <div className='fileUpload'>
            <div className='fileUploadMob-Web'>
            <div className='fileUploadLt'>
              <p>Image for mobile</p>
              <div className='fileUploadLt-mobile'>
                <div className='uploadImg'>
                  <img src={Upload} alt='img' />
                  <p>Upload</p>
                </div>
                <div className='uploadeDimentions'>
                  <a>Image dimension: 764x376</a>
                  <a>Size: Less than 200kb</a>
                </div>
              </div>
              <div className='InputLinkMobile'>
                <h4>Link for mobile</h4>
                <input type='text' className='PopUpInput' placeholder=' Please enter the link for the slide' />
              </div>
            </div>

            <div className='fileUploadRt'>
              <p>Image for web</p>
              <div className='fileUploadRt-web'>
                <div className='uploadImg'>
                  <img src={Upload} alt='img' />
                  <p>Upload</p>
                </div>
                <div className='uploadeDimentions'>
                  <a>Image dimension: 1600x500</a>
                  <a>Size: Less than 200kb</a>
                </div>
              </div>
              <div className='InputLinkWeb'>
                <h4>Link for web</h4>
                <input type='text' className='PopUpInput' placeholder=' Please enter the link for the slide' />
              </div>
            </div>
            </div>

            <div className='BottomInput'>
              <div className='LeftSelect'>
              <p>slide order*</p>
              <select>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
              </select>
              </div>
              <div className='RightSelect'>
                <p>alt text</p>
                <input type='text' placeholder='Please enter your Alt Text for the slide'/>
              </div>
            </div>
            <div className='DltBtn'>
            <button ><DeleteIcon/>Delete slide</button>
            </div>
          </div>
        </div>
        <div className='AddSlide'>
        <button><span>+</span>Add New Slide</button>
        </div>
    </div>
  )
}
