import React from 'react';
import { useParams } from 'react-router-dom';

const PurchasePart = () => {
     const {params} = useParams()
     // console.log(params);

     return (
          <div>
                    buy {params}
          </div>
     );
};

export default PurchasePart;