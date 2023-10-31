import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Rating } from 'react-simple-star-rating'
import Dropdown from 'react-bootstrap/Dropdown';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import "../../styles/reviewModal.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SingleReview from './SingleReview';
import Form from 'react-bootstrap/Form';

function ReviewModal(props) {

    let currentDate = new Date().toJSON().slice(0, 10);

    const [color, setColor] = useState("#dbe5ff")

    const [stars, setStars] = useState(0)

    const [fullName, setFullName] = useState("John Doe")

    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, [])

    const handleColorChange = (e) => {
        const selectedValue = e.target.value;
        setColor(selectedValue);
      };

    const handleRating = (rate) => {
        setStars(rate)
    }

    function handleSelect(eventKey) {
        setFullName(eventKey)
    }

    function handleModal() {
        document.body.style.overflow = 'visible';
        props.setModal(false)
    }

    async function handleClick() {

        if (stars === 0){
            alert("Please select a rating")
            return
        }

        const review = {
            fullName,
            color,
            stars,
            date : currentDate
        }

        const response = await fetch("https://cute-cyan-duck-tie.cyclic.app/api/reviews", {
            method: "POST",
            body: JSON.stringify(review),
            headers : {
                "Content-Type" : "application/json"
            }
        })

        if (response.ok){
            const json = await response.json()
            console.log(json)
            props.setAdded(!props.added)
            handleModal()
        }
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
            <div className="rater">
            <h2>Rating:</h2>
            <Rating 
            fillColorArray={['#F00101', '#F57300', '#F5C900', '#BAF000', '#00F501']}
            onClick={handleRating} />
            <h2>Choose color:</h2>
            <Form.Select 
            aria-label="Default select example"
            onChange={handleColorChange} 
            value={color}
            style={{ backgroundColor: color}}>
                <option value="#dbe5ff" id='drop4'>Blue</option>
                <option value="#ffd5ff" id='drop1'>Pink</option>
                <option value="#d6fff1" id='drop2'>Mint</option>
                <option value="#dbdbdb" id='drop3'>Grey</option>
            </Form.Select>
            </div>
            <div className="divider"></div>
            <h2>
            <div className="icon-warning">
                    <WarningAmberIcon id="warning-modal" /> 
            </div>
                Choose your review sample
            </h2>
            <Tabs
                defaultActiveKey="John Doe"
                id="fill-tab-example"
                onSelect={handleSelect}
                className="mb-3"
                fill
                >
                <Tab eventKey="John Doe" title="John Doe">
                    <SingleReview 
                    preset="John Doe"
                    preview={true}
                    color={color}
                    currentDate={currentDate}
                    />
                </Tab>
                <Tab eventKey="Keisha Smith" title="Keisha Smith">
                    <SingleReview 
                    preset="Keisha Smith" 
                    preview={true}
                    color={color}
                    currentDate={currentDate}
                    />
                </Tab>
                <Tab eventKey="Mike Johnson" title="Mike Johnson" >
                    <SingleReview 
                    preset="Mike Johnson" 
                    preview={true}
                    color={color}
                    currentDate={currentDate}/>
                </Tab>
            </Tabs>
            <button className="formButton review-button" onClick={handleClick}>Add Review!</button>
        </div>
    </div>
  )
}

export default ReviewModal