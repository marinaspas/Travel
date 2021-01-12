import React from 'react';

function InstafeedItem(props) {
  return (
    <>
      <li className="instafeed__item">
          <img src={props.src} alt={props.alt} />
      </li>
    </>
  )
}

export default InstafeedItem
