import React from "react";
import { Route } from 'react-router-dom';
import PostedTable from "../employer/PostedTable";
import PostedList from "../employer/PostedList";
import data from "../../data.js";

import desk from "../Styling/Images/empProfileImage.jpg";
import EmpProfileImage from "../Styling/DevProfileImage";
import "../Styling/EmpProfileImage.css";

const columns = [
  {id: 1, label: "Job Name"},
]

function EmpProfile(props) {
  return (
    <>
      <EmpProfileImage backgroundImage={desk}>
        <h1 className="display-4">Welcome!</h1>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="card-title">About the Company</h2>
                  <img src="" />
                  <p class="card-text">Company Name:</p>
                  <p class="card-text">Location: </p>
                  <p class="card-text">Email Address:</p>
                  <p class="card-text">Phone Number:</p>
                  <p class="card-text">Summary:</p>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div class="card mb-4">
                <div class="card-body">  
                  <h2 className="card-title">Posted Jobs</h2>
                    <PostedTable columns={columns} data={data} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-body">
                  <Route
                    exact path={`${props.match.url}/:id`}
                    render={(props) => <PostedList {...props} />}
                  />
                </div>
              </div>  
            </div>
          </div>
        </div>
      </EmpProfileImage>
    </>            
  )}

export default EmpProfile;