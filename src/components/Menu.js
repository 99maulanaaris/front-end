import React from 'react';
import {numberFormat} from '../Api/NumberFormat'

const Menu = ({menu}) => {
  return (

      <div className="col-md-4">
        <div className="card mb-3">
          <img src={`assets/${menu.category.nama}/${menu.gambar}`} className="card-img-top" alt="gambar" />
          <div className="card-body">
             <h5 className="card-title">{menu.nama}</h5>
              <p className="card-text"><strong>Rp. {numberFormat(menu.harga)}</strong></p>
          </div>
        </div>
      </div>
 
  );
};

export default Menu;