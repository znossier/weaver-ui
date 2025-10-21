# Weaver Design System

A professional React component library built with shadcn/ui and Tailwind CSS. Featuring comprehensive button components with 10 variants, 4 sizes, RTL support, and full accessibility compliance.

## 🚀 Features

- **10 Button Variants** - Primary, Secondary, Outline, Ghost, Soft, Danger, and more
- **4 Size Options** - Extra Small (32px) to Large (48px)
- **RTL Support** - Built-in right-to-left language support
- **Accessibility Ready** - WCAG compliant with keyboard navigation
- **TypeScript Support** - Full type definitions included
- **Tailwind CSS** - Utility-first styling with custom design tokens
- **shadcn/ui Integration** - Built on top of shadcn/ui components

## 📦 Installation

```bash
npm install @weaver/design-system
```

```bash
yarn add @weaver/design-system
```

```bash
pnpm add @weaver/design-system
```

## 🎯 Quick Start

```jsx
import { WeaverButton } from '@weaver/design-system';

function App() {
  return (
    <WeaverButton 
      style="primary" 
      size="md" 
      label="Click me"
    />
  );
}
```

## 🎨 Button Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| `primary` | Main action button | Primary CTAs |
| `secondary` | Secondary action | Alternative actions |
| `outline-blue` | Blue outline | Secondary CTAs |
| `ghost-blue` | Transparent blue | Subtle actions |
| `soft-blue` | Light blue background | Soft CTAs |
| `danger` | Destructive action | Delete, remove |
| `soft-danger` | Subtle danger | Soft destructive |
| `outline-gray` | Gray outline | Neutral actions |
| `ghost-gray` | Transparent gray | Minimal actions |
| `dashed` | Dashed border | Upload, add |

## 📏 Button Sizes

| Size | Height | Use Case |
|------|--------|----------|
| `xs` | 32px | Compact spaces |
| `sm` | 36px | Small forms |
| `md` | 40px | Standard buttons |
| `lg` | 48px | Prominent actions |

## 🌍 RTL Support

```jsx
<WeaverButton 
  rtl={true}
  label="انقر هنا"
  showLeadingIcon={true}
  leadingIcon="+"
/>
```

## ♿ Accessibility

- **Keyboard Navigation** - Full Tab/Enter/Space support
- **Screen Reader** - Proper ARIA labels and descriptions
- **Focus Management** - Visible focus indicators
- **Color Contrast** - WCAG AA compliant

## 🎛️ API Reference

### WeaverButton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `style` | `string` | `"primary"` | Button visual style variant |
| `size` | `string` | `"md"` | Button size (xs, sm, md, lg) |
| `state` | `string` | `"default"` | Button state (default, hover, pressed, focused, disabled) |
| `label` | `string` | - | Button text content |
| `rtl` | `boolean` | `false` | Enable right-to-left layout |
| `showLeadingIcon` | `boolean` | `false` | Show leading icon |
| `leadingIcon` | `ReactNode` | - | Leading icon element |

## 📚 Examples

### Basic Usage

```jsx
<WeaverButton style="primary" size="md" label="Save" />
```

### With Icons

```jsx
<WeaverButton 
  style="primary" 
  size="md" 
  label="Add Item"
  showLeadingIcon={true}
  leadingIcon={<Plus />}
/>
```

### RTL Support

```jsx
<WeaverButton 
  rtl={true}
  label="انقر هنا"
  style="primary"
  size="md"
/>
```

### Form Actions

```jsx
<div className="flex gap-2">
  <WeaverButton style="primary" size="md" label="Save" />
  <WeaverButton style="secondary" size="md" label="Cancel" />
</div>
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Setup

```bash
git clone https://github.com/weaver/design-system.git
cd design-system
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Test

```bash
npm run test
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

- 📧 Email: agalal@noon.com, zosman@noon.com, memousa@noon.com
- 🐛 Issues: [GitHub Issues](https://github.com/weaver/design-system/issues)
- 📖 Documentation: [docs.weaver.design](https://docs.weaver.design)

## 🎉 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [React](https://reactjs.org/)

---

Made with ❤️ by the Weaver Design Team
