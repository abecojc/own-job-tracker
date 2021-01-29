// //adzuna API id/key
// const APP_ID = 'd9bee79e'
// const APP_KEY = 'a8eea83bb5dbb169da71decb4c8cac85'
//
// //top search bar
// let searchForm = document.querySelector('#search-form')
// let jobType = document.querySelector('#job-type')
//
// //result area
// const resultSection = document.querySelector('#result-section')
// const searchHeader = document.querySelector('#app')
//
// // let jobDetails = document.querySelector('#job-details')
// let jobDetail = document.querySelector('#details-section')
// const SEARCH_COUNTRY = 'us'
//
// //center search bar
// let searchFull = document.querySelector('#form')
// let keyword = document.querySelector('#keyword')
// const searchFormFull = document.querySelector('#search-page')


firebase.auth().onAuthStateChanged((user)=> {
    if(user){

        document.querySelector('#user')
            .innerHTML = `${user.displayName}`
        // console.log('User:', user)

    }  else {
        // user doesn't exit
        window.location.href = './index.html'
    }
})
// keyword = jobType
// searchFull = searchForm
// let likes = 0
// const allLikes = []
//
// function onClick(){
//   likes += 1;
//   document.querySelector('#favorite')
//   // allLikes.push(likeCount)
//   // console.log(allLikes)
// }
// console.log(likes)
//
// let keyName = keyword.value
// let jobName = jobType.value
// let jobKey = new jobKey;
//     if(keyName===''){
//         jobKey=jobName
//     }else{
//         jobKey=keyName
//     }
// console.log('jobkey',jobKey)
// let keyResults;
// let keywords;
// let keywordsFound;
//
//
// async function jobKeys(jobKey) {
//
//     keyResults = await searchJobs(jobKey)
//
//     keywords = keyResults.results // this is an Array
//     console.log('keywords', keywords)
//     keywordsFound = keyResults.count
//     console.log('Found', keywordsFound)
// }
//
// //display results from center search bar
//     searchFull.addEventListener('submit', async function (e) {
//         e.preventDefault()
//
//         await jobKeys(jobKey)
//
//         resultSection.innerHTML = `
//
//       <div id="result-section" class="p-10">
//           <h2 class=" text-xl text-white shadow-lg text-center rounded p-2">Search Results</h2>
//           <h2 class="text-center rounded p-2 bg-gray-400 text-white">${keywordsFound} jobs found for <strong>${keyName}</strong> in ${SEARCH_COUNTRY.toUpperCase()}</h2>
//       </div>`
//
//         jobList(keywords,div)
//
//         let i=0;i++;
//         allJobs.push(keywords)
//         console.log("all jobs",allJobs[i])
//
//         resultSection.appendChild(div)
//         jobName.value =''
//         keyName.value=''
//     })
//
// //display results from top search bar
//     searchForm.addEventListener('submit', async function (e) {
//         e.preventDefault()
//
//         await jobKeys(jobKey)
//
//         resultSection.innerHTML = `
//
//               <div id="result-section mt-56" class="p-10">
//                   <h2 class=" bg-black shadow-lg text-center rounded p-2">Search results</h2>
//                   <h2 class="text-center p-2 text-xl border-b-2 w-5/6 border-white text-white">${keywordsFound} jobs found for <strong>${jobName}</strong> in ${SEARCH_COUNTRY.toUpperCase()}</h2>
//               </div>`
//
//         jobList(keywords, div)
//
//         //
//         // let i=0;i++;
//         // allJobs.push(keywords)
//         // console.log("all jobs",allJobs[i])
//
//         resultSection.appendChild(div)
//         jobName.value =''
//         keyName.value=''
//
//     })
//
//
//     let div;
//     function jobList(keywords,div){
//           keywords.forEach( (key)=> {
//          innerDiv(key)
//           })}
//
//    function innerDiv(key) {
//        div = document.createElement('div')
//       div.innerHTML = `
//        <div id="job-details" class=" rounded shadow-lg mb-4 hover:bg-gray-400">
//            <h4 class="p-2 text-sm border-b-2 whitespace shadow-2xl cursor-pointer border-black bg-gray-400 my-2 hover:bg-gray-500">
//
//                 <a href="${key.redirect_url}" target="iframe" class="hover:bg-red-500 m-2"> <em>Job title: </em>
//                    ${key.title} </a>
//                 <p><em>Location: </em>${key.location.display_name + ', ' + key.location.area[1] + ', ' + key.location.area[0]}</p>
//
//                 <p><em>Company:</em> ${key.company.display_name}</p>
//                 <p><em>Job categories:</em> ${key.category.label}</p>
//                 <p><em>Date posted: </em>${key.created}</p>
//                 <p>${key.id}</p>
//
//            </h4>
//
//            <p  class="p-2 bg-white text-sm">
//                ${key.description}
//            </p>
//        </div>`
//
//       resultSection.appendChild(div)
//       console.log('div', div)
//
//       keyName.value = ''
//       jobName.value = ''
//       searchHeader.classList.remove('hidden')
//       searchFormFull.classList.add('hidden')
//     }
//
//
//     let allJobs=[]
//     let justOneJob = allJobs.filter((job)=>{
//         job.onclick = jobDetails
//     })
//
//
// // //display results from top search bar
// //     searchForm.addEventListener('submit', async function (e) {
// //        e.preventDefault()
// //
// //         await jobKeys(jobKey)
// //
// //         resultSection.innerHTML = `
// //
// //           <div id="result-section mt-56" class="p-10">
// //               <h2 class=" bg-black shadow-lg text-center rounded p-2">Search results</h2>
// //               <h2 class="text-center p-2 text-xl border-b-2 w-5/6 border-white text-white">${keywordsFound} jobs found for <strong>${jobName}</strong> in ${SEARCH_COUNTRY.toUpperCase()}</h2>
// //           </div>`
// //
// //         jobList(keywords)
// //
// //           // jobs.forEach((job)=> {
// //           //   const div = document.createElement('div')
// //           //
// //           //     div.innerHTML = `
// //           //      <div class=" rounded shadow-lg mb-4 hover:bg-gray-400">
// //           //          <h6 class="p-2 text-sm border-b-2 whitespace shadow-2xl cursor-pointer bg-gray-400 my-2 hover:bg-gray-500">
// //           //
// //           //               <a href="${job.redirect_url}"> <em>Job title: </em>
// //           //                  ${job.title} </a>
// //           //               <p><em>Location: </em>${job.location.display_name+', '+job.location.area[1]+', '+job.location.area[0]}</p>
// //           //
// //           //               <p><em>Company:</em> ${job.company.display_name}</p>
// //           //               <p><em>Job categories:</em> ${job.category.label}</p>
// //           //               <p><em>Date posted: </em>${job.created}</p>
// //           //               <p>${job.id}</p>
// //           //
// //           //               <button type="button" id="favorite" onClick="onClick()"><i class="fas fa-thumbs-up bg-blue-400"></i>Favorite</button>
// //           //
// //           //          </h6>
// //           //
// //           //          <p  class="p-2 bg-white text-sm">
// //           //              ${job.description}
// //           //          </p>
// //           //
// //           //      </div>`
// //          let i=0;i++;
// //           allJobs.push(keywords)
// //           console.log("all jobs",allJobs[i])
// //
// //           resultSection.appendChild(div)
// //           jobType.value =''
// //
// //
// //                 // JustOver40k.forEach((job) =>{
// //                 //   resultSection.nextElementSibling.innerHTML =
// //                 //     `<div class="rounded flex flex-col justify-between cursor-pointer border-2 border-gray-600 bg-gray-400 shadow-lg my-2 hover:bg-gray-600-400">
// //                 //     Hello ${job.title}</div>`
// //
// //                     //resultSection.appendChild(div)})
// //
// //         // searchHeader.classList.remove('hidden')
// //         // // searchFull.classList.add('hidden')
// //         // console.log(searchFull.classList)
// //                  })
//
//
//
//    function jobDetails(allJobs){
//
//        let newEl = document.createElement('div')
//
//         // resultSection.nextElementSibling.innerHTML =
//        newEl.innerHTML =
//          `<div class="pt-24 rounded flex flex-col justify-between bg-white shadow-lg my-2 hover:bg-yellow-200">
//               <h6 class="p-2 whitespace-nowrap border-b-2 border-black shadow-2xl">
//
//
//                     <button type="button" id="favorite" onClick="onClick()">
//                         <i class="fas fa-thumbs-up bg-blue-400"></i>
//                         Favorite</button>
//               </h6>
//               <p class="p-2 bg-white"> Hello </p>
//            </div>`
//
//           // jobDetail.appendChild(newEl)
//           // if(resultSection.onclick && jobDetail.innerHTML!==''){
//           //     newEl.innerHTML=`<div class="hidden"></div>`
//           // }else{
//           //     jobDetail.appendChild(newEl)
//           //
//           // }
//    }
//
//
// //get API results
//     async function searchJobs (jobString, jobsCount = 10, country = SEARCH_COUNTRY) {
//
//       const url = `https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=d9bee79e&app_key=a8eea83bb5dbb169da71decb4c8cac85&results_per_page=${jobsCount}&what=${jobString}&content-type=application/json`
//       console.log("url",url)
//
//       const result = await fetch(url)
//       const data = result.json()
//
//        return data
//     }

