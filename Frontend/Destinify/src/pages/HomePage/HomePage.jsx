import ExampleComponent from "../../components/exampleComponent"
import "./HomePage.css"
import backgroundImage from "../../assets/background.png"
import paris from "../../assets/paris.png"
import newyork from "../../assets/newyork.png"
import maldives from "../../assets/maldives.png"
import Login from "../../components/Login/Login"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef,  } from "react"
import { addItem, fetchItems } from "../../features/REST/restSlice"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userState = useSelector((state)=>{ 
   return state.user
  })

  const countryRef = useRef()

  const handelSearch = async(e) => {
      
      e.preventDefault()
      console.log(countryRef.current.value)
      try{
        const res = await dispatch(fetchItems({ url: `search?country=${countryRef.current.value}` })).unwrap();
        console.log(res)
        navigate('/destination')
      }catch(err){
        console.log(err)
      }
  }

  useEffect(() => {
          console.log(userState)
      }, []);
    return <>
        <nav className="navbar navbar-expand-lg navbar-light  shadow-sm">
    <div className="container">
      <a className="navbar-brand" href="#">Destinyfi</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto" style={{width:'100%',justifyContent:'center'}}>
          <li className="nav-item"><a className="nav-link" href="#">Discover</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Trips</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Review</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Forums</a></li>
        </ul>
      </div>
    </div>
  </nav>


  <div className="hero-section text-center py-5 text-white container" style={{background:`url(${backgroundImage}) no-repeat center center/cover`,position:'relative', borderRadius:'20px',marginTop:'40px'}}>
    <div className="customBlur"></div>
    <div className="container customContainer">
      <h1 className="display-4">Plan Your Perfect Trip</h1>
      <p className="lead">Find the best hotels, restaurants, and attractions for your journey.</p>
     
      <form className="d-flex justify-content-center mt-4" onSubmit={handelSearch}>
        <input className="form-control me-2" type="search" placeholder="Where to?" aria-label="Search" style={{maxWidth:"400px"}} ref={countryRef} /> 
        <button className="btn btn-success"  >Search</button>
      </form>
    </div>
  </div>

  <section className="py-5">
    <div className="container">
      <h2 className="text-center mb-4">Featured Destinations</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src={paris} className="card-img-top" alt="Destination 1" />
            <div className="card-body">
              <h5 className="card-title">Paris</h5>
              <p className="card-text">Experience the charm of the Eiffel Tower and French cuisine.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src={maldives} className="card-img-top" alt="Destination 2" />
            <div className="card-body">
              <h5 className="card-title">Maldives</h5>
              <p className="card-text">Relax in paradise with pristine beaches and turquoise waters.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src={newyork} className="card-img-top" alt="Destination 3" /> 
            <div className="card-body">
              <h5 className="card-title">New York</h5>
              <p className="card-text">Explore the vibrant streets and iconic landmarks of NYC.</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src={maldives} className="card-img-top" alt="Destination 3" /> 
            <div className="card-body">
              <h5 className="card-title">New York</h5>
              <p className="card-text">Explore the vibrant streets and iconic landmarks of NYC.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  <footer className="bg-dark text-white py-4">
    <div className="container text-center">
      <p>&copy; 2024 TripAdvisor Clone. All Rights Reserved.</p>
      <a href="#" className="text-light me-3">Privacy Policy</a>
      <a href="#" className="text-light">Terms of Service</a>
    </div>
  </footer>


  
    </>
}