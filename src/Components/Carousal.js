import React from 'react'

export default function Carousal() {
  return (
    <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner" id = "corousal" style={{'objectFit': 'contain !important'}}>
                <div style={{"zIndex" : "10"}} className="carousel-caption">
                    <form  className="form-inline">
                        <div className="container">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        </div>
                        <button className="btn btn-outline-success my-2 my-sm-0 text-white" type="submit">Search</button>
                    </form>
                </div>
                <div className="carousel-item active">
                <img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{"filter" : "brightness(40%)"}}  alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{"filter" : "brightness(40%)"}} alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1518469164615-97026679ea59?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{"filter" : "brightness(40%)"}} alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}
