# Weaver Design System

A professional React component library built with shadcn/ui and Tailwind CSS, featuring comprehensive design tokens and accessibility-first components.

[![npm version](https://badge.fury.io/js/%40weaver%2Fdesign-system.svg)](https://badge.fury.io/js/%40weaver%2Fdesign-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🎨 **10 Button Styles** - Primary, Secondary, Soft, Outline, Ghost, Danger, and more
- 📏 **4 Size Variants** - Extra Small (32px) to Large (48px)
- 🌍 **RTL Support** - Built-in right-to-left language support
- ♿ **Accessibility First** - WCAG compliant with proper ARIA attributes
- 🎯 **TypeScript Ready** - Full type definitions included
- 🚀 **Tree Shakeable** - Import only what you need
- 📱 **Responsive** - Mobile-first design approach
- 🎨 **Design Tokens** - Comprehensive color, spacing, and typography system

## 🚀 Quick Start

### Installation

```bash
npm install @weaver/design-system
```

### Basic Usage

```jsx
import { WeaverButton } from '@weaver/design-system';
import '@weaver/design-system/styles';

function App() {
  return (
    <WeaverButton 
      style="primary" 
      size="md" 
      label="Click me"
      showLeadingIcon={true}
      leadingIcon={<PlusIcon />}
    />
  );
}
```

## 📦 Components

### WeaverButton

Professional button component with 10 styles and 4 sizes.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `'primary' \| 'secondary' \| 'soft' \| 'outline' \| 'ghost' \| 'danger' \| 'ghost-primary' \| 'soft-danger' \| 'white' \| 'dashed'` | `'primary'` | Button visual style |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `label` | `string` | - | Button text |
| `ARlabel` | `string` | - | Arabic button text (for RTL) |
| `rtl` | `boolean` | `false` | Right-to-left layout |
| `showLeadingIcon` | `boolean` | `true` | Show leading icon |
| `leadingIcon` | `ReactNode` | - | Leading icon component |
| `showTrailingIcon` | `boolean` | `true` | Show trailing icon |
| `trailingIcon` | `ReactNode` | - | Trailing icon component |
| `disabled` | `boolean` | `false` | Disabled state |
| `onClick` | `function` | - | Click handler |

#### Examples

```jsx
// Basic button
<WeaverButton label="Save" />

// With icons
<WeaverButton 
  label="Add Item" 
  leadingIcon={<PlusIcon />}
  trailingIcon={<ArrowRightIcon />}
/>

// RTL support
<WeaverButton 
  rtl={true}
  label="English Text"
  ARlabel="نص عربي"
  leadingIcon={<ArrowLeftIcon />}
/>

// Different styles
<WeaverButton style="outline" label="Cancel" />
<WeaverButton style="danger" label="Delete" />
<WeaverButton style="ghost" label="Skip" />

// Different sizes
<WeaverButton size="xs" label="Small" />
<WeaverButton size="lg" label="Large" />
```

## 🎨 Design System

### Colors

Our design system includes a comprehensive color palette:

- **Primary**: Blue scale for main actions
- **Secondary**: Gray scale for secondary actions  
- **Semantic**: Success, Warning, Danger, Info colors
- **Neutral**: Comprehensive gray and slate scales

### Spacing

Consistent spacing scale from 1px to 384px:

```css
--weaver-space-xs: 4px;
--weaver-space-sm: 8px;
--weaver-space-md: 12px;
--weaver-space-lg: 16px;
--weaver-space-xl: 20px;
/* ... and more */
```

### Typography

Professional font stack with Inter as the primary typeface:

- **Inter**: Primary sans-serif font
- **Geist**: Alternative sans-serif
- **Geist Mono**: Monospace font
- **Alexandria**: Serif font

## 🛠 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/weaver/design-system.git
cd design-system

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building

```bash
# Build the library
npm run build

# Build with type definitions
npm run build:types
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📞 Support

- 📧 Email: support@weaver.design
- 🐛 Issues: [GitHub Issues](https://github.com/weaver/design-system/issues)
- 📖 Documentation: [docs.weaver.design](https://docs.weaver.design)

---

Built with ❤️ by the Weaver Design Team