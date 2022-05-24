import React from "react";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="open-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col mt-10 justify-center">
        {/* <!-- Page content here --> */}

          <h1> Welcome To Your Dashboard </h1>

        <label
          for="open-sidebar"
          class="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div class="drawer-side border-r border-secondary ">
        <label for="open-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
