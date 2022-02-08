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

function createpost(post, ){
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

async function init(){
    await createpost({title: 'post three', body:'this is three'});
    getposts();
}

init();