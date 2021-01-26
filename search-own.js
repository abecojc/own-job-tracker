// APP_ID = d9bee79e
//APP_KEY = a8eea83bb5dbb169da71decb4c8cac85
const searchForm = document.querySelector('#search-form')
const jobType = document.querySelector('#job-type')
const resultSection = document.querySelector('#result-section')
const searchHeader = document.querySelector('#app')

const SEARCH_COUNTRY = 'us'
//adds
// const searchCity = document.querySelector('#location1')
const searchFull = document.querySelector('#form')
const keyword = document.querySelector('#keyword')
const searchFormFull = document.querySelector('#search-page')

let likes = 0
const allLikes = []

function onClick(){
  likes += 1;
  document.querySelector('#favorite')
  // allLikes.push(likeCount)
  // console.log(allLikes)
}
console.log(likes)

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
  <h2 class=" text-xl text-white shadow-lg text-center rounded p-2">
      <h1>${keywordsFound} jobs found for <strong>${keyName}</strong> in ${SEARCH_COUNTRY.toUpperCase()}</h1>
  
  </div>`

  keywords.forEach(function (key) {
    const div = document.createElement('div')
    div.innerHTML = `
       <div class="rounded cursor-pointer border-2 border-blue-900 shadow-lg my-2 hover:bg-blue-400">
          <h4 class="p-2 border-2 border-yellow-200 bg-blue-500 text-white whitespace-nowrap shadow-2xl">
                <a href="${key.redirect_url}">
                       ${key.title}
                </a> | ${key.location.display_name} 
                <p>${key.location.area[0]}</p>
                <p>${key.company.display_name}</p>
                <p>${key.category.label}</p>
          </h4>
           <p  class="p-2 text-white ">
               ${key.description}
           
           </p>
       </div>`
    resultSection.appendChild(div)

    searchHeader.classList.remove('hidden')
    searchFormFull.classList.add('hidden')
    // console.log(searchFull.classList)
  })
})
//end adds

searchForm.addEventListener('submit', async function (e) {
   e.preventDefault()

  const jobName = jobType.value

  console.log(jobName)

  let jobResults = await searchJobs(jobName)
  console.log('1',jobResults)
  let jobs = jobResults.results // this is an Array
  console.log('2',jobs)
  let jobsFound = jobResults.count
  console.log('3',jobsFound)
  resultSection.innerHTML = `

  <div id="result-section mt-56" class="p-10">
      <h2 class=" text-xl bg-black shadow-lg text-center rounded p-2">Search results</h2>
      <h1 class="text-center rounded p-2 text-xl bg-blue-400 text-white">${jobsFound} jobs found for <strong>${jobName}</strong> in ${SEARCH_COUNTRY.toUpperCase()}</h1> 
  </div>`

  jobs.forEach(function (job) {
    const div = document.createElement('div')
    div.innerHTML = `
       <div class="rounded flex flex-col justify-between cursor-pointer border-2 border-blue-900 shadow-lg my-2 hover:bg-blue-400">
          <h4 class="p-2 border-2 border-blue-400 bg-blue-500 text-white whitespace-nowrap shadow-2xl">
                
                <a href="${job.redirect_url}">
                       ${job.title}
                 ---------- ${job.location.display_name} </a> 
                 <p>${job.salary_max}</p>
                  <div>
                  <button type="button" id="favorite" onClick="onClick()"><i class="fas fa-thumbs-up"></i>Favorite</button>
<!--                    <p>Likes: <a >0</a></p>-->
                                 
                   <a class="twitter-share-button bg-white text-blue-800" href="https://twitter.com/intent/tweet">Tweet</a>
<!--                   <link rel="canonical" href="/web/tweet-button">-->
                 </div>
                
                       
          </h4>
           <p  class="p-2">
               ${job.description}
           </p>
       </div>`
    resultSection.appendChild(div)

    // searchHeader.classList.remove('hidden')
    // // searchFull.classList.add('hidden')
    // console.log(searchFull.classList)
  })
})
// 92b62ee9bfd90c11c097004b51438beb

let allJobs = searchJobs
let JustOver40k = []
allJobs.filter = function JustOver40k(job){
  (job.salary_min >= 40000)
}

JustOver40k.forEach((job) =>{
  const div = document.createElement('div')
  div.innerHTML = `Hello`

})

async function searchJobs (jobString, jobsCount = 2, country = SEARCH_COUNTRY) {

  const url = `https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=d9bee79e&app_key=a8eea83bb5dbb169da71decb4c8cac85&results_per_page=${jobsCount}&what=${jobString}&content-type=application/json`
  console.log(url)

  const result = await fetch(url)
  const data = await result.json()

  return data
}