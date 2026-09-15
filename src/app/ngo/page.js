import { redirect } from 'next/navigation';

// Redirect /ngo to /ngo/login
export default function NGOIndex() {
  redirect('/ngo/login');
}
