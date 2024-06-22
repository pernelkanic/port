import React from "react";
import webrtc from '../assets/webrtcimg.png'
import kubernetes from '../assets/kubernetes.png'
function BlogsComponent() {

    return (
        <>
            <div className="blog-container">
                
                    <h1> Latest Blogs</h1>
                
                <div className="blog-parent">
                    <div className="blog">
                        <h2 className="blognumber">01</h2>
                        <h3 className="">Kubernetes : An Overview</h3>
                        <button onClick={()=>{
        window.location.href="https://medium.com/@venkatraghav2003/kubernetes-an-overview-6687f0002cf3"
      }} className="viewblog"><span>View Blog</span></button>

                    </div>
                    <div>
                        <img src={kubernetes} alt="" />
                    </div>
                </div>
                  <hr />
                  <div className="blog-parent" style={{gap:"36em"}}>
                    <div className="blog">
                        <h2 className="blognumber">02</h2>
                        <h3 className="">WebRTC : An Overview</h3>
                        <button onClick={()=>{
        window.location.href="https://medium.com/@venkatraghav2003/webrtc-an-overview-2b3dc7d5e1bf"
      }} className="viewblog"><span>View Blog</span></button>
                    </div>
                    <div>
                        <img src={webrtc} alt="" />
                    </div>
                </div>
               
            </div>
        </>
    )
}
export default BlogsComponent