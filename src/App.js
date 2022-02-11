import './App.css';
import React from "react";

function App() {

    // const el = React.createElement('div', {}, 'ok ok');
    // const el2 = React.createElement('div', {}, 'bye bye');
    // const el3 = React.createElement('div', {}, 'yay');
    //
    // return React.createElement('div', {}, [el, el2, el3]); // third parameter can be array also in JSX
    // in JSX child of element can be either element or array of element
    // every element in the list of JSX should have unique key

    // const el = <div>hello</div>;
    // const el2 = <div>bye</div>;
    // const arr = [el, el2];
    const friends = [
        {id: 1, firsName: 'Joe', lastName: "Jameson", age: 44},
        {id: 2, firsName: 'Marry', lastName: "Green", age: 33},
        {id: 3, firsName: 'Bill', lastName: "Jackson", age: 12},
        {id: 4, firsName: 'Irina', lastName: "Jameson", age: 39},
    ];
    // const elements = friends.map(friend => {
    //     return (
    //         <div>
    //             <h3>{friend.firsName}{friend.lastName}</h3>
    //             <p>{friend.age}</p>
    //         </div>
    //     );
    // })
  return (
    // <div className="App">
    //     {el}
    //     {[el, el2]}
    //     {arr}
    // </div>
      <div>
          {friends.map(friend => {
              return (
                  <div key={friend.id}>
                      <h3>{friend.firsName}{friend.lastName}</h3>
                      <p>{friend.age}</p>
                  </div>
              );
          })}
      </div>
  );
}

export default App;
