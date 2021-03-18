import React, { useEffect } from 'react';

import { useState, useActions } from '../../../overmind'
import API from "../../../utils/API";

export default function Dashboard() {

  const state = useState();
  const actions = useActions();

  useEffect(() => {
    async function fetchData() {
      const result = await API.getProduct();
      actions.fetchProduct(result.data.product);
    }
    fetchData();
  }, [state.products]);

  return(
    <>
    <table>
      <tbody>
      {state.products.map((product) => (
          <tr key={product.name}>
            <td className='strong'>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}