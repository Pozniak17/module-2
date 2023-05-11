import { useState } from 'react';

// ComponentA.jsx
// const ComponentA = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <button onClick={openModal}>Open modal</button>
//       <ModalA isOpen={isModalOpen} onClose={closeModal} />
//     </>
//   );
// };

// ComponentB.jsx
// const ComponentB = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <button onClick={openModal}>Open modal</button>;
//       <ModalB isOpen={isModalOpen} onClose={closeModal} />;
//     </>
//   );
// };

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(isOpen => !isOpen);

  return { isOpen, open, close, toggle };
};

///////////////////////////////////////////////////////////////////////////////////////////
// ComponentA.jsx
// import { useToggle } from 'path/to/hooks/useToggle.js';

// const ComponentA = () => {
//   const { isOpen, open, close } = useToggle();

//   return (
//     <>
//       <button onClick={open}>Open modal</button>
//       <ModalA isOpen={isOpen} onClose={close} />
//     </>
//   );
// };

// ComponentB.jsx
// import { useToggle } from 'path/to/hooks/useToggle.js';

// const ComponentB = () => {
//   const { isOpen, open, close, toggle } = useToggle();

//   return (
//     <>
//       <button onClick={open}>Open modal</button>
//       <ModalB isOpen={isOpen} onCLose={close} />
//     </>
//   );
// };

// ============================================================================================
// export const useToggle = (initialState = false) => {
//   const [isOpen, setIsOpen] = useState(initialState);
//   const open = () => setIsOpen(true);
//   const close = () => setIsOpen(false);
//   const toggle = () => setIsOpen(isOpen => !isOpen);

//   return { isOpen, open, close, toggle };
// };

// // MyComponent.jsx
// import { useToggle } from 'path/to/hooks/useToggle.js';

// const MyComponent = () => {
//   const { isOpen, open, close } = useToggle(true);

//   return (
//     <>
//       <button onClick={open}>Open modal</button>
//       <Modal isOpen={isOpen} onCLose={close} />
//     </>
//   );
// };
