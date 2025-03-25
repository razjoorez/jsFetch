fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => console.log(json))

    

   function getTasks() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(data => {
        // data.forEach(task => {
        //     const ul = document.querySelector('ul');
        //     const li = document.createElement('li');
        //     li.innerText = '${task.title}';
        //     ul.appendChild(li)
        // } )
        const ul = document.querySelector('ul');
       
        for(let i=0; i<10; i++) {
            const li = document.createElement('li');
      // li.innerText = data[i].title;
      li.innerHTML = `<li>${data[i].title}</li>`;
       const completed = document.createElement('input');
       completed.setAttribute('type', 'checkbox');
       completed.checked = data[i].completed;
        li.appendChild(completed);
        ul.appendChild(li)
        }
    })
   };

  getTasks()

    
    