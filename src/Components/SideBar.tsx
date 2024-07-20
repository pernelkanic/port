import {
    MDBBtn,
    MDBContainer,
    MDBFooter
} from 'mdb-react-ui-kit';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
function SideBar(){

    return(
        <>
        <div className="sidebar">
          <i className="fas fa-times"></i>
       
        <div className="sidebar_items">
          <div className="sidebar_item">
            <i className="fas fa-home"></i>
            <a>Home</a>
          </div>
          <div className="sidebar_item">
            <i className="fas fa-user"></i>
            <a style={{textAlign:"center"}} href="https://drive.google.com/file/d/1RDwZYG0CN-oJ4aCCbiRom9cZWL1TneiZ/view?usp=sharing">Resume</a>
          </div>
          <div className="sidebar_item">
            <i className="fas fa-envelope"></i>
            <a>Projects</a>
          </div>
          <div className="sidebar_item">
            <i className="fas fa-envelope"></i>
            <a>Blogs</a>
          </div>
          <div className="sidebar_item">
            <i className="fas fa-envelope"></i>
            <a>Contact</a>
          </div>
          <div>
      <footer id= 'foot' style={{marginTop:"6em"}}> 
        <MDBFooter className='bg-[#000] bg-opacity-70 text-center pt-10 mt-10  text-white '>
      <MDBContainer className='  pb-0'>
        <section className='mb-4 gap-8'>
        <a href='https://github.com/pernelkanic' target="_blank"><MDBBtn outline color="light" floating className='m-1'  role='button'>
           <AiFillGithub />
          </MDBBtn></a>

          

        
         

          <a href='https://www.linkedin.com/in/venkatkrishnan-raghavan-8b3017249/' target="_blank"> <MDBBtn outline color="light" floating className='m-1'  role='button'>
          <AiFillLinkedin/>
          </MDBBtn></a>

          
        </section>
      </MDBContainer>

             
    </MDBFooter>
    
    </footer>
          </div>
        </div>
        </div>
      </>
    )
}
export default SideBar
