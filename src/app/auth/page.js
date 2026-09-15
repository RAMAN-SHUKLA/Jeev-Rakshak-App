import { redirect } from 'next/navigation';

// /auth is used as the OAuth callback base — direct navigation redirects to NGO login
export default function AuthIndex() {
  redirect('/ngo/login');
}
