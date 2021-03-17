import React from 'react';



import API from "../../utils/API";

import ListProduct from './ListProduct';

import AddProduct from './AddProduct'

export default function Dashboard() {

  const disconnect = () => {
    API.logout();
    window.location = "/";
  };

    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <h2>Liste des médicaments</h2>
        <ListProduct />
          
        <h2>Ajouter un médicament</h2>

        <div className="addProduct">
        <AddProduct />
      </div>

        <button onClick={disconnect} type="submit">
          Se déconnecter
        </button>
      </div>
    )
  }