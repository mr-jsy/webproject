//let cityName = document.querySelector("cityName").value;
// console.log(document.getElementById("cityName").value);
let cityName = document.getElementById("cityName");
const cityname = document.getElementById("cityname");
const submitbtn = document.getElementById("submitbtn");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");
 
 const getinfo = async(event) => {
    event.preventDefault();
    let cityval = cityName.value;
 if(cityval ===""){
    
    cityname.innerText = `plz enter city name before search`;
    datahide.classList.add('data_hide');
   //  console.log(cityname.innerText);
 }else{
     try{
        // console.log(cityval);
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=dc6a7d59f90243d9e3b4436262a35b05`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            cityname.innerText =`${arrData[0].name}, ${arrData[0].sys.country}`;
            // console.log(cityname.innerText);
            temp.innerText = arrData[0].main.temp;
            //  temp_status.innerText = arrData[0].weather[0].main;
            const tempStatus = arrData[0].weather[0].main;
             console.log(tempStatus);
             //condition to check sunny or cloudy

         if(tempStatus == "Sunny"){
               temp_status.innerHTML = 
               " <i class='fas fa-sun' style='color :#eccc68'></i>";
           }else if(tempStatus == "Clear"){
            temp_status.innerHTML = 
            " <i class='fas fa-sun' style='color :#eccc68'></i>";
        }
           else if(tempStatus == "Clouds"){
            temp_status.innerHTML = 
               " <i class='fas fa-cloud' style='color :#f1f2f6'></i>";
           }else if(tempStatus == "Haze"){
            temp_status.innerHTML = 
            "<i class='fas fa-smog' style='color :#f1f2f6'></i>";
           }else if(tempStatus == "Smoke"){
            temp_status.innerHTML = 
            "<i class='fas fa-smog' style='color :#f1f2f6'></i>";
           }
           else if(tempStatus == "Rainy"){
            temp_status.innerHTML = 
               " <i class='fas fa-cloud-rain' style='color :#a4b02e'></i>";
           }else {
            temp_status.innerHTML = 
               " <i class='fas fa-sun' style='color :#eccc68'></i>";
           }
           datahide.classList.remove('data_hide');

     }catch{
        cityname.innerText = `plz enter city name properly`;
        datahide.classList.add('data_hide');
     }
    // console.log("ffhdgd");
  

 }
}

// const getinfo = (event) => {
//     event.preventDefault();
//      // alert("hii");
//     //let cityval = cityName.value;
//     // alert("hi");
//    // console.log(cityval);
//     if(cityName === ""){
//          alert("hi");
//         // let val = cityname.innerText;
//         // console.log(val);
//         cityname.innerText = `plz enter city name before search`;
//        // console.log(cityname.innerText);

//     }else{
//         alert("bye");
//     //     try{
//     // let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=dc6a7d59f90243d9e3b4436262a35b05`;
//     // const response = await fetch(url);
//     // const data = await response.json();
//     // console.log(data);
//     //     }catch{
//     //         city_name.innerText = `plz enter city name properly`;
//     //     }

   
//     }
   

// }

submitbtn.addEventListener("click",getinfo);