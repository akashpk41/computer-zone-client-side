import React from 'react';
import { SpinnerDotted } from 'spinners-react';

const Loading = () => {
     return (
          <SpinnerDotted size={100} color='red' className="w-48 h-48 text-primary text-center mx-auto"/>
     );
};

export default Loading;