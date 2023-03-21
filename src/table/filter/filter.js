import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { cnjMask } from "./cnj-mask";

export const GlobalFilter = ({ setCnj, setForum}) => {

  const [forums ,setForums] = useState([]);

  const  getForums = async() => {
    let url = "http://localhost:3300/api/forums";
   
    await axios.get(url).then(response => { 
      setForums(response.data);
    })
    .catch(error => {
      alert('error')
    });

  }

  useEffect(() => {
    getForums()
  },[])
 
  return (
    <span>
      <select  onChange={(e) => setForum(e.target.value)}>
        <option selected>Selecione um Forum</option>
            {forums.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
      </select>
      
      Cnj:{" "}
      <input  id="produto-1-cnpj" onChange={(e) => setCnj(e.target.value)} />
    </span>
  );
};
