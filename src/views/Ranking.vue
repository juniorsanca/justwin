<template>
<div>
<img alt="Vue logo" src="../public/assets/img/justwin.gif"> 

    <div class="relative z-0 mb-6 w-full group">
        <input  type="text" 
                name="floating_last_name" 
                id="floating_last_name" 
                class="
                       font-sans text-base text-white
                       block py-2.5 px-5 w-full
                       text-sm text-pink-500 bg-transparent 
                       border-0 border-b-2 border-gray-300 
                       appearance-none 
                       
                       dark:border-blue-600 
                       dark:focus:border-blue-500 
                       focus:outline-none focus:ring-0 
                       focus:border-pink-600 peer" 
                placeholder=" Search username " required />
    </div>

<div class="w-full bg-white shadow-lg lg:w-1/3">
    <ul class="divide-y-2 divide-gray-400">
        
        <li class="flex justify-between p-3 bg-black text-white">
            <div class="font-sans">N°</div>
                <h5 class="font-sans">
                    Nickname
                </h5>
            <div class="font-sans"> Score </div>
        </li>
            <li class="">
                <hr class="border-2 border-pink-700">
            </li>
        <li class="flex justify-between p-3 bg-black text-white">
            <div class="font-sans">#1</div>
                <h5 class="font-sans">
                    View List Item
                </h5>
            <div class="font-sans"> 2000 </div>
        </li>
        <li class="flex justify-between p-3 bg-black text-white">
            <div>#2</div>
                View List Item
            <div> 200 </div>
        </li>
        <li class="flex justify-between p-3 bg-black text-white">
            <div>#3</div>
                View List Item
            <div> 20 </div>
        </li>
        <li class="flex justify-between p-3 bg-black text-white">
            <div>#4</div>
                View List Item
            <div> 2 </div>
        </li>
        <li class="flex justify-between p-3 bg-black text-white">
            <div>#5</div>
                View List Item
            <div> 2000 </div>
        </li>
        <li class="flex justify-between p-3 bg-black text-white">
            <div>#6</div>
                View List Item
            <div> 200 </div>
        </li>
        <li class="flex justify-between p-3 bg-black text-white">
            <div>#7</div>
                View List Item
            <div> 20 </div>
        </li>
        <li class="flex justify-between p-3 bg-black text-white">
            <div>#8</div>
                View List Item
            <div> 2 </div>
        </li>
        <li class="flex justify-between p-3 bg-black text-white">
            <div>#9</div>
                View List Item
            <div> 2000 </div>
        </li>
        <li class="flex justify-between p-3 bg-black text-white">
            <div>#10</div>
                View List Item
            <div> 200 </div>
        </li>
        <li class="flex justify-between p-3 bg-black text-white">
            <div>#11</div>
                View List Item
            <div> 20 </div>
        </li>
        <li class="flex justify-between p-3 bg-black text-white">
            <div>#12</div>
                View List Item
            <div> 2 </div>
        </li>
  
    </ul>
</div>
</div>
</template>

<script>
//import firebase from "firebase/compat/app";

export default {
  name: "RankingView",
};
</script>
