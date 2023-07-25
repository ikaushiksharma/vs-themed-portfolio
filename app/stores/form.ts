import { create } from 'zustand';
interface FormState {
  name: string;
  email: string;
  message: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setMessage: (message: string) => void;
  resetValues: () => void;
}

const useFormData = create<FormState>((set) => ({
  name: '',
  email: '',
  message: '',
  setName: (name: string) => set(() => ({ name })),
  setEmail: (email: string) => set(() => ({ email })),
  setMessage: (message: string) => set(() => ({ message })),
  resetValues: () => set(() => ({ name: '', email: '', message: '' })),
}));

export default useFormData;
