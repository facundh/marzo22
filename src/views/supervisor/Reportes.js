import React from "react";
import Moment from "react-moment";
import styles from './form.module.css'

const Reportes = () => {
  return (

    <>
      <div
        className={`${styles.title}`}
      >
        Reports
      </div>
    
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Rider</th>
          <th scope="col">Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>21-2-21</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>20-11-22</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>10-10-10</td>
        </tr>
      </tbody>
    </table>
    </>
  );
};

export default Reportes;
