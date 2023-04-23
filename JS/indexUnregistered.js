// Generate Latest Products - [START] 

const latestProductsFirstRow = document.querySelector('.latestProducts--firstRow');
const latestProductsSecondRow = document.querySelector('.latestProducts--secondRow');

const displayLatestProducts = function() {
  const html = `                
    <div class="relative">
      <img src="/images/product.jpg" class="w-[275px] h-auto rounded-[10px]">
      <p class="text-center">Men's Essential Tee <span class="opacity-[0.5]">(Black)</span></p>
      <p class="text-[20px] mb-[3px] text-center">$32.00</p>
      <svg class="absolute top-[10px] right-[10px] w-[30px] h-auto text-black hover:bg-[#DB2516] hover:text-white transition duration-100 ease-in-out delay-150 bg-[#E3DAF4] rounded-lg shadow-xl cursor-pointer hover:-translate-y-1 hover:scale-100"
      width="40" height="46" fill="none" stroke="currentColor" stroke-linecap="round"
      stroke-linejoin="round" stroke-width="2" viewBox="-3 0 30 25" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
      </path>
      </svg>
    </div>`;

    for(let i = 0; i < 4; i++) {
      latestProductsFirstRow.insertAdjacentHTML('beforeend', html);
      latestProductsSecondRow.insertAdjacentHTML('beforeend', html);
    }
}();

if(localStorage.getItem('user')) {
  const profileIcon = '<a href="./profilePage.html"><svg class="w-[29px]" width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 9.938V21a.75.75 0 0 0 .75.75H9v-6.375a1.125 1.125 0 0 1 1.125-1.125h3.75A1.125 1.125 0 0 1 15 15.375v6.375h4.5a.75.75 0 0 0 .75-.75V9.937"></path><path d="m22.5 12-9.99-9.563c-.234-.248-.782-.25-1.02 0L1.5 11.999"></path><path d="M18.75 8.39V3H16.5v3.234"></path></svg></a>';
  document.getElementById('icons').insertAdjacentHTML('afterbegin', profileIcon);
} else {
  const signUp = '<a href="./signUp.html"><svg class="w-[30px] text-black transition duration-100 ease-in-out delay-150 rounded-lg cursor-pointer hover:-translate-y-1 hover:scale-100" width="46" height="46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><path d="M8.5 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8z"></path><path d="M20 8v6"></path><path d="M23 11h-6"></path></svg></a>';
  document.getElementById('icons').insertAdjacentHTML('afterbegin', signUp);
}



// LogOut
// localStorage.removeItem('user);

// TO-DO: 
// Implement displaying random products instead of fixed

// Generate Latest Products - [END] 

