// import { useState, useEffect, Component } from 'react';

// export const HookUseEffect = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     document.title = `You clicked ${value}`;
//   });

//   return (
//     <div>
//       <p>You clicked {value} times</p>
//       <button onClick={() => setValue(value + 1)}>Click me</button>
//     </div>
//   );
// };

//! Аналог componentDidMount
// export const HookUseEffect = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log('Mouting phase: same when componentDidMount runs');
//   }, []);

//   return <button onClick={() => setValue(value + 1)}>{value}</button>;
// };

//! Аналог componentDidUpdate
// export const HookUseEffect = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log(value);
//     console.log('Updating phase: same when componentDidUpdate runs');
//   }, [value]);

//   return <button onClick={() => setValue(value + 1)}>{value}</button>;
// };

// export const HookUseEffect = () => {
//   const [firstValue, setFirstValue] = useState(0);
//   const [secondValue, setSecondValue] = useState(0);

// ❌ Погано. ESLint покаже попередження
//   useEffect(() => {
//     console.log(firstValue + secondValue);
//   }, [firstValue]);

//✅ Добре. Вказані всі залежності, що використовуються всередині ефекту
//   useEffect(() => {
//     console.log(firstValue + secondValue);
//   }, [firstValue, secondValue]);

//   return (
//     <>
//       <button onClick={() => setFirstValue(firstValue + 1)}>
//         First: {firstValue}
//       </button>

//       <button onClick={() => setSecondValue(secondValue + 1)}>
//         Second: {secondValue}
//       </button>
//     </>
//   );
// };

//! Аналог componentWillUnmount
// export const HookUseEffect = () => {
//   useEffect(() => {
//     console.log('Mounting phase: same when componentDidMount runs');

//     return () => {
//       console.log('Unmounting phase: same when componentWillUnmount runs');
//     };
//   }, []);

//   return null;
// };

//! Декілька ефектів
// export class HookUseEffect extends Component {
//   handleKeyDown = e => {
//     console.log('keydown event', e);
//   };

//   componentDidMount() {
//     //* initThirdPartyLibrary();
//     document.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.value !== this.props.value) {
//       // Do stuff when value prop changes
//     }

//     if (prevState.isLoggedIn !== this.state.isLoggedIn) {
//       // Do stuff when isLoggedIn state changes
//     }

//     if (prevProps.username !== this.props.username) {
//       //  Fetch user when username prop changes
//       //* fetchUser(this.props.username);
//     }
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handleKeyDown);
//   }
// }

export const HookUseEffect = () => {
  // 1. Run effect only on mount to init some library
  //*   useEffect(() => {
  //* initThirdPartyLibrary();
  //*   }, []);
  // 2. Run effect only when username prop changes
  //*   useEffect(() => {
  //*     fetchUser(username);
  //*   }, [username]);
  // 3. Run effect on value prop change
  //*   useEffect(() => {
  // Do stuff when value props changes
  //*   }, [value]);
  // 4. Run effect on isLoggedIn state change
  //*   useEffect(() => {
  // Do stuff when isLoggedIn state changes
  //*   }, [isLoggedIn]);
  // 5. Run effect on mount and clean up on unmount
  //*   useEffect(() => {
  //*     const handleKeyDown = e => console.log('keydown event: ', e);
  //*     document.addEventListener('keydown', handleKeyDown);
  //*     return () => {
  //*       document.removeEventListener('keydown', handleKeyDown);
  //*     };
  //*   }, []);
};
