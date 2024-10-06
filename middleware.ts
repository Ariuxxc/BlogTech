import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest, res: NextResponse) {
  console.log('Middleware exécuté');
  /*
  const token = req.headers.get('Authorization');
  if (!token) {
    console.log('Token manquant');
    return NextResponse.redirect('http://localhost:3000');
  }
    */
  console.log('Token présent, accès autorisé');
  return NextResponse.next();
  
}
