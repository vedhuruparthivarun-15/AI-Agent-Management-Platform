
function showToast(message){
  let t=document.querySelector('.toast');
  if(!t){t=document.createElement('div');t.className='toast';Object.assign(t.style,{position:'fixed',right:'24px',bottom:'24px',background:'#11152a',border:'1px solid rgba(139,124,255,.5)',padding:'13px 16px',borderRadius:'10px',zIndex:20,color:'#fff',boxShadow:'0 12px 40px rgba(0,0,0,.35)' });document.body.appendChild(t)}
  t.textContent=message;t.style.opacity='1';clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.style.opacity='0',2200);
}
document.querySelectorAll('[data-action]').forEach(el=>el.addEventListener('click',()=>showToast(el.dataset.action)));
