import React from "react";

const Header = function () {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-danger d-flex flex-row">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Hackflix
          </a>
        </div>
      </nav>
      <header style={{ paddingLeft: 0 }}>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://w0.peakpx.com/wallpaper/236/159/HD-wallpaper-movie-pulp-fiction.jpg')",
            height: 400,
          }}
        >
          <div>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                {/* <h1 className="mb-3">Hackflix</h1> */}

                <h1
                  className="btn btn-outline-light btn-lg"
                  href="#!"
                  role="button"
                >
                  Hackflix
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
