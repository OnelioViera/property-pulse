import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find the perfect Rental',
  description: 'Find the perfect rental property for you and your family',
  keywords: 'rental, property, real estate',
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}

export default MainLayout;
