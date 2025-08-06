import { Component } from "react";
import Post from "../Post/Post";
import postsList from "../../data";
import "./Posts.css";





class Posts extends Component{
  state={inputValue:""}

  onChangeBtn = (event) => {
    
    this.setState({inputValue:event.target.value})
  }

  render(){
    const {inputValue} = this.state
    const searchResults = postsList.filter((eachPost)=>eachPost.title.toLowerCase().includes(inputValue.toLowerCase()))
     return (
      
    <div className="posts">
      <div className="post-container">
        <input type="search" value={inputValue} onChange={this.onChangeBtn} className="input-type" placeholder="search" id="id-1"/><label htmlFor="id-1"><i className="topSearchIcon fas fa-search"></i></label></div>
      <div className="post-desc">
        {searchResults.map(post => (
        <Post
        
          key={post.id}
          id={post.id}
          img={post.img}
          title={post.title}
          desc={post.desc}
        />
      ))}
      </div>
      </div>
      
   
  );
  }
}

export default Posts