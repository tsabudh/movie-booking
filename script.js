const hall = document.querySelector(".hall");

console.log("Script is running.");


hall.addEventListener('click', e =>
{
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved" && "sold-out"))
    e.target.classList.toggle("Selected")
    console.log(e.target);
})
