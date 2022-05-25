import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosPrivate from '../../../API/axiosPrivate';

const PurchasePart = () => {
     const {params} = useParams()
     const [test,setTest] = useState([])
     // console.log(params);

     useEffect(() => {
          axiosPrivate.get(`/parts`)
          .then(res => console.log(res.data)
          )

     },[])


     return (
          <div>
                    buy {params}
          </div>
     );
};

export default PurchasePart;