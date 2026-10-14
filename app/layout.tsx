import type { Metadata } from 'next';
import './styles.css';
export const metadata: Metadata = { title: 'DataSciencePath | Learn Data Science', description: 'A structured path from foundations to real-world Data Science projects.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
