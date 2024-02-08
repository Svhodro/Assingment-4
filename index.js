//start project

//    1st task Done

// function  calculateMoney(ticketSale){
//     if (ticketSale > 0) {
//         let sale = ticketSale;
//         let totalMoney = (( sale * 120) - ( 500 + (8 * 50) ))
//         return totalMoney;
//     }
//     else{
//          let error ="Invalid Number"
//          return error;
//     }  

// }


// 2nd task Done

//   function checkName(name){
//        if (typeof name === "string") {
//           let nameValue = name;
//           let nameValuecase =nameValue.toLocaleLowerCase();        
//           let lC= nameValuecase.slice(-1);

//          if(lC == "a"||lC == "e"||lC == "i"||lC == "o"||lC == "u"||lC == "y"||lC == "w" ){
//           let nameTypeGood = "Good Name"
//             return nameTypeGood;
//         }
//          else{
//             let nameTypeBad = "Bad Name"
//             return nameTypeBad;
//         }      

//        } else {
//         let error ="invalid"
//         return error;
//        }
//   }


// // 3rd task Done

// function deleteInvalids(array){
//      let newArray=[];
//     if (Array.isArray(array)) {
//         //condition

//         for (const key in array) {            
//             //Loop

//           if (typeof array[key] == "number" && !isNaN(array[key]) ) {
//             //condition

//              newArray.push(array[key])

//           }
//         }
//         return newArray;
//     }
//     else {       
//         let err ="Invalide Array";
//         return err;

//     }
//     //return statment

    
// }




// 4th Done
function password(obj) {
    let objLength = Object.keys(obj).length
    let name =Object.keys(obj)[0];
    let birthTime =Object.keys(obj)[1];
    let siteName =Object.keys(obj)[2];   
    if (objLength==3 && name=="name"&& birthTime=="birthYear"&&siteName=="sitename") {
        let x=obj.birthYear;
        let birthValue =x.toString().length;
        let site=obj.sitename;
        let userName =obj.name
        let siteChange= site.charAt(0).toUpperCase() + site.slice(1);
        // console.log(siteChange)
                if ( birthValue == 4) {

                    let pass =siteChange +"#"+ userName +"@"+x;
                    return pass


                 }
                 else {
                    let err ="invalid"
                    return err;
                 }

    }
}
console.log(password({
    name:"sporsho",
    birthYear:5657,
    sitename:"google"
}))


// // 5 Done

// function monthlySavings(arr, livingCost) {
//     if (Array.isArray(arr) && typeof livingCost === "number") {

//         let newArray=[]        
//         let total=0;

//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] >= 3000) {  
//                 //condition
//                 let tax=((20/100*arr[i]));
//                 newArray.push(arr[i]-tax);               
//             }else{
//                 //condition
//                 newArray.push(arr[i]);
//             }
//         }
       
//        for (const key in newArray) {
//         //loop
//        total+=newArray[key]       
//         }
//         //main calculetion
//         let savemoney=total-cost;
       
//         if (savemoney>=0) {
//             return savemoney;
//         } else if(savemoney < 0){
//             let popUp="earn more"
//             return popUp;
//         }          
       
//        }
//     else {
//         //condition

//         let err = "invalid input";
//         return err;
        
//     }
// }

