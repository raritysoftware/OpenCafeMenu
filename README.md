# ☕ Open Cafe Menu

Open Cafe Menu is a responsive and modern web application designed to showcase a cafe's menu dynamically. The application is built using Bun and features a lightweight Docker setup for easy deployment.

## ✨ Features

- 📱 Fully responsive design for all screen sizes.
- 🛠️ Dynamic menu rendering based on `cafe.yaml` configuration.
- 🚀 Lightweight and efficient Docker setup for production.
- 🎨 Modern and visually appealing UI with customizable styles.

## ⚙️ Configuration

The application reads its configuration from the `cafe.yaml` file. Below is an example of the structure:

```yaml
name: Open Cafe
location: 123 Coffee Street
about: "Open Cafe is a cozy and welcoming place where you can enjoy your favorite coffee and snacks."
drinks:
  coffee:
    - name: Espresso
      price: 2.5
    - name: Latte
      price: 3.5
  tea:
    - name: Green Tea
      price: 2.0
    - name: Black Tea
      price: 1.8
  juices:
    - name: Orange Juice
      price: 3.0
    - name: Apple Juice
      price: 2.8
contact: "+1-800-123-4567"
email: "contact@opencafe.com"
hours:
  weekdays: "8:00 AM - 8:00 PM"
  weekends: "9:00 AM - 10:00 PM"
```

### 🔑 Key Sections

- **name**: The name of the cafe.
- **location**: The address of the cafe.
- **about**: A brief description of the cafe.
- **drinks**: Categories and items in the menu, including their names and prices.
- **contact**: Phone number for customer inquiries.
- **email**: Email address for communication.
- **hours**: Operating hours for weekdays and weekends.

## 🛠️ How to Run

### Prerequisites

- 🐳 Docker installed on your system.

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd OpenCafeMenu
   ```

2. Build the Docker image:
   ```bash
   docker build -t opencafe .
   ```

3. Run the Docker container:
   ```bash
   docker run -p 3000:3000 opencafe
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 🧑‍💻 Development

To make changes to the application:

1. Install Bun:
   ```bash
   npm install -g bun
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Start the development server:
   ```bash
   bun run start
   ```

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.
