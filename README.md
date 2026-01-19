# Systema

Systema is an interactive educational application designed to visualize the layers of computing, from transistors to cloud systems. Through engaging animations and interactive modules, users can explore and understand the fundamental concepts that underpin modern computing.

## Features

- **Interactive Modules**: Each layer of computing is represented as an interactive module, allowing users to engage with the content dynamically.
- **Visualizations**: Animated visualizations help illustrate complex concepts, making learning more intuitive and enjoyable.
- **Comprehensive Coverage**: Topics include transistors, logic gates, CPU architecture, memory types, operating systems, networking, and cloud computing.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/systema.git
   ```
2. Navigate to the project directory:
   ```
   cd systema
   ```
3. Install the dependencies:
   ```
   npm install
   ```

### Usage

#### Development
1. Start the compiler and dev server:
   ```
   npm run dev
   ```
2. In a separate terminal, launch the application:
   ```
   npm start
   ```

#### Production
To build and run the production version:
```
npm run build
npm start
```

This will build the application and start the Electron executable. The `npm run package` command (included in `build`) generates the platform-specific installers in the `dist` folder.

## Usage

Once the application is running, you can navigate through the different modules to learn about various computing concepts. Each module provides interactive elements and animations to enhance your understanding.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- Inspired by the need for interactive educational tools in computing.
- Thanks to all contributors and the open-source community for their support.