//adzuna API id/key
const APP_ID = 'd9bee79e'
const APP_KEY = 'a8eea83bb5dbb169da71decb4c8cac85'

//top search bar
let searchForm = document.querySelector('#search-form')
let jobType = document.querySelector('#job-type')

//result area
const resultSection = document.querySelector('#result-section')
const searchHeader = document.querySelector('#app')

// let jobDetails = document.querySelector('#job-details')
let jobDetail = document.querySelector('#details-section')
const SEARCH_COUNTRY = 'us'

//center search bar
let searchFull = document.querySelector('#form')
let keyword = document.querySelector('#keyword')
const searchFormFull = document.querySelector('#search-page')

// keyword = jobType
// searchFull = searchForm
// let likes = 0
// const allLikes = []
//
// function onClick(){
//   likes += 1;
//   document.querySelector('#favorite')
//   // allLikes.push(likeCount)
//   // console.log(allLikes)
// }
// console.log(likes)


//display results from center search bar
searchFull.addEventListener('submit', async function (e) {
    e.preventDefault()

    const keyName = keyword.value
    console.log(keyName)

    let keyResults = await searchJobs(keyName)
    console.log('1',keyResults)

    let keywords = keyResults.results // this is an Array
    console.log('2',keywords)

    let keywordsFound = keyResults.count
    console.log('3',keywordsFound)

    resultSection.innerHTML = `
    
      <div id="result-section" class="p-10">
          <h2 class=" text-xl text-white shadow-lg text-center rounded p-2">Search Results</h2>
          <h2 class="text-center rounded p-2 bg-gray-400 text-white">${keywordsFound} jobs found for <strong>${keyName}</strong> in ${SEARCH_COUNTRY.toUpperCase()}</h2>  
      </div>`

    keywords.forEach( (key)=> {
        const div = document.createElement('div')
        div.innerHTML = `
           <div id="job-details" class=" rounded shadow-lg mb-4 hover:bg-gray-400">  
               <h4 class="p-2 text-sm border-b-2 whitespace shadow-2xl cursor-pointer border-black bg-gray-400 my-2 hover:bg-gray-500">
                   
                    <a href="${key.redirect_url}"> <em>Job title: </em>
                       ${key.title} </a> 
                    <p><em>Location: </em>${key.location.display_name+', '+key.location.area[1]+', '+key.location.area[0]}</p> 
                
                    <p><em>Company:</em> ${key.company.display_name}</p>
                    <p><em>Job categories:</em> ${key.category.label}</p>
                    <p><em>Date posted: </em>${key.created}</p>
                    <p>${key.id}</p>
                    
               </h4>
              
               <p  class="p-2 bg-white text-sm">
                   ${key.description}  
               </p>
      
           </div>`
        resultSection.appendChild(div)

        keyword.value =''
        searchHeader.classList.remove('hidden')
        searchFormFull.classList.add('hidden')

    })
})

