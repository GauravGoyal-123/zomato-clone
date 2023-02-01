import React from 'react'

function LeftArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, borderRadius: '50%', padding: '4px', display: 'flex', background: "white", justifyContent: 'center', alignItems: 'center' }}
        onClick={onClick}
      ></div>
    );
}

export default LeftArrow