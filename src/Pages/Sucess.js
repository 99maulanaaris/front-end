import React, { Component } from 'react';
import { Button , Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { API_URL } from '../Api/Api_Url'

import axios from  'axios'

class Sucess extends Component {

  getKeranjang = async () => {

    let response = await axios.get(API_URL + 'keranjangs')

    const keranjang = response.data

    keranjang.map(async (item) => await axios.delete(API_URL + `keranjangs/${item.id}`))

  }

  componentDidMount(){

    this.getKeranjang()

  }

  render() {

    return (

      <div className="mt-4 text-center">

        <div className="container">
          <Image src="assets/sukses.png" width="500"/>
        </div>
        <h2>Suksess Pesan</h2>
        <p>Terima Kasih Telah Memesan</p>
        <Button variant="primary" as={Link} to="/">
          Kembali
        </Button>
      </div>

    );
  }
}

export default Sucess;