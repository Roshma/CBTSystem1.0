import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='container'>
    <div className="row">
     <div className="col">
     <div className="col-lg-11">
     <p className="lead">Diploma in Cloud Computing and ERP </p>
     <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Resources </h1>
    <p className='lead'>Github repository <span> <Link href='https://github.com/Roshma/CBTSystem1.0.git'>'https://github.com/Roshma/CBTSystem1.0.git'</Link></span></p>
      <br></br>
      <p className='lead'>Login to AWS <span> <Link href='https://aws.amazon.com/'>Amazon Web Services (AWS)</Link></span></p>
      <br></br>
      <p className='lead'>Login to Azure <span> <Link href='https://azure.microsoft.com/en-us'>Mocrosoft Azure </Link></span></p>
   </div>

     </div>
    </div>
 </div>
  )
}

export default page