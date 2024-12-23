import ExampleComponent from "../../components/exampleComponent"
import "./HomePage.css"
import backgroundImage from "../../assets/background.png"
import paris from "../../assets/paris.png"
import newyork from "../../assets/newyork.png"
import maldives from "../../assets/maldives.png"
import Login from "../../components/Login/Login"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useRef } from "react"
import { addItem, fetchItems } from "../../features/REST/restSlice"
import { useNavigate } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import Suggestion from "../../components/SuggestionForm/Suggestion"

export const HomePage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userState = useSelector((state) => {
    return state.user
  })
  

  const countryRef = useRef()

  const handelSearch = async (e) => {
    e.preventDefault()
    console.log(countryRef.current.value)
    try {
      const res = await dispatch(fetchItems({ url: `search?country=${countryRef.current.value}` })).unwrap();
      console.log(res)
      navigate('/destination')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    debugger;
    console.log(userState)
    if (userState.status == false){
      navigate('/login')
    }
  }, []);
  return (
    <>
      <Navbar />

      <div className="hero-section text-center py-5 text-white container" style={{ background: `url(${backgroundImage}) no-repeat center center/cover`, position: 'relative', borderRadius: '20px', marginTop: '40px' }}>
        <div className="customBlur"></div>
        <div className="container customContainer">
          <h1 className="display-4">Plan Your Perfect Trip</h1>
          <p className="lead">Find the best hotels, restaurants, and attractions for your journey.</p>

          <form className="d-flex justify-content-center mt-4" onSubmit={handelSearch}>
            <input className="form-control me-2" type="search" placeholder="Where to?" aria-label="Search" style={{ maxWidth: "400px" }} ref={countryRef} />
            <button className="btn btn-success">Search</button>
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
                <img src='https://media.istockphoto.com/id/898467608/photo/the-india-gate-in-delhi.jpg?s=1024x1024&w=is&k=20&c=RQ-Qi7KqzmC4XWsWibcy7--3lHyNb0hJWyAZkDCXxNM=' className="card-img-top" alt="Destination 3" />
                <div className="card-body">
                  <h5 className="card-title">India</h5>
                  <p className="card-text">Explore the vibrant streets and iconic landmarks of India.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Suggestion />


      <div className="container">
        <div className="headings">
          <h3>Treat yourself to an award-winning meal</h3>
          <h4>2024's Travellers' Choice Awards Best of the Best Restaurants</h4>
        </div>
        <div className="section">
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6d/e6/26/caption.jpg?w=300&h=-1&s=1" alt="img" />
            <h3>Date Night</h3>
          </div>
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6d/e6/06/caption.jpg?w=300&h=-1&s=1" alt="img" />
            <h3>Casual Dining</h3>
          </div>
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6d/e6/5e/caption.jpg?w=300&h=-1&s=1" alt="img" />
            <h3>Hidden Gems</h3>
          </div>
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6d/e6/df/caption.jpg?w=300&h=-1&s=1" alt="img" />
            <h3>Hidden Gems</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="headings">
          <h3>Get inspired by our fave travel creators</h3>
          <h4>Tried-and-true guidance to fuel your next big trip</h4>
        </div>
        <div className="section">
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/38/7e/3c/caption.jpg?w=300&h=300&s=1" alt="" />
            <h3>Date Night</h3>
          </div>
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b0/6d/26/caption.jpg?w=300&h=300&s=1" alt="" />
            <h3>Casual Dining</h3>
          </div>
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/f5/16/92/caption.jpg?w=300&h=300&s=1" alt="" />
            <h3>Hidden Gems</h3>
          </div>
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/6d/e7/3c/caption.jpg?w=300&h=-1&s=1" alt="" />
            <h3>Hidden Gems</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="headings">
          <h3>Ways to tour Hyderabad District</h3>
          <h4>Book these experiences for a close-up look at Hyderabad District.</h4>
        </div>
        <div className="section">
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/e8/df/a4/caption.jpg?w=300&h=300&s=1" alt="" />
            <h3>Date Night</h3>
          </div>
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5b/92/4e/caption.jpg?w=300&h=300&s=1" alt="" />
            <h3>Casual Dining</h3>
          </div>
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b0/6d/29/caption.jpg?w=300&h=300&s=1" alt="" />
            <h3>Hidden Gems</h3>
          </div>
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/63/5f/0c/caption.jpg?w=300&h=300&s=1" alt="" />
            <h3>Hidden Gems</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="headings">
          <h3>Top destinations for your next holiday</h3>
          <h4>Here's where your fellow travellers are headed</h4>
        </div>
        <div className="section">
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c2/78/15/caption.jpg?w=300&h=300&s=1" alt="" />
            <h3>Date Night</h3>
          </div>
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/b1/singapore.jpg?w=300&h=300&s=1" alt="" />
            <h3>Casual Dining</h3>
          </div>
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4e/55/e6/chhatrapati-shivaji-terminus.jpg?w=300&h=300&s=1" alt="" />
            <h3>Hidden Gems</h3>
          </div>
          <div className="item">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c7/f1/d3/caption.jpg?w=300&h=300&s=1" alt="" />
            <h3>Hidden Gems</h3>
          </div>
        </div>
      </div>
{/* 
      <div className="lastimg">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/48/23/f4/caption.jpg?w=1200&h=700&s=1" alt="" />
      </div> */}

      <Footer />
    </>
  );
};
