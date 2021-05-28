import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    retrieveZones,
    //   findZonesByTitle,
    deleteZone,
} from '../actions/zoneAction';
// import { Link } from "react-router-dom";

const ZonesList = () => {
    //  const [currentTutorial, setCurrentTutorial] = useState(null);
    //   const [currentIndex, setCurrentIndex] = useState(-1);
    //   const [searchTitle, setSearchTitle] = useState("");

    const zone = useSelector(state => state.zoneData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveZones());
    }, [dispatch]);


    const DoDelete = (id) => {

        dispatch(deleteZone(id, dispatch)).then((res) => {

       
            if (res.success) {
                alert('xóa thành công')
            }else{
                alert(res.message)
            }
        }).catch()


    }

    //   const onChangeSearchTitle = e => {
    //     const searchTitle = e.target.value;
    //     setSearchTitle(searchTitle);
    //   };

    //   const refreshData = () => {
    //     setCurrentTutorial(null);
    //     setCurrentIndex(-1);
    //   };



    //   const findByTitle = () => {
    //     refreshData();
    //     dispatch(findTutorialsByTitle(searchTitle));
    //   };

    return (
        <ol className="row">
            {

                zone.data.map((item, index) => (
                    <li className="col-lg-6 text-left" key={index} ><a href={"product/" + item.shortURL}> {item.name} </a>      
                        <a className="small text-info ml-3" href={"zone/edit/" + item.id}>Sửa</a> <small>/</small> <a className="text-danger small" href="#" onClick={() => DoDelete(item.id)} >Xóa</a>
                    </li>
                ))
            }
        </ol>



    )
};

export default ZonesList;