import { Dialog, Transition } from '@headlessui/react';
import Login from './login';

type Props = {
  showing: boolean;
  setShowing: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: React.FC<Props> = ({ showing, setShowing }) => {
  return (
    <Transition
      show={showing}
      enter='transition duration-100 ease-out'
      enterFrom='transform scale-95 opacity-0'
      enterTo='transform scale-100 opacity-100'
      leave='transition duration-75 ease-out'
      leaveFrom='transform scale-100 opacity-100'
      leaveTo='transform scale-95 opacity-0'
    >
      <Dialog className='relative z-50' onClose={() => setShowing(false)}>
        <div className='fixed inset-0 bg-black/60' aria-hidden='true' />
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full flex items-center justify-center p-4'>
            <Dialog.Panel className='w-full max-w-sm'>
              <Login />
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
