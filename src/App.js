import React, { Component } from 'react';
import { Navbar , Kategori, Hasil, Menu} from './components'
import axios from 'axios'
import {API_URL} from './Api/Api_Url'

class App extends Component {

  constructor(props) {
    
    super(props);

    this.state = {
      menus: [],
      pilihKategori:'Makanan'
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

  componentDidMount(){

    this.getMenu()

  }


  

  render() {

    const {menus,pilihKategori} = this.state

    return (
      <div>
      <Navbar/>
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
               />

              ))
            }

          </div>
        </div>

         <Hasil/>
      </div>
    </div> 
    );
  }
}

export default App;





