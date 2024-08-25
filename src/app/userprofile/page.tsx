import './style.css'
const page=()=>{
  
return (
  <div className="main">
    <div className=" rounded-2xl shadow overflow">
  <div id="header"></div>
  <div id="profile">
    <div className="image">
    <img src="https://a4-images.myspacecdn.com/images03/2/85a286a4bbe84b56a6d57b1e5bd03ef4/300x300.jpg" alt="" />
    </div>
    <div className="name">
      Daft Punk
    </div>
    {/* <div className="nickname">
      @daftpunk
    </div> */}
    {/* <div className="location">
    <i className="material-icons">place</i>Europe
    </div> */}

    <div className="bottom flex gap-20">
    {/* <i className="svg w-10 h-10 fa-light fa-user-group"></i> */}
    
    <div className="f_cnt flex gap-4 
    items-center"><img src="friend.jpeg"></img>170
      <div className="friends flex items-center">  Friends</div> 
      </div>
      {/* <i className="svg w-10 h-10 fa-light fa-user-group"></i> */}
      
      <div className="g_cnt flex items-center"><img className="w-10 h-10"src="hearts.jpeg"></img>170
      <div className="games flex items-center">Liked Games</div> 
      </div>
    </div>



  </div>
</div>
  </div>

)
}
export default page