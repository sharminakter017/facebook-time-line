
const post_form = document.getElementById('post_form');
const msg = document.querySelector('.msg');
const all_post = document.querySelector('.all-post');



const getpost = () => {

    let posts = readLsData('post');
    console.log(posts);


    if(!posts){

        all_post.innerHTML = `


        <div class="post-time-line my-3">
        <div class="card my-3 shadow-sm">
            <div class="card-body my-3">
                
                    
    
               <h3>No post found!</h3>

                
            </div>
            
        </div>
        
       </div>


        
        
        
        `








    }

    if(posts){
        let list = ''
        posts.reverse().map((data,index) => {

            list += `

            <div class="post-time-line my-3">
    <div class="card my-3 shadow-sm">
        <div class="card-body my-3">
            <div class="post-auth-area">
                <div class="user-info">
                    <img src="${data.aphoto}" alt="">

                    <div class="details">
                        <b>${data.aname}</b>
                        <span>12h. <i class="fas fa-globe-africa"></i></span>
                       
                    </div>
                    
                </div>

                <div class="dot">
                    <div class="dot">
                        <div class="dropdown">
                            <a class="dropdown-toggle threedot" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-ellipsis-h"></i>
                            </a>
                          
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                              <li><a class="dropdown-item edit_post" href="#">Edit</a></li>
                              <li><a class="dropdown-item delete_post" post_id = ${data.id} href="#">Delete</a></li>
                              
                            </ul>
                          </div>
                    </div>
                </div>
            </div>

            <div class="post-content-area my-3">
                <p>${data.pcontent}</p>
                

            </div>
            
        </div>
        <img src="${data.pphoto}" alt="">
    </div>
    
   </div>

   <hr>

   <div class="comment-box">
    <div class="like">
        <button><i class="fas fa-thumbs-up"></i></button>
        <span>Like</span>
    </div>
    <div class="like">
        <button><i class="fas fa-comment-alt"></i></button>
        <span>Comment</span>
    </div>
    <div class="like">
        <button><i class="fab fa-facebook-messenger"></i></button>
        <span>Send</span>
    </div>
   </div>
   <hr>
            
            
            
            
            `
        })

        all_post.innerHTML = list;
    }
}

getpost();







//get element =====================================>
post_form.onsubmit = (e) => {
    e.preventDefault();

    //get element by object
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());
    const {aname,aphoto,pcontent,pphoto} = Object.fromEntries(form_data.entries());


    //create a random id

    const randomId = Math.floor(Math.random() * 1000000) + '-'+ Date.now();
   


    //form-validation

    if(!aname || !aphoto || !pcontent || !pphoto){
        msg.innerHTML = setalert('Fields must not be empty!');

    }else{
        createLsData('post',{...data, id: randomId })
        msg.innerHTML = setalert('Data Stable','success');
        e.target.reset();
        getpost();
       

    }

   

    

}


all_post.onclick = (e) => {
    e.preventDefault()
    
    if(e.target.classList.contains('delete_post')){
        
        const postId = e.target.getAttribute('post_id')

        //get all posts
        const posts = readLsData('post');
        
        // delete data array
        const delete_data = posts.filter(data => data.id !== postId);

        //now update new data
        updateLsData('post',delete_data);
        getpost();
    }
}