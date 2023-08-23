
const loadPhone=()=>{
    const userSearch =document.getElementById('userSearch').value;
    const url =`https://openapi.programming-hero.com/api/phones?search=${userSearch}`;
     fetch(url)
    .then(res=>res.json())
   // .then(data=>displayPhone(data));
    .then(data=>displayPhone(data.data))
};
 const displayPhone =phones=>{
    const searchContainer =document.getElementById('searchContainer');
    searchContainer.innerHTML="";
    phones.forEach(phone => {
    //console.log(phone)
    const div = document.createElement('div')
    div.innerHTML=`
        <div class="card-group ">
    <div class="card ">
      <img style="width: 260px; height: 312px; padding:10px"src="${phone.image}">
      <div class="card-body">
        <h5 class="card-title">Brand:${phone.brand} </h5>
        <p class="card-text">Model: ${phone.phone_name}</p>
        <button onclick="loadPhoneDetails('${phone.slug}')">Details</button>
      </div>
    </div>
    `
    ;
    searchContainer.appendChild(div);
    });
}



const loadPhoneDetails=phone=>{
const url= `https://openapi.programming-hero.com/api/phone/${phone}`;
//const phoneDetailUrl= `https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`;


 fetch(url)
.then(res => res.json())
.then(data => displayPhoneDetails(data))
}


const displayPhoneDetails=phone_dtails=>{
  //console.log(phone_dtails.data.image);
  //console.log(phone_dtails.data.brand);

   const displayDetailsContainer =document.getElementById('displayDetailsContainer');
   displayDetailsContainer.innerHTML="";

  const div = document.createElement('div');
  div.innerHTML= `
  <div class="card ">
      <img style="width: 460px; height: 512px; padding:10px"src="${phone_dtails.data.image}">
  </div>
      
    `;
    displayDetailsContainer.appendChild(div); 
}


