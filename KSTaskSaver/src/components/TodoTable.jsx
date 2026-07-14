import React from "react";

const TodoTable = () => {
  return (
    <>
      <table className="table table-dark todo-table table-bordered border-grey glitter mx-auto">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        {/* <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
           
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Doe</td>
            
          </tr>
        </tbody> */}
      </table>
    </>
  );
};

export default TodoTable;
