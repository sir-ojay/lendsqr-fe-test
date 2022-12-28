import React from "react";
import {useParams} from "react-router-dom";   
import "./usardetail.scss";
import { useEffect ,useState} from "react";

const UsarDetails = () => {
  const params = useParams();
  console.log(params)
  const [newUser, setNewRow] = useState({});

  useEffect(() => {

const user = localStorage.getItem("user")
if(!user){

    fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${params.id}`)       
      .then((response) => response.json())        
      .then((data) => {
        console.log(data)
        localStorage.setItem("user",JSON.stringify(data ))
         setNewRow(data)
      });
    }else{
      let cacheUser = JSON.parse(user)
      if(cacheUser.id===params.id){
      setNewRow(JSON.parse(user))
    }else{
      fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${params.id}`)       
      .then((response) => response.json())        
      .then((data) => {
        console.log(data)
        localStorage.setItem("user",JSON.stringify(data ))
         setNewRow(data)
      });

    }
    }
  }, [params.id]);
  return (


    
    <div className="user--data">   

      <h2>Personal Information</h2>
      <div className="personal--info">
        <div>
          <p>full Name</p>
          <h2>{newUser.userName}</h2>
        </div>
        <div>
          <p>Phone Number</p>
          <h2>{newUser.phoneNumber}</h2>
        </div>
        <div>
          <p>Email Address</p>
          <h2>{newUser.email}</h2>
        </div>
        <div>
          <p>Bvn</p>
          <h2>{}</h2>
        </div>
        <div>
          <p>Gender</p>
          <h2>{}</h2>
        </div>
        <div>
          <p>Marital status</p>
          <h2>{}</h2>
        </div>
        <div>
          <p>Children</p>
          <h2>None</h2>
        </div>
        <div>
          <p>Type of residence</p>
          <h2>Parent’s Apartment</h2>
        </div>
      </div>

      <hr />

      <h2>Education and Employment</h2>
      <div className="edu--employ">
        <div>
          <p>level of education</p>
          <h2>{newUser?.education?.level}</h2>
        </div>
        <div>
          <p>employment status</p>
          <h2>{newUser?.education?.employmentStatus}</h2>
        </div>
        <div>
          <p>sector of employment</p>
          <h2>{newUser?.education?.employmentStatus}</h2>
        </div>
        <div>
          <p>Duration of employment</p>
          <h2>{newUser?.education?.duration
}</h2>
        </div>
        <div>
          <p>office email</p>
          <h2>{newUser?.education?.officeEmail
}</h2>
        </div>
        <div>
          <p>Monthly income</p>
          <h2>{newUser?.education?.monthlyIncome
}</h2>
        </div>
        <div>
          <p>loan repayment</p>
          <h2>{newUser?.education?.loanRepayment
}</h2>
        </div>
      </div>

      <hr />

      <h2>Socials</h2>
      <div className="socials">
        <div>
          <p>Twitter</p>
          <h2>{newUser?.socials?.twitter}</h2>
        </div>
        <div>
          <p>Facebook</p>
          <h2>{newUser?.socials?.facebook
}</h2>
        </div>
        <div>
          <p>Instagram</p>
          <h2>{newUser?.socials?.instagram}</h2>
        </div>
      </div>

      <hr />

      <h2>Guarantor</h2>

      <div className="first--guarantor">
        <div>
          <p>full name</p>
          <h2>{newUser?.guarantor?.firstName} {newUser?.guarantor?.lastName}</h2>
        </div>
        <div>
          <p>phone number</p>
          <h2>{newUser?.guarantor?.phoneNumber}</h2>
        </div>
        <div>
          <p>Email Address</p>
          <h2>{}</h2>
        </div>
        <div>
          <p>Relationship</p>
          <h2>{}</h2>
        </div>
      </div>

      <hr />

      <div className="second--guarantor">
        <div>
          <p>full name</p>
          <h2>{newUser?.profile?.firstName
} {newUser?.profile?.lastName
}</h2>
        </div>
        <div>
          <p>phone number</p>
          <h2>{newUser?.profile?.phoneNumber
}</h2>
        </div>
        <div>
          <p>Email Address</p>
          <h2>{}</h2>
        </div>
        <div>
          <p>Relationship</p>
          <h2>Sister</h2>
        </div>
      </div>
    </div>
  );
};

export default UsarDetails;
