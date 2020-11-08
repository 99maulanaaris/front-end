import React, { Component } from 'react';
import { ListGroup,Col,Row , Badge, Card} from 'react-bootstrap';
import { numberFormat } from '../Api/NumberFormat';
import { API_URL } from '../Api/Api_Url';
import  swal from 'sweetalert';
import axios from 'axios';
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

      totalHarga: 0,

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

      keterangan:keranjang.keterangan,

      totalHarga: keranjang.total_harga
    })

  }


  tambah = () => {
    
    this.setState({

      jumlah:this.state.jumlah+1,
      totalHarga: this.state.keranjangDetail.product.harga * (this.state.jumlah + 1)
    })

  }

  kurang = () => {
    
    if(this.state.jumlah !== 1 ){
      
      this.setState({

      jumlah:this.state.jumlah - 1,
      
      totalHarga: this.state.keranjangDetail.product.harga * (this.state.jumlah - 1),
      })

    }

  }

  changeHandler = (e) => {

    this.setState({

      keterangan: e.target.value

    })
  }

  handleSubmit = async (e) => {

    e.preventDefault()

    this.handleClose()

    
    const data = {
      jumlah: this.state.jumlah,
      total_harga: this.state.totalHarga,
      product:this.state.keranjangDetail.product,
      keterangan:this.state.keterangan
    }

   
    await axios.put(API_URL + `keranjangs/${this.state.keranjangDetail.id}`,data)

    await this.props.getKeranjang()

    swal({

      title: 'SUKSES',
      text: `Berhasil Update Pesanan , ${data.product.nama}`,
      icon: 'success',
      button: false,
      timer: 1500
    
    })


  }

  hapusPesan = async (id) => {

    this.handleClose()

    await axios.delete(API_URL + `keranjangs/${id}`)

    await this.props.getKeranjang()

    swal({

      title: 'SUKSES',
      text: `Pesanan BERHASIL Di Hapus , ${this.state.keranjangDetail.product.nama}`,
      icon: 'error',
      button: false,
      timer: 1500
    
    })


  }

  componentDidMount(){

    this.props.getKeranjang()
    
  }


  render() {


    const { keranjangs } = this.props

    return (
      
      <Col md={3} >
         <h4 className="text-center">
          <strong>Hasil</strong>
        </h4>
        <hr/>
         <Card className="overflow-auto hasil">
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
              hapus={this.hapusPesan}
               
               />
            
            
              
          </ListGroup>
        
         </Card>

        <TotalBayar keranjangs={keranjangs} {...this.props} />

      </Col>


     
      
     
    );
  }
}

export default Hasil;