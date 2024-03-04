const loadForumPosts = async (searchText = 'comedy') => {
    const repo = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await repo.json();
    console.log();
    const posts = data.posts;
    displayForumPosts(posts);
}

const displayForumPosts = (posts) => {
    const postContainer = document.getElementById('forum-post-container');
    postContainer.textContent = "";
    posts.forEach((post) => {
        // console.log(post);
        const postCard = document.createElement('div');
        postCard.classList = `bg-[#F3F3F5] lg:flex gap-2 rounded-2xl p-10 hover:bg-[#797DFC33] hover:border-2 hover:border-[#797DFC1A]`;
        postCard.innerHTML = `
        <img class="w-[64px] h-[64px] rounded-xl " src="${post.image}" alt="">
        <div>
            <div class="flex gap-5 mb-1">
                <p># ${post.category
            }</p>
                <p>Author: ${post.author.name
            }</p>
            </div>
            <h2 class="text-xl font-bold text-mainColor mb-4">${post.title}
            </h2>
            <p>${post.description
            }</p>
            <hr class=" border-2 border-spacing-2 border-gray-400 border-dashed my-4">
            <div class=" flex justify-between">
                <div class="flex gap-4">
                    <div class="flex items-center gap-2">
                        <img src="icons/icon-7.png" alt="">
                        <p>${post.
                comment_count
            }</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <img src="icons/icon-8.png" alt="">
                        <p>${post.view_count}</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <img src="icons/icon-9.png" alt="">
                        <p>${post.posted_time
            } min</p>
                    </div>
                </div>

                <button onclick="postBtn('${post.title}',${post.view_count})" class="btn btn-forum-post rounded-full"><img class="w-[24px]" src="icons/email.png" alt=""></button>
                
            </div>
        </div>

        `;
        postContainer.appendChild(postCard);


    });


}
const postBtn = (title, viewCount) => {



    // mark-as-read box

    const markAsReadDiv = document.getElementById('mark-as-read');

    const markAsReadCard = document.createElement('div');
    markAsReadCard.classList = `flex justify-between mb-4 bg-white rounded-3xl p-6`;
    markAsReadCard.innerHTML = `
            <h2 class="lg:text-lg font-bold text-mainColor mb-4"> ${title}</h2>
            <div class="flex justify-center items-center gap-2 ">
                 <img src="icons/icon-8.png" alt="">
                 <p>${viewCount}</p>
            </div>
    
    `;
    markAsReadDiv.appendChild(markAsReadCard);

    // mark-as-read-count

    const readCount = getConvertedValue('read-count');
    console.log(readCount);
    const reads = readCount + 1;
    document.getElementById('read-count').innerText = reads;

}


const handleSearch = () => {
    // console.log('search');
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    loadForumPosts(searchText);

};
// Latest posts
const loadLatestPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const latestPosts = data;
    displayLatestPost(latestPosts);

}
const displayLatestPost = (latestPosts) => {

    const latestPostContainer = document.getElementById('latest-post-container');
    latestPosts.forEach((latestPost) => {
        // console.log(latestPost);
        const latestPostCard = document.createElement('div');
        latestPostCard.classList = ` bg-white border border-[#12132D26] rounded-2xl p-4`
        latestPostCard.innerHTML = `
        <img class="rounded-lg" src="${latestPost.cover_image}">
        <div class="flex gap-4 my-3">
            <img src="icons/icon-11.png" alt="">
            <p class="text-gray-400">${latestPost?.author?.posted_date || 'No Publish Date'}</p>
        </div>
        <h2 class="lg:text-lg font-bold text-mainColor mb-2">${latestPost.title}
        </h2>
        <p class="text-gray-400">${latestPost.description
        }
        </p>
        <div class="flex gap-4 mt-4">
            <img class="w-[64px] h-[64px] rounded-full" src="${latestPost.profile_image}">
            <div>
                <h2 class="lg:text-lg font-bold text-mainColor mb-2">${latestPost.author.name}
                </h2>
                <p class="text-gray-400">${latestPost?.designation || "Unknown"}</p>
            </div>
        </div>
        
        
        `;
        latestPostContainer.appendChild(latestPostCard);


    })
}



loadForumPosts();
loadLatestPost()
