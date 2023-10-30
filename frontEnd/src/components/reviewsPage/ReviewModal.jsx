import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Rating } from 'react-simple-star-rating'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import "../../styles/reviewModal.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ReviewModal(props) {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, [])

    function handleModal() {
        document.body.style.overflow = 'visible';
        props.setModal(false)
    }

  return (
    <div className='review-modal'>
        <div className="review-form">
            <CloseIcon 
            id="close-icon-modal" 
            onClick={handleModal}
            style={{ cursor: 'pointer' }} />
            <h1>Create a Review</h1>
            <div className="divider"></div>
            <Rating 
            fillColorArray={['#F00101', '#F57300', '#F5C900', '#BAF000', '#00F501']} />
            <div className="divider"></div>
            <h2>Choose your review sample
                 <div className="icon-warning">
                    <WarningAmberIcon id="warning-modal" /> 
                </div>
            </h2>
            <Tabs
                defaultActiveKey="option1"
                id="fill-tab-example"
                className="mb-3"
                fill
                >
                <Tab eventKey="option1" title="John Doe">
                    John Doe
                </Tab>
                <Tab eventKey="option2" title="Keisha Smith">
                    Keisha Smith
                </Tab>
                <Tab eventKey="option3" title="Mike Johnson">
                    Mike Johnson
                </Tab>
            </Tabs>
        </div>
    </div>
  )
}

export default ReviewModal