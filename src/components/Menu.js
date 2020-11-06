import React from 'react';
import {numberFormat} from '../Api/NumberFormat'

const Menu = ({menu, keranjang}) => {
  return (

      <div className="col-md-4">
        <div className="card mb-3 shadow" onClick={() => keranjang(menu)}>
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