import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, fetchItems } from '../../features/REST/restSlice'
import { useNavigate } from 'react-router-dom'

function Suggestion() {
    const [inputFields, setInputFields] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userState = useSelector((state) => {
        return state.user
    })
    const handelSubmitForm = async(e) => {
        e.preventDefault()

        // const obj = {
        //     userId: userState.user._id,
        //     ...inputFields
        // }
        // debugger
        
        // const url = `preferences/suggestions?userId=${obj.userId}`;
        // console.log(url)
        // try{
        //     const res = dispatch(addItem({url : "/preferences",items:obj }))
        // }catch(err){
        //     console.log(err)
        // }

        // try {
        //     const res = dispatch(fetchItems({ url})).unwrap();
        //     console.log(res)
        // }
        // catch (err) {
        //     console.log(err)
        // }
        try {
            const res = await dispatch(fetchItems({ url: `search?country=India` })).unwrap();
            console.log(res)
            navigate('/destination')
          } catch (err) {
            console.log(err)
          }

    }

    const handelInput = (e) => {
        setInputFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <section className="user-review-section py-5">
            <div className="container">
                <h2 className="text-center mb-4">Confused where to go ?</h2>
                <p>Check it out now</p>
                <form className="review-form" onSubmit={handelSubmitForm}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="destination" className="form-label">Destination Country</label>
                                <input type="text" className="form-control" name='country' placeholder="Enter destination Country" onChange={handelInput} />
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="reviewerName" className="form-label">Description</label>
                                <input type="text" className="form-control" id="reviewerName" placeholder="Enter Desc" />
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="reviewerName" className="form-label">Prefered Date</label>
                                <input type="date" className="form-control" name='preferredDate' onChange={handelInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reviewText" className="form-label">Travel Way</label>
                                <select className="form-control" name='travelWay' onChange={handelInput}>
                                    <option value="">Choose your way of travel</option>
                                    <option value="Car">1 - Roadways</option>
                                    <option value="Flight">2 - Flight</option>
                                    <option value="Train">3 - Railways</option>
                                    {/* <option value="4">4 - Very Good</option>
                                    <option value="5">5 - Excellent</option> */}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="reviewerName" className="form-label">Destination City</label>
                                <input type="text" className="form-control" name='city' placeholder="Enter your destination city" onChange={handelInput} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="reviewerName" className="form-label">Budget</label>
                                <input type="number" className="form-control" name='budget' placeholder="Enter your budget" onChange={handelInput} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="rating" className="form-label">Destination Type</label>
                                <select className="form-control" name='destinationType' onChange={handelInput}>
                                    <option value="">Destination Type</option>
                                    <option value="mountains">1 - Mountains</option>
                                    <option value="beaches">2 - Beaches</option>
                                    <option value="cafes">3 - Cafes</option>

                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group-full">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Suggestion