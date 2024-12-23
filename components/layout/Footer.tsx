export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p>MBKschool2@gmail.com</p>
            <p>+252634856606</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Admissions</a></li>
              <li><a href="#" className="hover:underline">Programs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Schools</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">MBK International</a></li>
              <li><a href="#" className="hover:underline">Dr. Abdidhakuur Secondary</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support Us</h3>
            <p className="mb-4">Help us continue our mission of providing quality education to all.</p>
            <button className="bg-white text-primary px-4 py-2 rounded hover:bg-white/90">
              Donate Now
            </button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p>&copy; 2024 MBK International School & Dr. Abdidhakuur Secondary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}