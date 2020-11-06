import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { numberFormat } from '../Api/NumberFormat';
import TotalBayar from './TotalBayar';

class Hasil extends Component {
  render() {

    const { keranjangs } = this.props

    return (
      
      <div className="col-md-3">
        <h4 className="text-center">
          <strong>Hasil</strong>
        </h4>
        <hr/>

        <ListGroup variant='flush' >

          {
            keranjangs.length !== 0 && (

              keranjangs.map((keranjang) => (

                <ListGroup.Item key={keranjang.id}>

                 <div className="row">
                   <div className="col">
                     <h4>
                       <div className="badge badge-success">
                         {keranjang.jumlah}
                       </div>
                     </h4>
                   </div>
                   <div className="col">
                     <h5>{keranjang.product.nama}</h5>
                     Rp. {numberFormat(keranjang.product.harga)}
                   </div>
                   <div className="col">
                     <strong>Rp. {numberFormat(keranjang.total_harga)}</strong>
                   </div>
                 </div>

                </ListGroup.Item>

              ))

            )
          }


        </ListGroup>
        
        <TotalBayar keranjangs={keranjangs} {...this.props}/>

      </div>
     
    );
  }
}

export default Hasil;