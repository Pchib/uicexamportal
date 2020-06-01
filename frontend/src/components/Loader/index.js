import React from 'react'
import loading_animation from "../image/loading-bars.svg";
import styles from './loading.css'
export default function index() {
  return (
    <div className="loading_background" >
      <img src={loading_animation} className="svg" alt="" />
    </div>
  )
}
