# Brave Browser Detector

This npm package detects if the user is browsing with Brave.

## Installation

```bash
npm install brave-browser-detector
```

## Usage

```typescript
import { isBrave } from "brave-browser-detector";

if (isBrave()) {
  console.log("You are using Brave browser");
} else {
  console.log("You are not using Brave browser");
}
```

## Contributing

- Fork the repository.
- Create a new branch (git checkout -b feature-branch).
- Make your changes.
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature-branch).
- Create a new Pull Request.

## License

This project is licensed under the MIT License.
