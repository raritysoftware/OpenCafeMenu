# ☕ Open Cafe Menu

A minimal, aesthetic cafe menu selection web application designed for universal appeal. The application features a beautiful, user-friendly interface with customizable themes and reads configuration from YAML files.

## 🎯 Features

- **Modern React TypeScript Application** with React Router for navigation
- **Bun Runtime** for fast dependency management and development
- **Dynamic Theming** via CSS variables (no Tailwind, no PostCSS)
- **YAML Configuration** using `js-yaml` for easy menu management
- **Multi-Currency Support** - Display prices in any currency (₺, $, €, £, ¥, etc.)
- **Business Hours Display** - Show opening/closing times for each day
- **Contact Information** - Phone, email, and social media integration
- **Responsive Design** that works on all devices
- **Error Handling** with informative user messages
- **Docker Support** with multi-stage builds using `serve` for minimal container size
- **Dark/Light Mode Toggle** for better user experience

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 16+
- Docker (optional, for containerized deployment)

### Development

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Preview production build locally
bun run preview

# Serve production build with serve
bun run serve
```

The application will be available at `http://localhost:3000` (dev) or `http://localhost:5000` (serve)

### Docker Deployment

```bash
# Build the Docker image
docker build -t opencafemenu .

# Run the container
docker run --rm -p 5000:5000 opencafemenu
```

The application will be available at `http://localhost:5000`

## ⚙️ Configuration

Create a `cafe.yml` or `cafe.yaml` file in the `public/` directory with the following structure:

```yaml
name: "Your Cafe Name"
location: 
  address: "123 Coffee Street"
  city: "Your City"
  country: "Your Country"
about: "A description of your cafe and what makes it special."
currency: "₺"  # Can be $, €, ₺, £, ¥, etc.
hours:
  monday: "07:00 - 22:00"
  tuesday: "07:00 - 22:00"
  wednesday: "07:00 - 22:00"
  thursday: "07:00 - 22:00"
  friday: "07:00 - 23:00"
  saturday: "08:00 - 23:00"
  sunday: "08:00 - 21:00"
contact:
  phone: "+1 555 123 4567"
  email: "hello@yourcafe.com"
  instagram: "@yourcafe"
categories:
  - "Coffee"
  - "Tea"
  - "Pastries"
  - "Cold Drinks"
items:
  - name: "Espresso"
    category: "Coffee"
    price: 22
  - name: "Cappuccino"
    category: "Coffee"
    price: 25
  - name: "Earl Grey"
    category: "Tea"
    price: 18
theme:
  primaryColor: "#8B4513"
  secondaryColor: "#F5F5DC"
  font: "Georgia, serif"
```

## 🏗️ Architecture

The application follows a clean, modular architecture:

```
src/
├── components/
│   ├── Layout.tsx          # Header, Footer, Navigation
│   ├── CategoryList.tsx    # Menu category filtering
│   ├── ItemCard.tsx        # Individual menu item display
│   └── ErrorBoundary.tsx   # Error handling component
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── About.tsx           # About page
│   └── Menu.tsx            # Menu page
├── services/
│   ├── configService.ts    # YAML configuration loading
│   └── themeService.ts     # Theme management
├── types/
│   └── index.ts            # TypeScript interfaces
├── styles/
│   └── variables.css       # CSS custom properties
├── App.tsx                 # Main application component
└── main.tsx               # Application entry point
```

## 🎨 Theming

The application uses CSS custom properties for theming without any CSS frameworks:

- **Primary Color**: Main brand color for buttons, headers, etc.
- **Secondary Color**: Background color for cards and sections
- **Font Family**: Custom font selection for typography
- **Dark Mode**: Toggle between light and dark themes

Themes are applied dynamically at runtime through the `ThemeService`.

## 🐳 Docker

The application uses a multi-stage Docker build:

1. **Builder Stage**: Uses `oven/bun:1` to install dependencies and build the application
2. **Production Stage**: Uses `node:18-alpine` with `serve` to serve static files

Features:
- Minimal container size
- `serve` static file server with SPA support
- No nginx complexity
- Simple and lightweight deployment

## 🛠️ Development Scripts

- `bun install` - Install dependencies
- `bun dev` - Start development server with hot reload
- `bun build` - Build for production
- `bun preview` - Preview production build locally (Vite's preview)
- `bun serve` - Serve production build using `serve` package

## 📝 Error Handling

The application includes comprehensive error handling:

- **Configuration Errors**: Clear messages when YAML files are missing or malformed
- **Error Boundary**: Catches and displays React component errors gracefully
- **Network Errors**: Handles failed configuration loading with retry options
- **Validation**: Ensures configuration data meets required schema

## 🌍 Browser Support

- Modern browsers with ES2020 support
- Mobile-responsive design
- Progressive Web App features ready

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

Made with ❤️ for coffee lovers worldwide.