//display results from top search bar
searchForm.addEventListener('submit', async function (e) {
    e.preventDefault()

    const jobName = jobType.value
    console.log(jobName)

    let jobResults = await searchJobs(jobName)
    console.log('jobResults',jobResults)

    let jobs = jobResults.results // this is an Array
    console.log('jobs',jobs)

    let jobsFound = jobResults.count
    console.log('jobsFound',jobsFound)

    resultSection.innerHTML = `
   
          <div id="result-section mt-56" class="p-10">
              <h2 class=" bg-black shadow-lg text-center rounded p-2">Search results</h2>
              <h2 class="text-center p-2 text-xl border-b-2 w-5/6 border-white text-white">${jobsFound} jobs found for <strong>${jobName}</strong> in ${SEARCH_COUNTRY.toUpperCase()}</h2>
          </div>`

    jobs.forEach(function (job) {
        const div = document.createElement('div')

        div.innerHTML = `
               <div class=" rounded shadow-lg mb-4 hover:bg-gray-400">  
                   <h6 class="p-2 text-sm border-b-2 whitespace shadow-2xl cursor-pointer bg-gray-400 my-2 hover:bg-gray-500">
                       
                        <a href="${job.redirect_url}"> <em>Job title: </em>
                           ${job.title} </a> 
                        <p><em>Location: </em>${job.location.display_name+', '+job.location.area[1]+', '+job.location.area[0]}</p> 
                    
                        <p><em>Company:</em> ${job.company.display_name}</p>
                        <p><em>Job categories:</em> ${job.category.label}</p>
                        <p><em>Date posted: </em>${job.created}</p>
                        <p>${job.id}</p>
                        
                        <button type="button" id="favorite" onClick="onClick()"><i class="fas fa-thumbs-up bg-blue-400"></i>Favorite</button>      
                          
                   </h6>
                  
                   <p  class="p-2 bg-white text-sm">
                       ${job.description}  
                   </p>
          
               </div>`

        resultSection.appendChild(div)
        jobType.value =''


        // JustOver40k.forEach((job) =>{
        //   resultSection.nextElementSibling.innerHTML =
        //     `<div class="rounded flex flex-col justify-between cursor-pointer border-2 border-gray-600 bg-gray-400 shadow-lg my-2 hover:bg-gray-600-400">
        //     Hello ${job.title}</div>`

        //resultSection.appendChild(div)})

        // searchHeader.classList.remove('hidden')
        // // searchFull.classList.add('hidden')
        // console.log(searchFull.classList)
    })
})

