const jobContainer = document.getElementById("jobContainer")


const totalCount = document.getElementById("totalCount")
const interviewCount = document.getElementById("interviewCount")
const rejectedCount = document.getElementById("rejectedCount")
const numCount = document.getElementById("numCount")


let currentTab = "all"

// Update Counts

function updateCounts(){
   let total = 0;
   let interview = 0;
   let rejected = 0;

   for(const card of jobContainer.children){
      if (card.style.display ==="none") continue;

      total++;
      const statusText = card.querySelector(".status").innerText;
      if (statusText === "Interview") interview++;
      if (statusText === "Rejected") rejected++;
   }

   totalCount.innerText = total;
   interviewCount.innerText = interview;
   rejectedCount.innerText = rejected;
   numCount.innerText = total + " Job";
}

// Render Filter

function renderFilter(){
   for(const card of jobContainer.children){
      const statusText = card.querySelector(".status").innerText;
      if(currentTab === "all"){
         card.style.display = "block";
      } else if (currentTab === "interview"){
         card.style.display = statusText === "Interview" ? "block": "none";
      } else if (currentTab === "rejected"){
         card.style.display = statusText === "Rejected" ? "block": "none";
      }
      }

      updateCounts();
   }

// Click

jobContainer.addEventListener("click",function(e){
   const card = e.target.closest("#jobContainer > div");
   if (!card) return;

   const statusEl =card.querySelector(".status");

   // Interview button

   if (e.target.classList.contains("interview-btn")){
      if (statusEl.innerText === "Interview"){
         statusEl.innerText = "Not Applied";
         statusEl.className =
         "status px-6 py-2 bg-[#EEF4FF] shadow-lg inline-block";
         }else{
            statusEl.innerText = "Interview";
            statusEl.className = 
            "status px-6 py-2 bg-green-100 text-green-700 shadow-lg inline-block";
         }
      }

   // Rejected button

      if (e.target.classList.contains("rejected-btn")){
         if(statusEl.innerText === "Rejected") {
            statusEl.innerText = "Not Applied";
            statusEl.className =
            "status px-6 py-2 bg-[#EEF4FF] shadow-lg inline-block";
         }else{
            statusEl.innerText = "Rejected";
            statusEl.className =
            "status px-6 py-2 bg-red-100 text-red-700 shadow-lg inline-block";
         }
      }

   // Trash

      if (e.target.classList.contains("fa-trash")){
         card.remove();
      }
      renderFilter();
});

  // Filter buttons

document.getElementById("all-filter-btn").addEventListener("click",function(){
   currentTab = "all";
   setActiveTab(this);
   renderFilter();
});
document.getElementById("interview-filter-btn").addEventListener("click",function(){
   currentTab = "interview";
   setActiveTab(this);
   renderFilter();
});
document.getElementById("rejected-filter-btn").addEventListener("click",function(){
   currentTab = "rejected";
   setActiveTab(this);
   renderFilter();
});

function setActiveTab(activeBtn){
   const allTabs = [
      document.getElementById("all-filter-btn"),
      document.getElementById("interview-filter-btn"),
      document.getElementById("rejected-filter-btn"),
      ];
      for (const btn of allTabs) {
         btn.classList.remove("bg-blue-600","text-white");
      }
      activeBtn.classList.add("bg-blue-600","text-white");
}

updateCounts();
renderFilter();



