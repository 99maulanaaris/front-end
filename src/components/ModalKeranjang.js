
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import {Modal, Button, Form} from 'react-bootstrap';
import { numberFormat } from '../Api/NumberFormat';

const ModalKeranjang = ({
  keranjangDetail, 
  handleClose, 
  showModal,
  keterangan,
  kurang,
  tambah,
  jumlah,
  changeHandler,
  handleSubmit,
  totalHarga,
  hapus
}) => {
  

  if (keranjangDetail) {

    return (
    <Modal show={showModal} onHide={handleClose}> 
      <Modal.Header closeButton>
        <Modal.Title>{keranjangDetail.product.nama} - <strong>Rp. {numberFormat(keranjangDetail.product.harga)} </strong></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label> Total Harga :  </Form.Label>
            <p><strong>Rp. {numberFormat(totalHarga)} </strong></p>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label> Jumlah : </Form.Label>
            <br/>
            <Button variant='primary'size='sm' onClick={() => kurang()}>
                <FontAwesomeIcon icon={faMinus}/>
            </Button>
          
            <strong className="ml-2 mr-2">{jumlah}</strong>
          
            <Button variant='primary'  size='sm' onClick={() => tambah()}>
                <FontAwesomeIcon icon={faPlus}/>
            </Button>

            
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Keterangan</Form.Label>
            <Form.Control 
            as="textarea" 
            rows={3} 
            value={keterangan}
            onChange={(e) => changeHandler(e)} />
          </Form.Group>
          <Button varian="primary" type="submit">
            Simpan
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => hapus(keranjangDetail.id)}>
          <FontAwesomeIcon icon={faTrash}/> Hapus Pesanan
        </Button>
    </Modal.Footer>
    </Modal>
    )
  }else{
    return(
      <Modal show={showModal} onHide={handleClose}> 
        <Modal.Header closeButton>
          <Modal.Title>Kosong</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
      </Modal.Footer>
      </Modal>
    )
  }
};

export default ModalKeranjang;











// import React, { Component } from 'react';

// import {Modal, Button} from 'react-bootstrap';
// import { numberFormat } from '../Api/NumberFormat';

// class ModalKeranjang extends Component {
//   render() {

//     const {keranjangDetail, handleClose} = this.props

//     return (
//       <div>
//         <Modal.Header closeButton>
//           <Modal.Title>{keranjangDetail.product.nama} - <strong>Rp. {numberFormat(keranjangDetail.product.harga)} </strong></Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </div>
      
   
//     );
//   }
// }

// export default ModalKeranjang;

