const posts = [
    {title:'Post One', body: 'This is post one'},
    {title:'Post Two', body: 'This is post one'}

] ;

function getPosts() {
    setTimeout(function() {
        let output = '';
       posts.forEach((post, index)=> {
        output += `<li>${index} - ${post.title} </li>`;
       });
       document.body.innerHTML = output;
    },1000);
};

//getPosts();

function createPosts(post,callBack) {
    setTimeout(()=> {
        posts.push(post);
        callBack();
    },2000)
};

createPosts({title: 'Post Three', body: 'This is post three'},getPosts )


