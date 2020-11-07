import React, { Component } from 'react'

import {numberFormat} from '../Api/NumberFormat'

import {Row, Col, Button} from 'react-bootstrap'

import axios from 'axios'

import { API_URL } from '../Api/Api_Url'

import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { faCartPlus} from '@fortawesome/free-solid-svg-icons'

export default class TotalBayar extends Component{

  
  submitTotalBayar = async (totalHarga) => {

    const pesanan = {

      total_bayar: totalHarga,
      menu : this.props.keranjangs
    }

    await axios.post(API_URL + 'pesanans', pesanan)

    this.props.history.push('/success')


    

  }

  render() {

    const totalHarga = this.props.keranjangs.reduce(function (result, item) {
     
    return result + item.total_harga 

    }, 0)


    return(

      <div className="fixed-bottom">

        <Row>

          <Col md={{span:3, offset:9}} className="px-4">
            <h4 className="float-right mr-2">Total Harga : <strong>Rp. {numberFormat(totalHarga)} </strong></h4>

            <Button 
            variant="primary" 
            block 
            clasName="mb-2 mt-4 mr-2"
            size="lg"
            onClick={() => this.submitTotalBayar(totalHarga)}
            
            >
              <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
              <strong>BAYAR</strong>
            </Button>

          </Col>

        </Row>

      </div>


    )

  }

}