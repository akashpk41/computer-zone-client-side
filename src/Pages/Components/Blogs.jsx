import React from "react";

const Blog = () => {
  return (
    <div className="p-5 text-center ">
      <div className="md:w-4/5 mt-5 md:mx-auto border border-primary  p-5 rounded-lg shadow-2xl bg-white">
        <h1 className="text-2xl font-mono font-bold mb-3">
          {" "}
          How will you improve the performance of a React Application?{" "}
        </h1>
        <p className="text-base leading-loose  text-gray-800  mb-3">
          রিয়্যাক্ট অ্যাপের পারফরম্যান্স বাড়ানোর জন্য production ভার্সন ব্যবহার
          করা উচিত। বাই ডিফল্ট যখন অ্যাপ ডেভেলপ করা হয় তখন আমরা ডেভেলপমেন্ট
          ভার্সন ব্যবহার করি। ডেভেলপমেন্ট ভার্সন অনেক সময় আমাদের এরর গুলোকে ভালো
          করে দেখায়, কিন্তু এর জন্য আমাদের অ্যাপের পারফরম্যান্স একটু কমে যায়।
          তাই অ্যাপ ডেপ্লই করার সময় npm run build এই কমান্ডটা ব্যবহার করা হয়।
        </p>
      </div>

      <div className="md:w-4/5 mt-5 md:mx-auto border border-primary  p-5 rounded-lg shadow-2xl bg-white">
        <h1 className="text-2xl font-mono font-bold mb-3">
          {" "}
          What are the different ways to manage a state in a React application?
        </h1>
        <p className="text-base leading-loose  text-gray-800  mb-3">
          রিয়্যাক্ট অ্যাপে অনেক ভাবে State Manage করা যায় তার ভিতরে ৪ টা হলো ঃ
          1. Local state, 2. Global state, 3. Server state. Local State : লোকাল
          স্টেটে আমরা সাধারণত useState হুক ব্যবহার করে থাকি। Global state : আমরা
          একই ডাটা অনেক গুলো কম্পনেন্টে ব্যবহার করে থাকি। Server state : Server
          state হলো যেই ডাটা গুলো অন্য জায়গা থেকে বা কোন ডাটাবেজ থেকে আসে।
        </p>
      </div>

      <div className="md:w-4/5 mt-5 md:mx-auto border border-primary  p-5 rounded-lg shadow-2xl bg-white">
        <h1 className="text-2xl font-mono font-bold mb-3">
          {" "}
          What is a unit test? Why should write unit tests?
        </h1>
        <p className="text-base leading-loose  text-gray-800  mb-3">
          ইউনিট টেস্ট হলো এক ধরনের সফটওয়্যার টেস্টিং যেখানে কোন সফটওয়্যারকে
          টেস্ট করা হয় এবং দেখা হয় যেমনটি রেজাল্ট আসা করা হয়েছিলো তেমন পাওয়া যায়
          কিনা। ইউনিট টেস্ট এ অনেক কিছু টেস্ট করা হতে পারে যেমন কোড আরো অনেক
          কিছু
        </p>
      </div>
    </div>
  );
};

export default Blog;
