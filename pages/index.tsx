import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 lg:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className="flex flex-col justify-between bg-white sm:bg-red-400 md:bg-teal-400 lg:bg-indigo-400 2xl:bg-pink-500 xl:bg-yellow-400 p-6 rounded-2xl shadow-lg">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          <div className="flex justify-between my-2">
            <span className="text-gray-500">Grey Chair</span>
            <span className="font-semibold">$19</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Tooly Table</span>
            <span className="font-semibold">$80</span>
          </div>
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$99</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500">
          Checkout
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-lg group">
        <div className="bg-blue-500 landscape:bg-teal-500 p-6 pb-14 xl:pb-20">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className=" flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-red-300 transition-colors" />
            <div className=" flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="lg:col-span-2 xl:col-span-1 bg-white p-10 rounded-2xl shadow-lg">
        <div className="flex mb-5 justify-between items-center">
          <span>←</span>
          <div className="space-x-3">
            <span>🌟 4.9</span>
            <span className="shadow-xl p-2 rounded-md text-center">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium mb-1.5 text-xl">Swoon Lounge</span>
          <span className="text-xs">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 bg-opacity-50 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 bg-opacity-50 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 bg-opacity-50 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 text-xs text-center text-white rounded-lg py-2 px-8">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* <details className="select-none open:text-white open:bg-indigo-400">
        <summary className="cursor-pointer">what is my fav. food</summary>
        <div className="selection:bg-indigo-600 selection:text-white">김치</div>
      </details>
      <ul className="list-disc marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      <input
        type="file"
        className="file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border file:transition-colors file:border-0 file:rounded-md file:px-5 file:text-white file:bg-purple-400"
      />
      <p className="first-letter:text-xl first-letter:hover:text-purple-400 first-line:text-purple-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, doloribus quas veritatis
        voluptatibus tempora, cumque nesciunt labore consectetur facilis cum voluptas aspernatur
        quis aliquid atque facere consequatur nulla nobis porro.
      </p> */}
      {/* <div className="bg-white p-10 rounded-2xl shadow-lg"></div> */}
    </div>
  );
};

export default Home;
