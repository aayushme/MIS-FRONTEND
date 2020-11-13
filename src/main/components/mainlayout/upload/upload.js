import React, { Component } from 'react';
import Header from '../header/header'
import Navbar from "../navbar/navbar"
import Button from "../../utils/form/button"
import {Table} from "react-bootstrap"
import Skeleton,{SkeletonTheme} from "react-loading-skeleton"
import "./upload.css"

import * as actions from '../../../store/actions/index'
import {connect} from 'react-redux'



class Upload extends Component{

  componentDidMount(){
    this.props.misGet(this.state.token);

  }
   
    state = {
        file:'',
        token:null
    }



  onThisSubmit = (e)=>{
    e.preventDefault();
    this.props.misUpload(this.state.token,this.state.file);
  }

  handleError = (id) => {
    this.props.getMisError(this.state.token,id);
    console.log(id);
  }


  renderTable = () => {
    return this.props.data.map(value => {
      
        return (
          
          
          <tbody>
            <tr>
              
           <td>{value.id}</td>
           <td>{value.name}</td>
            <td value={value.id} onClick={()=>this.handleError(value.id)}><Button value_name="Check" className="error_button"/></td>
            </tr>
            
          </tbody>
        
        )
    })
}

renderTableError = () => {
  return this.props.dataError.map(value => {
      return (
        
        
        <tbody>
          <tr>
            
         <td>{value.id}</td>
         <td>{value.column}</td>
         <td>{value.row}</td>
         <td>{value.value}</td>
          </tr>
          
        </tbody>
      
      )
  })
}

  render(){
    
    return(
        
<div>

<Header/>
    <div>
      
      <br/>
    
      <div class="vertical-nav bg-white" id="sidebar">
  <Navbar/>

 
</div>
<div className="page-content overflow-hidden" id="content">
<div className="jumbotron overflow_cont">
  <div className="row">
    {(this.props.validated)?<div className="col-sm-9 border1">
    <Table striped bordered hover>
    <thead>
            <tr>
              
              <th>Id</th>
              <th>Name</th>
              <th>Check Errors</th>
            </tr>
          </thead>

    {this.renderTable()}
      </Table>
    

    </div>:<div className="col-sm-9 border1"> <SkeletonTheme color="#202020" highlightColor="#444">
    <section>
      <Skeleton height={50} width={50} />
    </section>
  </SkeletonTheme>
      </div>}
    
    <div className="col-sm-3 border1"> 
    <h2 className="lead">Upload New</h2> 
    <form>
  <div class="form-group">
    <input type="file" class="form-control-file" id="exampleFormControlFile1" onChange={(e) => this.setState({file:e.target.files[0]})} />
  </div>
</form>
<div><button type="submit" className="btn btn-dark" onClick={this.onThisSubmit}>Save</button></div>
</div>
  </div>
  <h4 className="text-center lead">ERROR TABLE</h4>
  {(this.props.dataError!==[])?<div className="row error_div">
  <Table striped bordered hover>
    <thead>
            <tr>
              
              <th>Id</th>
              <th>Column</th>
              <th>Row</th>
              <th>Value</th>
            </tr>
          </thead>

    {this.renderTableError()}
      </Table>
  </div>:<div className="row error_div"><Skeleton animation={false}  /></div>}
  

  </div>
</div>
    </div>
    </div>
    );
}
}

const mapDispatchToProps = dispatch =>{
  return {
    misGet : (token) =>  dispatch(actions.misGet(token)),
    misUpload : (token,file) => dispatch(actions.misUpload(token,file)),
    getMisError : (token,id) => dispatch(actions.getMisError(token,id))
  }
}

const mapStateToProps = state =>{
return{
  data:state.mis.data,
  dataError :state.misError.error_data,
  validated:state.mis.data!==null,
  isvalidated:state.misError.data!==null

}
}

export default connect(mapStateToProps,mapDispatchToProps)(Upload);
