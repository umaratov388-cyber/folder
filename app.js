const div=document.getElementById("folder")

const phones = [
    {
        id:1,
        title:"Iphone 18",
        price:1000,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLnQM-t5shuSZM4FhTiOzZ6eiWUlpTESIvvpvc_EiaA&s"
    },
    {
        id:2,
        title:"samsunga15",
        price:500,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXAonJkw5Cyrx7-UX9nd82LA2Li2Jit1WG6Ec0kiLM2A&s"
    },
    {
        id:3,
        title:"vivo x 300",
        price:400 ,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6sjcvO1bqY_6mD6PWdwOSlHbG5ah9JmxfuU-fheNpw&s=10"
    },
    {
        id:4,
        title:"redmi A13",
        price:300,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeORmbmb-CFoDmkyt-RV7p6iETbWdYBoSxhjTMW_BWQ&s=10"
    },

    {
        id:5,
        title:"Honor x9 c",
        price:600, 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDlg0jSLeVpVh10rGr_mNJ3sRYBn6uxokDla3G1VxXA&s"
    }
]

phones.forEach((el)=>{
    console.log(el);
    div.innerHTML += `
    <div>
    <img src="${el.img}">
     <h3>${el.title}</h3>
     <h4>${el.price}</h4>
    </div>
    `
})
