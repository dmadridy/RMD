import { Dialog, Transition } from '@headlessui/react';
import Login from './login';

type Props = {
  showing: boolean;
  setShowing: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<Props> = ({ showing, setShowing }) => {
  return (
    <Transition appear show={showing}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => setShowing(false)}
      >
        <Transition.Child
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-60' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='mx-auto max-w-md transform overflow-hidden text-left align-middle shadow-xl transition-all'>
                <Login setShowing={setShowing} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
