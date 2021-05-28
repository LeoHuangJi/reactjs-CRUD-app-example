import React, { useState } from 'react'
import { createZone } from './../actions/zoneAction';
import { useDispatch } from 'react-redux';
const About = () => {

    const initialAboutState = {
        name: '',
        description: ''
    };


    const dispatch = useDispatch();
    const [zoneObj, setZoneObj] = useState(initialAboutState);

    const handleInputChange = event => {

        console.log(event.target) // <input type="text" id="titleTxt" name="title" value="1">
        const { name, value, id } = event.target;
        console.log(id) // 1
        setZoneObj({ ...zoneObj, [name]: value })
        console.log(zoneObj.title)
    };

    const addNewZone = () => {
        if (zoneObj) {
            dispatch(
                createZone(zoneObj)

            ).then(data => {
                console.log(data)
            }).catch(e => {
                console.log(e)
            })
        }

    }

    return (
        <div>About page {zoneObj.title}

            <br />
            <p>tiêu đề</p>
            <br />
            <input type="text" id="name"
                name="name" value={zoneObj.name} onChange={handleInputChange} />
            <br />
            <p>Mô tả</p>
            <textarea rows="3" name="description" onChange={handleInputChange} value={zoneObj.description} />
            <p><button type="button" onClick={addNewZone}>Submit</button></p>

        </div>
    )

}

export default About;