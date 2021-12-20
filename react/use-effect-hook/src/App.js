import React, { useEffect, useState } from 'react';

const defaultTitle = 'React with Hooks';

const Counter = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    // `document.title` is set with each change (didMount/didUpdate).
    // Given the `value` has changed
    document.title = `The button has been clicked ${value} times.`;

    // Here we're returning our "Cleanup function" which resets the
    // title to the default before each update
    return () => {
      document.title = defaultTitle;
    };

    // Lastly, our dependency array. This way the Effect function
    // is only invoked when the `value` has actually changed.
  }, [value]);

  return (
      <div>
        <p>Counter: {value}</p>
        <button onClick={() => setValue(value + 1)}>+1</button>
      </div>
  );
};

export default Counter;