// 92b62ee9bfd90c11c097004b51438beb
//
//     let allJobs=[]
//     allJobs.push(searchJobs)
//     let JustOver40k = allJobs.filter((data)=>{
//         console.log("10k",data.salary_min >= 10000)
//     })

function jobDetails(job){

    let newEl = document.createElement('div')

    // resultSection.nextElementSibling.innerHTML =
    newEl.innerHTML =
        ` <div class="pt-24 rounded flex flex-col justify-between bg-white shadow-lg my-2 hover:bg-yellow-200">
              <h6 class="p-2 whitespace-nowrap border-b-2 border-black shadow-2xl">
     
                    <button type="button" id="favorite" onClick="onClick()">
                        <i class="fas fa-thumbs-up bg-blue-400"></i>
                        Favorite</button>                        
              </h6>
              <p class="p-2 bg-white"> Hello </p>             
           </div>`

    jobDetail.appendChild(newEl)
    if(resultSection.onclick && jobDetail.innerHTML!==''){
        newEl.innerHTML=`<div class="hidden"></div>`
    }else{
        jobDetail.appendChild(newEl)

    }
}


//get API results
async function searchJobs (jobString, jobsCount = 10, country = SEARCH_COUNTRY) {

    const url = `https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=d9bee79e&app_key=a8eea83bb5dbb169da71decb4c8cac85&results_per_page=${jobsCount}&what=${jobString}&content-type=application/json`
    console.log("url",url)

    const result = await fetch(url)
    const data = result.json()

    return data
}


// const API_URL = `https://api.adzuna.com/v1/api/jobs/us/search`
//
// //1. Get the ID via the queryString from the current URL
// const queryString = window.location.search
// const params = new URLSearchParams(queryString); // create a new object
// const resultsId = params.get('id')
//
// // method chaining
// getSingleJob()
//     .then(id =>updatePage(id))
//
//
//
// function updatePage(id = {}){
//     document.querySelector('#details-section')
//         .innerHTML = `
//              <div class="rounded flex flex-col justify-between cursor-pointer border-2 border-blue-900 shadow-lg my-2 hover:bg-blue-400">
//                 <h4 class="p-2 border-2 border-blue-400 bg-blue-500 text-white whitespace-nowrap shadow-2xl">
//
//                     <a href="${job.redirect_url}"> ${job.title} ---------- ${job.location.display_name} </a>
//                       <p>${job.salary_max}</p>
//                       <div>
//                           <button type="button" id="favorite" "><i class="fas fa-thumbs-up"></i>Favorite</button>
//                           <a class="twitter-share-button bg-white text-blue-800" href="https://twitter.com/intent/tweet">Tweet</a>
//     <!--                   <link rel="canonical" href="/web/tweet-button">-->
//                       </div>
//                 </h4>
//                       <p  class="p-2">${job.description} </p>
//               </div>`
//
//     resultSection.appendChild(div)
//
// }
// //2. Use the ID to query the API
//
// async function getSingleJob(id){
//     const results = await fetch(`${API_URL}/item?results.id=${id}`,{
//         headers : {
//             'app-id' : APP_ID,
//             'app-key': APP_KEY
//         }
//
//     });
//
//     const data = await results.json()
//    console.log("data",data)
//     return data.results[0]
// }

//function updatePage
//function resultSection
//job =jobName+keyName || job= jobName, job=keyName
//job details