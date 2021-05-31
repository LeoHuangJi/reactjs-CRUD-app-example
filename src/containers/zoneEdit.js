import React, { useEffect, useState } from 'react'
import { createZone, getZone } from './../actions/zoneAction';
import { useDispatch, useSelector } from 'react-redux';
const ZoneEdit = (props) => {

    const initialZoneEditState = {
        name: '',
        description: ''
    };


    const dispatch = useDispatch();

    const [zoneObj, setZoneObj] = useState(initialZoneEditState);
    const x = useSelector(state => state.zoneData);
   
    let id = props.match.params.id;

    useEffect(() => {

        if (id > 0) {

            dispatch(getZone(id)).then(() => {
//setZoneObj(x);
                //console.log(x);
                setZoneObj(x);
            });
        }

    }, [props.match.params.id])
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
        <div className="container text-left">Thông tin danh mục
        
            <form className="col-lg-9">
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Tên</label>
                    <input type="text" className="form-control" id="name" name="name" value={zoneObj.name} onChange={handleInputChange} placeholder="Tên.." />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Mô tả</label>
                    <textarea className="form-control" id="description" name="description" onChange={handleInputChange} value={zoneObj.description} rows="3"></textarea>
                </div>
                <div className="form-group">
                    <p><button type="button" className="btn btn-primary" onClick={addNewZone}>Submit</button></p>
                </div>
            </form>



        </div>
    )

}

export default ZoneEdit;