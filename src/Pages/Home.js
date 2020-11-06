import React, { Component } from 'react';
import { Kategori, Hasil, Menu} from '../components'
import axios from 'axios'
import {API_URL} from '../Api/Api_Url'
import swal from 'sweetalert';

class Home extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
      menus: [],
      pilihKategori:'Makanan',
      keranjangs:[],
    }
    
  }

  getMenu = async () => {

    let response = await axios.get(API_URL + `products?category.nama=${this.state.pilihKategori}`)

    this.setState({
      
      menus:response.data
    
    })

  }

  gantiKategori = async ( value ) => {

    this.setState({
      pilihKategori:value,
      menus:[]
    })

    let response = await axios.get(API_URL + `products?category.nama=${value}`)

    this.setState({

      menus : response.data 

    })   
  }

  
  masukKeranjnag = async (value) => {


    let response = await axios.get(API_URL + `keranjangs?product.id=${value.id}`)
    
    if(response.data.length === 0){
        
      const keranjang = {

        jumlah: 1,
        total_harga: value.harga,
        product: value

      }

      await axios.post(API_URL + `keranjangs`,keranjang)

      await this.ambilKeranjang()

      swal({

        title: 'Berhasil Masuk Keranjang',
        text: `Berhasil Memesan ${keranjang.product.nama}`,
        icon: 'success',
        button: false,
        timer: 1500
      
      })

    }else{

        const keranjang = {

        jumlah: response.data[0].jumlah + 1 ,
        total_harga: response.data[0].total_harga + value.harga,
        product: value

      }

      await axios.put(API_URL + `keranjangs/${response.data[0].id}`,keranjang)
      
      await this.ambilKeranjang()

       swal({

        title: 'Berhasil Masuk Keranjang',
        text: `Berhasil Memesan ${keranjang.product.nama}`,
        icon: 'success',
        button: false,
        timer: 1500
        
      })

    }
  }

  ambilKeranjang = async () => {

    let response = await axios.get(API_URL + 'keranjangs')

    this.setState({

      keranjangs: response.data

    })

  }

  

  


  componentDidMount(e){

    this.getMenu()
    this.ambilKeranjang()

  }


  

  render() {

    const {menus,pilihKategori, keranjangs} = this.state

    return (
      <div className="row mt-3">
        <Kategori gantiKategori={this.gantiKategori} kategori={pilihKategori} />

        <div className="col">
          <h4 className="text-center"><strong>Daftar Produk</strong></h4>
          <hr/>
          <div className="row">

            {
              menus.map((menu) => (

               <Menu
                key={menu.id}
                menu={menu}
                keranjang = {this.masukKeranjnag}
               />

              ))
            }

          </div>
        </div>

         <Hasil keranjangs ={keranjangs} {...this.props} />
      </div>
    );
  }
}

export default Home;





