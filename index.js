const url = "https://www.boredapi.com/api/activity";
const task = document.querySelector("p");
const button = document.querySelector("button");


const fetchData = async () => {
    try {
        const response = await fetch(url);
    const data = await response.json();
    
    task.innerText = data.activity;

    console.log(data);
    } catch (error) {
        console.log("Error Fetching activity: ", error);
    }
    
}

button.addEventListener("click", fetchData);