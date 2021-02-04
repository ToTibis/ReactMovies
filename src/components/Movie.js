import React from 'react';

export default function Movie(props){
  const {Poster, Year, Title, Type} = props;
  const imageSrc = Poster === 'N/A' ? null : Poster;

  return (
    <figure className="card mb-0 shadow-sm h-100">
      <div className="adaptive-image">
        <img src={imageSrc} data-item-type={imageSrc === null ? props.Type : null} className="card-img-top" alt={Title}/>
      </div>
      <figcaption className="card-body d-flex flex-column align-items-start justify-content-between">
        <h5 className="card-title h4">{Title}</h5>
        <p className='h5 py-2'>{Year}</p>
        <p className='h6 badge badge-info p-2'> {Type}</p>
      </figcaption>
    </figure>
  )
}
