// let football = [
//     'liver' ,
//     'Mu' ,
//     'Mc',
//     'ToT'
// ];

// let hocsinh ={
//     ten :  'hiếu',
//     tuoi : 23 , 
//     gioitinh : 'nam',
// }
// console.log(hocsinh.ten);


// console.log(football[1]);
console.error('Lỗi ');
console.warn('ý sời ');
console.info('gì đây');
// for(let i =0 ; i < football.length ; i++){
//         console.log(i);
// }
//   let x = 'ê cu' ;

// if(true){
//     x = 'sao cu';
// }
// console.log(x);

//   function khaibao(){
//     let x = 'gì cu' ;
//     console.log(x);
//   }
// console.log(x);
for(i=1;i<=100;i++){
  if(i%2==0){
    console.log('Đây là số chẵn :' ,i)
  }else {
    console.log('SỐ LẺ',i)
  }
}

let arr = [
    'JS',
    'PHP',
    'Java',
    'C#'
]
// for thường
let abc  = arr.length ;
for(i=0 ; i < abc ;i++){
  console.log('index = ' ,i , 'Value = ' ,arr[i] )
}

// For in : Lấy key 
let toi2 = 'Đào Trọng Hiếu'
let toi = {
  ten:'hiếu',
  tuoi : 23,
  quequan :'Hải Dương'
}
for(let key in toi){
  console.log(key)
}

console.log(toi2[0])

for(let key in toi2){
  console.log(toi2)
  console.log(toi2[key])
}
// for of : lấy values . không để lấy giá trị của object
for(let value of Object.keys(toi)){
  console.log(value)
}


function onclick(){
  document.getElementById('nhapvao').innerHTML='xin chào';
}