import React from 'react';
import Home from './page/Home';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white py-4 px-6 fixed w-full z-10 flex justify-center">
        Header
      </header>
      
      <main className="flex-1 my-6">
        {/* Your main content here */}
        <div className="container mx-auto py-8 text-black flex justify-center">
          <Home />
        </div>
        {/* <div className="container mx-auto py-8 text-black flex justify-center">
          Body
        </div>
        <div className="container mx-auto py-8 text-black flex justify-center">
          Body
        </div>
        <div className="container mx-auto py-8 text-black flex justify-center">
          Body
        </div>
        <div className="container mx-auto py-8 text-black flex justify-center">
          Body
        </div>
        <div className="container mx-auto py-8 text-black flex justify-center">
          Body
        </div>
        <div className="container mx-auto py-8 text-black flex justify-center">
          Body
        </div>
        <div className="container mx-auto py-8 text-black flex justify-center">
          Body
        </div>
        <div className="container mx-auto py-8 text-black flex justify-center">
          Body
        </div>
        <div className="container mx-auto py-8 text-black flex justify-center">
          Body
        </div>
        <div className="container mx-auto py-8 text-black flex justify-center">
          Body
        </div>
        <div className="container mx-auto py-8 text-black flex justify-center">
          Body
        </div>
        <div className="container mx-auto py-8 text-black flex justify-center">
          Body
        </div> */}
      </main>

      <footer className="bg-gray-800 text-white py-4 px-6 bottom-0 w-full z-10 flex justify-center">
        {/* Footer content */}
        Footer
      </footer>
    </div>
  );
};

export default App;
