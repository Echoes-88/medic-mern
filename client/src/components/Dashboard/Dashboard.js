import React from 'react';

import styled from 'styled-components'

import API from "../../utils/API";

import ListProduct from './ListProduct';

import AddProduct from './AddProduct'

const Disconnect = styled.button`
  margin-top:1rem;
  background-color:#1a1a1a;
  color:white;
  `

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

        <Disconnect onClick={disconnect} type="submit">
          Se déconnecter
        </Disconnect>
      </div>
    )
  }