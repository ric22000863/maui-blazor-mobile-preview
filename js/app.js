(() => {
  let count=0;
  const content=document.querySelector('#content');
  const links=[...document.querySelectorAll('[data-page]')];
  const summaries=['Freezing','Bracing','Chilly','Cool','Mild','Warm','Balmy','Hot','Sweltering','Scorching'];
  const forecasts=Array.from({length:5},(_,i)=>{const date=new Date();date.setDate(date.getDate()+i+1);const c=Math.floor(Math.random()*75)-20;return {date:date.toLocaleDateString(),c,f:32+Math.trunc(c/0.5556),summary:summaries[Math.floor(Math.random()*summaries.length)]};});
  function weather(){return `<h1>Weather</h1><p>This component demonstrates showing data.</p><div class="table-wrap"><table class="table"><thead><tr><th>Date</th><th>Temp. (C)</th><th>Temp. (F)</th><th>Summary</th></tr></thead><tbody>${forecasts.map(f=>`<tr><td>${f.date}</td><td>${f.c}</td><td>${f.f}</td><td>${f.summary}</td></tr>`).join('')}</tbody></table></div>`;}
  function render(){const path=location.hash.replace(/^#\/?/,'').replace(/\/$/,'');const page=path||'home';links.forEach(a=>{const active=a.dataset.page===page;a.classList.toggle('active',active);a.setAttribute('aria-current',active?'page':'false');});
    if(page==='home')content.innerHTML='<h1>Hello, world!</h1>Welcome to your new app.';
    else if(page==='counter'){content.innerHTML=`<h1>Counter</h1><p role="status">Current count: <span id="count">${count}</span></p><button id="increment" class="btn btn-primary">Click me</button>`;document.querySelector('#increment').addEventListener('click',()=>{document.querySelector('#count').textContent=++count;});}
    else if(page==='weather'||page==='weather-2')content.innerHTML=weather();
    else content.innerHTML='<h3>Not Found</h3><p>Sorry, the content you are looking for does not exist.</p>';
  }
  window.addEventListener('hashchange',render);render();
})();
