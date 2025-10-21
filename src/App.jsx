import { WeaverButton } from './components/weaver/Button';
import { useState } from 'react';

export default function App() {
  const [selectedStyle, setSelectedStyle] = useState('primary');
  const [selectedSize, setSelectedSize] = useState('md');
  const [selectedState, setSelectedState] = useState('default');
  const [isRTL, setIsRTL] = useState(false);
  const [showIcons, setShowIcons] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  const buttonStyles = [
    { value: 'primary', label: 'Primary', description: 'Main action button' },
    { value: 'outline-blue', label: 'Outline Blue', description: 'Secondary action' },
    { value: 'ghost-blue', label: 'Ghost Blue', description: 'Subtle action' },
    { value: 'soft-blue', label: 'Soft Blue', description: 'Gentle background' },
    { value: 'danger', label: 'Danger', description: 'Destructive action' },
    { value: 'soft-danger', label: 'Soft Danger', description: 'Subtle danger' },
    { value: 'secondary', label: 'Secondary', description: 'Alternative action' },
    { value: 'outline-gray', label: 'Outline Gray', description: 'Neutral outline' },
    { value: 'ghost-gray', label: 'Ghost Gray', description: 'Minimal style' },
    { value: 'dashed', label: 'Dashed', description: 'Dashed border' },
  ];

  const buttonSizes = [
    { value: 'xs', label: 'Extra Small', height: '32px' },
    { value: 'sm', label: 'Small', height: '36px' },
    { value: 'md', label: 'Medium', height: '40px' },
    { value: 'lg', label: 'Large', height: '48px' },
  ];

  const buttonStates = [
    { value: 'default', label: 'Default' },
    { value: 'hover', label: 'Hover' },
    { value: 'pressed', label: 'Pressed' },
    { value: 'focused', label: 'Focused' },
    { value: 'disabled', label: 'Disabled' },
  ];

  const generateCode = () => {
    const iconProps = showIcons ? `\n  showLeadingIcon={true}\n  leadingIcon="+"` : '';
    const rtlProps = isRTL ? `\n  rtl={true}` : '';
    const stateProps = selectedState !== 'default' ? `\n  state="${selectedState}"` : '';
    
    return `<WeaverButton 
  style="${selectedStyle}" 
  size="${selectedSize}"${iconProps}${rtlProps}${stateProps}
  label="${isRTL ? 'انقر هنا' : 'Button'}"
/>`;
  };

  const renderOverview = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center py-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 mb-6">
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Weaver Design System
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A comprehensive React component library built with shadcn/ui and Tailwind CSS. 
          Beautiful, accessible, and customizable components for modern web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WeaverButton 
            style="primary" 
            size="lg" 
            label="Get Started" 
            showLeadingIcon={true}
            leadingIcon="🚀"
          />
          <WeaverButton 
            style="outline-blue" 
            size="lg" 
            label="View on GitHub" 
            showLeadingIcon={true}
            leadingIcon="📦"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 rounded-lg border bg-card">
          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
          <p className="text-muted-foreground">Built with performance in mind. Optimized components that load quickly and run smoothly.</p>
        </div>
        <div className="text-center p-6 rounded-lg border bg-card">
          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Accessible</h3>
          <p className="text-muted-foreground">WCAG compliant components with keyboard navigation and screen reader support.</p>
        </div>
        <div className="text-center p-6 rounded-lg border bg-card">
          <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold mb-2">Customizable</h3>
          <p className="text-muted-foreground">Easily theme and customize components to match your brand's unique style.</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-blue-600">10+</div>
          <div className="text-sm text-muted-foreground">Button Variants</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-green-600">4</div>
          <div className="text-sm text-muted-foreground">Size Options</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-purple-600">RTL</div>
          <div className="text-sm text-muted-foreground">Language Support</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-orange-600">100%</div>
          <div className="text-sm text-muted-foreground">Accessible</div>
        </div>
      </div>
    </div>
  );

  const renderButtonDemo = () => (
    <div className="space-y-8">
      {/* Live Preview */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Interactive Preview</h3>
          <p className="text-sm text-muted-foreground">
            Customize the button below and see changes in real-time.
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="flex items-center justify-center space-x-4 py-8 bg-muted/30 rounded-lg">
            <WeaverButton 
              style={selectedStyle}
              size={selectedSize}
              state={selectedState}
              rtl={isRTL}
              label={isRTL ? "انقر هنا" : "Button"}
              showLeadingIcon={showIcons}
              showTrailingIcon={false}
              leadingIcon="+"
            />
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Customize</h3>
          <p className="text-sm text-muted-foreground">
            Adjust the button properties to see changes in real-time.
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Style
              </label>
              <select 
                value={selectedStyle} 
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {buttonStyles.map(style => (
                  <option key={style.value} value={style.value}>{style.label}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Size
              </label>
              <select 
                value={selectedSize} 
                onChange={(e) => setSelectedSize(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {buttonSizes.map(size => (
                  <option key={size.value} value={size.value}>{size.label} ({size.height})</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                State
              </label>
              <select 
                value={selectedState} 
                onChange={(e) => setSelectedState(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {buttonStates.map(state => (
                  <option key={state.value} value={state.value}>{state.label}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Options
              </label>
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    checked={isRTL} 
                    onChange={(e) => setIsRTL(e.target.checked)}
                    className="h-4 w-4 rounded border border-input"
                  />
                  <span className="text-sm">RTL Mode</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    checked={showIcons} 
                    onChange={(e) => setShowIcons(e.target.checked)}
                    className="h-4 w-4 rounded border border-input"
                  />
                  <span className="text-sm">Show Icons</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Generated Code</h3>
            <button 
              onClick={() => navigator.clipboard.writeText(generateCode())}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Copy Code
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            Copy and paste the code below into your project.
          </p>
        </div>
        <div className="p-6 pt-0">
          <pre className="relative overflow-x-auto rounded-md bg-muted p-4 text-sm">
            <code className="text-muted-foreground">{generateCode()}</code>
          </pre>
        </div>
      </div>

      {/* Variants Section */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">All Variants</h3>
          <p className="text-sm text-muted-foreground">
            Explore all available button styles and their use cases.
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {buttonStyles.map((style) => (
              <div key={style.value} className="space-y-3">
                <WeaverButton 
                  style={style.value}
                  size="sm"
                  label="Button"
                  showLeadingIcon={false}
                  showTrailingIcon={false}
                />
                <div className="text-center">
                  <p className="text-sm font-medium">{style.label}</p>
                  <p className="text-xs text-muted-foreground">{style.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sizes Section */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">All Sizes</h3>
          <p className="text-sm text-muted-foreground">
            Choose the perfect size for your use case.
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="flex items-center justify-center space-x-4">
            {buttonSizes.map((size) => (
              <div key={size.value} className="space-y-3">
                <WeaverButton 
                  style="primary"
                  size={size.value}
                  label="Button"
                  showLeadingIcon={false}
                  showTrailingIcon={false}
                />
                <div className="text-center">
                  <p className="text-sm font-medium">{size.label}</p>
                  <p className="text-xs text-muted-foreground">{size.height}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocumentation = () => (
    <div className="space-y-8">
      {/* Installation */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Installation</h3>
          <p className="text-sm text-muted-foreground">
            Install Weaver Design System in your React project.
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium mb-2">npm</h4>
              <pre className="relative overflow-x-auto rounded-md bg-muted p-4 text-sm">
                <code className="text-muted-foreground">npm install @weaver/design-system</code>
              </pre>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">yarn</h4>
              <pre className="relative overflow-x-auto rounded-md bg-muted p-4 text-sm">
                <code className="text-muted-foreground">yarn add @weaver/design-system</code>
              </pre>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">pnpm</h4>
              <pre className="relative overflow-x-auto rounded-md bg-muted p-4 text-sm">
                <code className="text-muted-foreground">pnpm add @weaver/design-system</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Usage */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Usage</h3>
          <p className="text-sm text-muted-foreground">
            Import and use Weaver components in your React application.
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-3">Basic Usage</h4>
              <pre className="relative overflow-x-auto rounded-md bg-muted p-4 text-sm">
                <code className="text-muted-foreground">{`import { WeaverButton } from '@weaver/design-system';

function App() {
  return (
    <WeaverButton 
      style="primary" 
      size="md" 
      label="Click me"
    />
  );
}`}</code>
              </pre>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3">With Icons</h4>
              <pre className="relative overflow-x-auto rounded-md bg-muted p-4 text-sm">
                <code className="text-muted-foreground">{`import { WeaverButton } from '@weaver/design-system';
import { Plus } from 'lucide-react';

function App() {
  return (
    <WeaverButton 
      style="primary" 
      size="md" 
      label="Add Item"
      showLeadingIcon={true}
      leadingIcon={<Plus />}
    />
  );
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* API Reference */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">API Reference</h3>
          <p className="text-sm text-muted-foreground">
            Complete API documentation for WeaverButton component.
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4">Prop</th>
                  <th className="text-left py-2 pr-4">Type</th>
                  <th className="text-left py-2 pr-4">Default</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono text-sm">style</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">"primary"</td>
                  <td className="py-2">Button visual style variant</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono text-sm">size</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">"md"</td>
                  <td className="py-2">Button size (xs, sm, md, lg)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono text-sm">state</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">"default"</td>
                  <td className="py-2">Button state (default, hover, pressed, focused, disabled)</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono text-sm">label</td>
                  <td className="py-2 pr-4">string</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Button text content</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono text-sm">rtl</td>
                  <td className="py-2 pr-4">boolean</td>
                  <td className="py-2 pr-4">false</td>
                  <td className="py-2">Enable right-to-left layout</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono text-sm">showLeadingIcon</td>
                  <td className="py-2 pr-4">boolean</td>
                  <td className="py-2 pr-4">false</td>
                  <td className="py-2">Show leading icon</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 pr-4 font-mono text-sm">leadingIcon</td>
                  <td className="py-2 pr-4">ReactNode</td>
                  <td className="py-2 pr-4">-</td>
                  <td className="py-2">Leading icon element</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const renderExamples = () => (
    <div className="space-y-8">
      {/* Form Actions */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Form Actions</h3>
          <p className="text-sm text-muted-foreground">
            Common button patterns for forms and user interactions.
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-3">Primary & Secondary Actions</h4>
              <div className="flex gap-2 mb-4">
                <WeaverButton style="primary" size="md" label="Save Changes" />
                <WeaverButton style="secondary" size="md" label="Cancel" />
              </div>
              <pre className="relative overflow-x-auto rounded-md bg-muted p-4 text-sm">
                <code className="text-muted-foreground">{`<WeaverButton style="primary" size="md" label="Save Changes" />
<WeaverButton style="secondary" size="md" label="Cancel" />`}</code>
              </pre>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-3">Destructive Actions</h4>
              <div className="flex gap-2 mb-4">
                <WeaverButton style="danger" size="md" label="Delete Account" />
                <WeaverButton style="soft-danger" size="md" label="Remove Item" />
              </div>
              <pre className="relative overflow-x-auto rounded-md bg-muted p-4 text-sm">
                <code className="text-muted-foreground">{`<WeaverButton style="danger" size="md" label="Delete Account" />
<WeaverButton style="soft-danger" size="md" label="Remove Item" />`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">Icon Buttons</h3>
          <p className="text-sm text-muted-foreground">
            Buttons with leading and trailing icons for better UX.
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-3">Action Buttons</h4>
              <div className="flex gap-2 mb-4">
                <WeaverButton style="primary" size="sm" label="Add Item" showLeadingIcon={true} leadingIcon="+" />
                <WeaverButton style="outline-blue" size="sm" label="Edit" showLeadingIcon={true} leadingIcon="✏️" />
                <WeaverButton style="danger" size="sm" label="Delete" showLeadingIcon={true} leadingIcon="×" />
              </div>
              <pre className="relative overflow-x-auto rounded-md bg-muted p-4 text-sm">
                <code className="text-muted-foreground">{`<WeaverButton 
  style="primary" 
  size="sm" 
  label="Add Item" 
  showLeadingIcon={true} 
  leadingIcon="+" 
/>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* RTL Support */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">RTL Support</h3>
          <p className="text-sm text-muted-foreground">
            Built-in support for right-to-left languages with automatic icon and text positioning.
          </p>
        </div>
        <div className="p-6 pt-0">
          <div className="flex items-center justify-center space-x-8">
            <div className="space-y-2">
              <WeaverButton 
                rtl={false} 
                label="English Button" 
                showLeadingIcon={true}
                leadingIcon="←"
                showTrailingIcon={true}
                trailingIcon="→"
                style="primary"
              />
              <p className="text-xs text-muted-foreground text-center">LTR (English)</p>
            </div>
            <div className="space-y-2">
              <WeaverButton 
                rtl={true} 
                label="Arabic Button" 
                showLeadingIcon={true}
                leadingIcon="←"
                showTrailingIcon={true}
                trailingIcon="→"
                style="primary"
              />
              <p className="text-xs text-muted-foreground text-center">RTL (Arabic)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="hidden font-bold sm:inline-block text-xl">Weaver</span>
            </a>
            <nav className="flex items-center gap-6 text-sm">
              <button 
                onClick={() => setActiveSection('overview')}
                className={`transition-colors hover:text-foreground/80 ${activeSection === 'overview' ? 'text-foreground' : 'text-foreground/60'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveSection('demo')}
                className={`transition-colors hover:text-foreground/80 ${activeSection === 'demo' ? 'text-foreground' : 'text-foreground/60'}`}
              >
                Demo
              </button>
              <button 
                onClick={() => setActiveSection('docs')}
                className={`transition-colors hover:text-foreground/80 ${activeSection === 'docs' ? 'text-foreground' : 'text-foreground/60'}`}
              >
                Documentation
              </button>
              <button 
                onClick={() => setActiveSection('examples')}
                className={`transition-colors hover:text-foreground/80 ${activeSection === 'examples' ? 'text-foreground' : 'text-foreground/60'}`}
              >
                Examples
              </button>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                  v1.0.0
                </span>
                <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800 hover:bg-green-200">
                  Production Ready
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-20">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-sm mb-3">Navigation</h4>
                  <div className="space-y-1">
                    <button 
                      onClick={() => setActiveSection('overview')}
                      className={`block w-full text-left py-2 px-3 text-sm rounded-md transition-colors ${activeSection === 'overview' ? 'text-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-accent'}`}
                    >
                      Overview
                    </button>
                    <button 
                      onClick={() => setActiveSection('demo')}
                      className={`block w-full text-left py-2 px-3 text-sm rounded-md transition-colors ${activeSection === 'demo' ? 'text-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-accent'}`}
                    >
                      Interactive Demo
                    </button>
                    <button 
                      onClick={() => setActiveSection('docs')}
                      className={`block w-full text-left py-2 px-3 text-sm rounded-md transition-colors ${activeSection === 'docs' ? 'text-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-accent'}`}
                    >
                      Documentation
                    </button>
                    <button 
                      onClick={() => setActiveSection('examples')}
                      className={`block w-full text-left py-2 px-3 text-sm rounded-md transition-colors ${activeSection === 'examples' ? 'text-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-accent'}`}
                    >
                      Examples
                    </button>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-3">Components</h4>
                  <div className="space-y-1">
                    <a className="block py-2 px-3 text-sm text-foreground bg-accent rounded-md transition-colors" href="#button">Button</a>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-3">Features</h4>
                  <div className="space-y-1">
                    <a className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors" href="#rtl">RTL Support</a>
                    <a className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors" href="#accessibility">Accessibility</a>
                    <a className="block py-2 px-3 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors" href="#theming">Theming</a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {activeSection === 'overview' && renderOverview()}
            {activeSection === 'demo' && renderButtonDemo()}
            {activeSection === 'docs' && renderDocumentation()}
            {activeSection === 'examples' && renderExamples()}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="font-bold text-xl">Weaver</span>
              </div>
              <p className="text-sm text-muted-foreground">
                A comprehensive React component library built with shadcn/ui and Tailwind CSS.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Components</h4>
              <div className="space-y-2">
                <a className="block text-sm text-muted-foreground hover:text-foreground" href="#button">Button</a>
                <a className="block text-sm text-muted-foreground hover:text-foreground" href="#more">More Coming Soon</a>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Resources</h4>
              <div className="space-y-2">
                <a className="block text-sm text-muted-foreground hover:text-foreground" href="#docs">Documentation</a>
                <a className="block text-sm text-muted-foreground hover:text-foreground" href="#examples">Examples</a>
                <a className="block text-sm text-muted-foreground hover:text-foreground" href="#github">GitHub</a>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Support</h4>
              <div className="space-y-2">
                <a className="block text-sm text-muted-foreground hover:text-foreground" href="#issues">Issues</a>
                <a className="block text-sm text-muted-foreground hover:text-foreground" href="#discussions">Discussions</a>
                <a className="block text-sm text-muted-foreground hover:text-foreground" href="#contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Weaver Design System. Built with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}