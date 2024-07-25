
import "@styles/globals.css";
import Nav from "@components/Nav";


const RootLayout = ({children}) => {
  return (
    <html lang="eng">
        <body className="body">
          
            <main >
                <Nav/>
                {children}
            </main>
          
        </body>

    </html>
  )
}

export default RootLayout; 