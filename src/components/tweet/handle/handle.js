import React from 'react'; // imr

const Handle = (props) => { // sfc
  return ( 
    <>
      <div className="handle__name">
        { props.name }
      </div>
      <div className="handle__nick-name">
        @{ props.handle }
      </div>
      <div className="handle__date">
        • { props.date.toLocaleString() }
      </div>
    </>
  );
};

export default Handle;