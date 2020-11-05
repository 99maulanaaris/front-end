import React, { Component } from 'react';
import axios from 'axios'
import { ListGroup } from "react-bootstrap";
import { API_URL } from '../Api/Api_Url'
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faUtensils, faCoffee, faCheese } from "@fortawesome/free-solid-svg-icons";

const Icon = ({nama}) => {

  if(nama === "Makanan") return <FontAwesomeIcon icon={faUtensils} className="mr-3" />
  if(nama === "Minuman") return <FontAwesomeIcon icon={faCoffee} className="mr-2" />
  if(nama === "Cemilan") return <FontAwesomeIcon icon={faCheese} className="mr-3"/>

}


class Kategori extends Component {

  constructor(props) {
    
    super(props);
    
    this.state = {

      categorys: [],

    }
  }

  getCategories = async () => {

    let response = await axios.get(API_URL + 'categories')

    this.setState({

      categorys:response.data

    })



  }

  componentDidMount(){

    this.getCategories()

  }
  


  render() {

    const{categorys} = this.state
    const{kategori,gantiKategori} = this.props

    return (
      
       <div className="col-md-2">
         <h4 className="text-center"><strong>List Kategori</strong></h4>
         <hr/>
          <ListGroup>
            {
              categorys.map((categori) => (

                <ListGroup.Item 
                  key={categori.id} 
                  onClick={() => gantiKategori(categori.nama)}
                  className={kategori === categori.nama && "category-aktif"}
                  style={{cursor:'pointer'}}
                >
                  <h5>
                    <Icon nama={categori.nama}/>{categori.nama}
                  </h5>                 
                </ListGroup.Item>
              ))
            }
           </ListGroup>
       </div>
      
    );
  }
}

export default Kategori;