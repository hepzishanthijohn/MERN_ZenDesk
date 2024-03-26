import React from 'react'
import axios from 'axios'
import { useParams,useNavigate  } from 'react-router-dom'
import { useEffect,useState} from 'react'

const UpdateForm = () => {
    const {id} = useParams()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [contact, setContact] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:5000/members/'+id)
        .then(result => {console.log(result)
           setName(result.data.name)
           setEmail(result.data.email)
           setContact(result.data.contact)
        })
        .catch(err => console.log(err))
    },[])

    const Update = (e) =>{
        e.preventDefault();
        axios.put('http://localhost:5000/members/'+id,{name,email,contact})
        .then(result =>{
            console.log(result)
            navigate('/portal/listmember')
        })
        .catch(error =>console.log(error))
    }
  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-50 bg-white text-dark rounded p-3">
                    <form onSubmit={Update} style={{ fontSize: "19px" }}>
                        <h2>Update User</h2>
                        <div className="mb-2">
                            <label htmlFor="name">Name</label>
                            <input type="text" 
                            placeholder='Enter your Name'
                            value={name}
                             className='form-control'
                             onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="name">Email</label>
                            <input type="text" 
                            placeholder='Enter your Email id' 
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="contact">Contact</label>
                            <input type="text" 
                            placeholder='Enter your Contact' 
                            className='form-control'
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                        <button className='btn btn-success'>Update</button>
                    </form>
                </div>
            </div>
    </>
  )
}

export default UpdateForm