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

function createpost(post, cb){
    
    setTimeout(()=>{
        posts.push(post);


        cb();
    },2000);
}


createpost({title: 'post three', body:'this is three'}, getposts);