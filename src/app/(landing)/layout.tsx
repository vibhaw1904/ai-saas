


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      <div
         className="mx-auto max-w-screen-xl h-full">
      
        {children}
      </div>
    </main>
  );
}
