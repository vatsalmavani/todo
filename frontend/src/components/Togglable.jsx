import { useState } from "react";

const Togglable = ({ buttonName, children }) => {
  const [view, setView] = useState(false);

  return (
    <>
      {view ? (
        <div>
          {children}
          <button onClick={() => setView(false)}>cancel</button>
        </div>
      ) : (
        <button onClick={() => setView(true)}>{buttonName}</button>
      )}
    </>
  );
};

export default Togglable;
