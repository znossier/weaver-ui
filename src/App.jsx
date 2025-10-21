import { WeaverButton } from './components/weaver/Button';
import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedStyle, setSelectedStyle] = useState('primary');
  const [selectedSize, setSelectedSize] = useState('md');
  const [selectedState, setSelectedState] = useState('default');
  const [isRTL, setIsRTL] = useState(false);
  const [showIcons, setShowIcons] = useState(true);

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

  const components = [
    { id: 'button', name: 'Button', description: 'Interactive button component', status: 'stable' },
    { id: 'input', name: 'Input', description: 'Form input component', status: 'coming-soon' },
    { id: 'card', name: 'Card', description: 'Content container component', status: 'coming-soon' },
    { id: 'modal', name: 'Modal', description: 'Overlay dialog component', status: 'coming-soon' },
    { id: 'dropdown', name: 'Dropdown', description: 'Select menu component', status: 'coming-soon' },
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

  const HomePage = () => (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center py-16 px-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 mb-8">
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Weaver Design System
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          A comprehensive React component library built with shadcn/ui and Tailwind CSS. 
          Beautiful, accessible, and customizable components for modern web applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <WeaverButton 
            style="primary" 
            size="lg" 
            label="Get Started" 
            showLeadingIcon={true}
            leadingIcon="🚀"
            onClick={() => setCurrentPage('components')}
          />
          <WeaverButton 
            style="outline-blue" 
            size="lg" 
            label="View Components" 
            showLeadingIcon={true}
            leadingIcon="📦"
            onClick={() => setCurrentPage('components')}
          />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-xl border bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-muted-foreground">Built with performance in mind. Optimized components that load quickly and run smoothly.</p>
          </div>
          <div className="text-center p-8 rounded-xl border bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Accessible</h3>
            <p className="text-muted-foreground">WCAG compliant components with keyboard navigation and screen reader support.</p>
          </div>
          <div className="text-center p-8 rounded-xl border bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Customizable</h3>
            <p className="text-muted-foreground">Easily theme and customize components to match your brand's unique style.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Button Variants</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">4</div>
            <div className="text-sm text-muted-foreground">Size Options</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">RTL</div>
            <div className="text-sm text-muted-foreground">Language Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Accessible</div>
          </div>
        </div>
      </div>
    </div>
  );

  const ComponentsPage = () => {
    const [selectedComponent, setSelectedComponent] = useState('button');

    const renderComponentContent = () => {
      switch (selectedComponent) {
        case 'button':
          return (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Button Component</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Interactive button component with 10 variants, 4 sizes, and full RTL support.
                </p>
              </div>

              {/* Live Preview */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">Live Preview</h3>
                <div className="flex items-center justify-center py-12 bg-muted/30 rounded-lg">
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

              {/* Controls */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">Customize</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Style</label>
                    <select 
                      value={selectedStyle} 
                      onChange={(e) => setSelectedStyle(e.target.value)}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      {buttonStyles.map(style => (
                        <option key={style.value} value={style.value}>{style.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Size</label>
                    <select 
                      value={selectedSize} 
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      {buttonSizes.map(size => (
                        <option key={size.value} value={size.value}>{size.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">State</label>
                    <select 
                      value={selectedState} 
                      onChange={(e) => setSelectedState(e.target.value)}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      {buttonStates.map(state => (
                        <option key={state.value} value={state.value}>{state.label}</option>
                      ))}
                    </select>
                  </div>
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

              {/* Code Example */}
              <div className="rounded-xl border bg-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Generated Code</h3>
                  <button 
                    onClick={() => navigator.clipboard.writeText(generateCode())}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Code
                  </button>
                </div>
                <div className="relative">
                  <pre className="bg-slate-950 text-slate-50 p-6 rounded-lg text-sm overflow-x-auto border">
                    <code className="text-slate-50">{generateCode()}</code>
                  </pre>
                </div>
              </div>

              {/* Variants */}
              <div className="rounded-xl border bg-card p-6">
                <h3 className="text-xl font-semibold mb-4">All Variants</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {buttonStyles.map((style) => (
                    <div key={style.value} className="space-y-2">
                      <WeaverButton 
                        style={style.value}
                        size="sm"
                        label="Button"
                        showLeadingIcon={false}
                        showTrailingIcon={false}
                      />
                      <div className="text-center">
                        <p className="text-xs font-medium">{style.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        case 'input':
          return (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Input Component</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Form input component with validation states and accessibility features.
                </p>
                <div className="rounded-xl border bg-card p-6">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                    <p className="text-muted-foreground">Input component is currently in development.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        case 'card':
          return (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Card Component</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Content container component with flexible layouts and styling options.
                </p>
                <div className="rounded-xl border bg-card p-6">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                    <p className="text-muted-foreground">Card component is currently in development.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        case 'modal':
          return (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Modal Component</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Overlay dialog component with focus management and accessibility.
                </p>
                <div className="rounded-xl border bg-card p-6">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                    <p className="text-muted-foreground">Modal component is currently in development.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        case 'dropdown':
          return (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Dropdown Component</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Select menu component with keyboard navigation and search functionality.
                </p>
                <div className="rounded-xl border bg-card p-6">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                    <p className="text-muted-foreground">Dropdown component is currently in development.</p>
                  </div>
                </div>
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Components</h1>
          <p className="text-xl text-muted-foreground">
            Explore our growing collection of React components.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-20">
              <div className="space-y-2">
                {components.map((component) => (
                  <button
                    key={component.id}
                    onClick={() => setSelectedComponent(component.id)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      selectedComponent === component.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{component.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        component.status === 'stable' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {component.status === 'stable' ? 'Stable' : 'Soon'}
                      </span>
                    </div>
                    <p className="text-sm opacity-80">{component.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {renderComponentContent()}
          </main>
        </div>
      </div>
    );
  };

  const ButtonDemoPage = () => (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Button Component</h1>
        <p className="text-xl text-muted-foreground">
          Interactive button component with 10 variants, 4 sizes, and full RTL support.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Live Preview */}
        <div className="space-y-6">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="text-xl font-semibold mb-4">Live Preview</h3>
            <div className="flex items-center justify-center py-12 bg-muted/30 rounded-lg">
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

          {/* Controls */}
          <div className="rounded-xl border bg-card p-6">
            <h3 className="text-xl font-semibold mb-4">Customize</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Style</label>
                <select 
                  value={selectedStyle} 
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  {buttonStyles.map(style => (
                    <option key={style.value} value={style.value}>{style.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <select 
                  value={selectedSize} 
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  {buttonSizes.map(size => (
                    <option key={size.value} value={size.value}>{size.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">State</label>
                <select 
                  value={selectedState} 
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  {buttonStates.map(state => (
                    <option key={state.value} value={state.value}>{state.label}</option>
                  ))}
                </select>
              </div>

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

        {/* Code & Variants */}
        <div className="space-y-6">
          {/* Code Example */}
          <div className="rounded-xl border bg-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Generated Code</h3>
              <button 
                onClick={() => navigator.clipboard.writeText(generateCode())}
                className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Copy
              </button>
            </div>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
              <code>{generateCode()}</code>
            </pre>
          </div>

          {/* Variants */}
          <div className="rounded-xl border bg-card p-6">
            <h3 className="text-xl font-semibold mb-4">All Variants</h3>
            <div className="grid grid-cols-2 gap-4">
              {buttonStyles.map((style) => (
                <div key={style.value} className="space-y-2">
                  <WeaverButton 
                    style={style.value}
                    size="sm"
                    label="Button"
                    showLeadingIcon={false}
                    showTrailingIcon={false}
                  />
                  <div className="text-center">
                    <p className="text-xs font-medium">{style.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DocumentationPage = () => (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Complete guide to using Weaver Design System in your projects.
        </p>
      </div>

      <div className="space-y-8">
        {/* Installation */}
        <div className="rounded-xl border bg-card p-8">
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">npm</h3>
              <div className="relative">
                <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto border">
                  <code className="text-slate-50">npm install @weaver/design-system</code>
                </pre>
                <button 
                  onClick={() => navigator.clipboard.writeText('npm install @weaver/design-system')}
                  className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 text-slate-50 rounded-md transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">yarn</h3>
              <div className="relative">
                <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto border">
                  <code className="text-slate-50">yarn add @weaver/design-system</code>
                </pre>
                <button 
                  onClick={() => navigator.clipboard.writeText('yarn add @weaver/design-system')}
                  className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 text-slate-50 rounded-md transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">pnpm</h3>
              <div className="relative">
                <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto border">
                  <code className="text-slate-50">pnpm add @weaver/design-system</code>
                </pre>
                <button 
                  onClick={() => navigator.clipboard.writeText('pnpm add @weaver/design-system')}
                  className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 text-slate-50 rounded-md transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="rounded-xl border bg-card p-8">
          <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
          <div className="relative">
            <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto border">
              <code className="text-slate-50">{`import { WeaverButton } from '@weaver/design-system';

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
            <button 
              onClick={() => navigator.clipboard.writeText(`import { WeaverButton } from '@weaver/design-system';

function App() {
  return (
    <WeaverButton 
      style="primary" 
      size="md" 
      label="Click me"
    />
  );
}`)}
              className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 text-slate-50 rounded-md transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* API Reference */}
        <div className="rounded-xl border bg-card p-8">
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const ExamplesPage = () => (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Examples</h1>
        <p className="text-xl text-muted-foreground">
          Real-world usage patterns and common implementations.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form Actions */}
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-xl font-semibold mb-4">Form Actions</h3>
          <div className="space-y-4">
            <div className="flex gap-2">
              <WeaverButton style="primary" size="md" label="Save Changes" />
              <WeaverButton style="secondary" size="md" label="Cancel" />
            </div>
            <div className="relative">
              <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto border">
                <code className="text-slate-50">{`<WeaverButton style="primary" size="md" label="Save Changes" />
<WeaverButton style="secondary" size="md" label="Cancel" />`}</code>
              </pre>
              <button 
                onClick={() => navigator.clipboard.writeText(`<WeaverButton style="primary" size="md" label="Save Changes" />
<WeaverButton style="secondary" size="md" label="Cancel" />`)}
                className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 text-slate-50 rounded-md transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Icon Buttons */}
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-xl font-semibold mb-4">Icon Buttons</h3>
          <div className="space-y-4">
            <div className="flex gap-2">
              <WeaverButton style="primary" size="sm" label="Add Item" showLeadingIcon={true} leadingIcon="+" />
              <WeaverButton style="danger" size="sm" label="Delete" showLeadingIcon={true} leadingIcon="×" />
            </div>
            <div className="relative">
              <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg text-sm overflow-x-auto border">
                <code className="text-slate-50">{`<WeaverButton 
  style="primary" 
  size="sm" 
  label="Add Item" 
  showLeadingIcon={true} 
  leadingIcon="+" 
/>`}</code>
              </pre>
              <button 
                onClick={() => navigator.clipboard.writeText(`<WeaverButton 
  style="primary" 
  size="sm" 
  label="Add Item" 
  showLeadingIcon={true} 
  leadingIcon="+" 
/>`)}
                className="absolute top-2 right-2 p-2 bg-slate-800 hover:bg-slate-700 text-slate-50 rounded-md transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* RTL Support */}
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-xl font-semibold mb-4">RTL Support</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <WeaverButton 
                  rtl={false} 
                  label="English Button" 
                  showLeadingIcon={true}
                  leadingIcon="←"
                  showTrailingIcon={true}
                  trailingIcon="→"
                  style="primary"
                />
                <p className="text-xs text-muted-foreground mt-2">LTR (English)</p>
              </div>
              <div className="text-center">
                <WeaverButton 
                  rtl={true} 
                  label="Arabic Button" 
                  showLeadingIcon={true}
                  leadingIcon="←"
                  showTrailingIcon={true}
                  trailingIcon="→"
                  style="primary"
                />
                <p className="text-xs text-muted-foreground mt-2">RTL (Arabic)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Size Comparison */}
        <div className="rounded-xl border bg-card p-6">
          <h3 className="text-xl font-semibold mb-4">Size Comparison</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              {buttonSizes.map((size) => (
                <div key={size.value} className="text-center">
                  <WeaverButton 
                    style="primary"
                    size={size.value}
                    label="Button"
                    showLeadingIcon={false}
                    showTrailingIcon={false}
                  />
                  <p className="text-xs text-muted-foreground mt-2">{size.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'components':
        return <ComponentsPage />;
      case 'button-demo':
        return <ButtonDemoPage />;
      case 'documentation':
        return <DocumentationPage />;
      case 'examples':
        return <ExamplesPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center px-4">
          <div className="mr-4 hidden md:flex">
            <button 
              className="mr-6 flex items-center space-x-2"
              onClick={() => setCurrentPage('home')}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="hidden font-bold sm:inline-block text-xl">Weaver</span>
            </button>
            <nav className="flex items-center gap-6 text-sm">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`transition-colors hover:text-foreground/80 ${
                  currentPage === 'home' ? 'text-foreground' : 'text-foreground/60'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => setCurrentPage('components')}
                className={`transition-colors hover:text-foreground/80 ${
                  currentPage === 'components' ? 'text-foreground' : 'text-foreground/60'
                }`}
              >
                Components
              </button>
              <button 
                onClick={() => setCurrentPage('documentation')}
                className={`transition-colors hover:text-foreground/80 ${
                  currentPage === 'documentation' ? 'text-foreground' : 'text-foreground/60'
                }`}
              >
                Documentation
              </button>
              <button 
                onClick={() => setCurrentPage('examples')}
                className={`transition-colors hover:text-foreground/80 ${
                  currentPage === 'examples' ? 'text-foreground' : 'text-foreground/60'
                }`}
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
      <main className="container mx-auto px-4 py-8">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-16">
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
                <button 
                  onClick={() => setCurrentPage('components')}
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  All Components
                </button>
                <button 
                  onClick={() => setCurrentPage('button-demo')}
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Button
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Resources</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => setCurrentPage('documentation')}
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Documentation
                </button>
                <button 
                  onClick={() => setCurrentPage('examples')}
                  className="block text-sm text-muted-foreground hover:text-foreground"
                >
                  Examples
                </button>
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
            <p>&copy; 2024 Weaver Design System. Made with ❤️ by the Weaver Design Team.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}