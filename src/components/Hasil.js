import React, { Component } from 'react';
import { ListGroup,Col,Row , Badge} from 'react-bootstrap';
import { numberFormat } from '../Api/NumberFormat';
import TotalBayar from './TotalBayar';
import ModalKeranjang from './ModalKeranjang'

class Hasil extends Component {

  constructor(props) {
    
    super(props);
  
    this.state = {

      showModal:false,

      keranjangDetail: '',

      jumlah: 0,

      keterangan: '',

    }

  }

  handleClose = () => {

    this.setState({
      showModal:false
    })

  }

  handleShow = async (keranjang) => {

   await this.setState({

      showModal: true,

      keranjangDetail:keranjang,

      jumlah:keranjang.jumlah,

      keterangan:keranjang.keterangan
    })

  }


  tambah = () => {
    
    this.setState({

      jumlah:this.state.jumlah+1

    })

  }

  kurang = () => {
    
    if(this.state.jumlah !== 1 ){
      
      this.setState({

      jumlah:this.state.jumlah - 1

      })

    }

  }

  changeHandler = (e) => {

    this.setState({

      keterangan: e.target.value

    })
  }

  handleSubmit = (e) => {

    e.preventDefault()
    
    console.log('Ok');
  }


  render() {


    const { keranjangs } = this.props

    return (
      
      <Col md={3} >
         <h4 className="text-center">
          <strong>Hasil</strong>
        </h4>
        <hr/>

          <ListGroup>

            {
              keranjangs.map( (keranjang) => (

                <ListGroup.Item key={keranjang.id} onClick={() => this.handleShow(keranjang)}>

                 <Row>
                   <Col xs={2}>
                     <h4>
                       <Badge pill variant="success">
                         {keranjang.jumlah}
                       </Badge>
                     </h4>
                   </Col>
                   <Col>
                     <h5>{keranjang.product.nama}</h5>
                     Rp. {numberFormat(keranjang.product.harga)}
                   </Col>
                   <Col>
                     <strong>Rp. {numberFormat(keranjang.total_harga)}</strong>
                   </Col>
                 </Row>

                </ListGroup.Item>

              ))
              
            }
              <ModalKeranjang 
              {...this.state} 
              handleClose={this.handleClose} 
              tambah={this.tambah} 
              kurang={this.kurang} 
              handleSubmit={this.handleSubmit}
              changeHandler={this.changeHandler}
               
               />
            
            
              
          </ListGroup>
        
        
        
        <TotalBayar keranjangs={keranjangs} {...this.props} />

      </Col>


     
      
     
    );
  }
}

export default Hasil;