const posts=[
    {title: 'post one', body:'this is one'},
    {title: 'post two', body:'this is two'}
];

function getposts(){
    setTimeout(() =>{
        let output='';
        posts.forEach((post, index)=> {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

function createpost(post ){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post);
        const error=false;
        if(!error){
            resolve();
        } else{
            reject('error: something is wrong');
        }
    },2000);
});
}

/*createpost({title: 'post three', body:'this is three'})
.then(getposts)
.catch(err=>console.log(err))*/


//promise all

const promise1= Promise.resolve('hello world');

const promise2= 10;

const promise3= new Promise((resolve,reject) => 
setTimeout(resolve,2000,'goodbye')
 );

 const promise4= fetch('https://jsonplaceholder.typicode.com/users')
 .then(res => res.json());


 Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));


