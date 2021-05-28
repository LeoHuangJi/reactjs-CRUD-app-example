import React, { useEffect } from 'react';
const productByZone = (props) => {

    useEffect(() => {
        let userId = props.match.params.slug;
        alert(userId)

    });
    return (

        <div>product by zone</div>
    )

}
export default productByZone;