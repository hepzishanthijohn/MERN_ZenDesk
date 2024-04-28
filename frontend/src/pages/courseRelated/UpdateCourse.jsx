import React from 'react'
import axios from 'axios'
import { useParams,useNavigate  } from 'react-router-dom'
import { useEffect,useState} from 'react'
import Navbar from '../../components/sub-components/Navbar/Navbar'

const UpdateCourse = () => {
    const {id} = useParams()
    const [courseName, setCoursename] = useState()
   
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('https://mernstack-zendesk.onrender.com/course/'+id)
        .then(result => {
            // console.log(result)
           setCoursename(result.data.courseName)
           
        })
        .catch(err => console.log(err))
    },[])

    const Update = (e) =>{
        e.preventDefault();
        axios.put('https://mernstack-zendesk.onrender.com/course/'+id,{courseName})
        .then(result =>{
            console.log(result)
            navigate('/portal/courseList')
        })
        .catch(error =>console.log(error))
    }
  return (
    <>
      <div>
        <Navbar></Navbar>
      <div className="d-flex vh-100  justify-content-center align-items-center">
                <div className="w-50 bg-white text-dark rounded p-3">
                    <form onSubmit={Update} style={{ fontSize: "19px" }}>
                        <h2 className='d-flex justify-content-center'>Update the course Name</h2>
                        <div className="mb-2">
                            <label htmlFor="name">course Name</label>
                            <input type="text" 
                            placeholder='Enter your Name'
                            value={courseName}
                             className='form-control'
                             onChange={(e) => setCoursename(e.target.value)}/>
                        </div>
                        
                        <button className='btn btn-success' style={{background:"#7a1be1"}}>Update</button>
                    </form>
                </div>
            </div>
      </div>
    </>
  )
}

export default UpdateCourse