import { WeaverButton } from './components/weaver/Button';
import { useState, useEffect } from 'react';
import { 
  Zap, 
  Shield, 
  Palette, 
  Copy, 
  Clock, 
  ChevronRight, 
  Sun, 
  Moon, 
  Monitor,
  Check,
  ArrowLeft,
  ArrowRight,
  Plus,
  X,
  Edit,
  Trash2,
  Save,
  Download,
  Github,
  ExternalLink,
  Menu,
  X as CloseIcon
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedStyle, setSelectedStyle] = useState('primary');
  const [selectedSize, setSelectedSize] = useState('md');
  const [selectedState, setSelectedState] = useState('default');
  const [isRTL, setIsRTL] = useState(false);
  const [showIcons, setShowIcons] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [colorTheme, setColorTheme] = useState('blue');
  const [showColorMenu, setShowColorMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

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

  const navigationItems = [
    { id: 'home', name: 'Home', icon: <Zap className="w-4 h-4" /> },
    { id: 'components', name: 'Components', icon: <Shield className="w-4 h-4" /> },
    { id: 'design-tokens', name: 'Design Tokens', icon: <Palette className="w-4 h-4" /> },
    { id: 'documentation', name: 'Documentation', icon: <Edit className="w-4 h-4" /> },
    { id: 'examples', name: 'Examples', icon: <Download className="w-4 h-4" /> },
    { id: 'figma', name: 'Figma Library', icon: <ExternalLink className="w-4 h-4" /> },
  ];

  const components = [
    { id: 'button', name: 'Button', description: 'Interactive button component', status: 'stable' },
    { id: 'input', name: 'Input', description: 'Form input component', status: 'coming-soon' },
    { id: 'card', name: 'Card', description: 'Content container component', status: 'coming-soon' },
    { id: 'modal', name: 'Modal', description: 'Overlay dialog component', status: 'coming-soon' },
    { id: 'dropdown', name: 'Dropdown', description: 'Select menu component', status: 'coming-soon' },
  ];

  const designTokens = {
    typography: [
      { name: 'Heading 1', class: 'text-4xl font-bold', example: 'The quick brown fox' },
      { name: 'Heading 2', class: 'text-3xl font-bold', example: 'The quick brown fox' },
      { name: 'Heading 3', class: 'text-2xl font-semibold', example: 'The quick brown fox' },
      { name: 'Body Large', class: 'text-lg', example: 'The quick brown fox jumps over the lazy dog' },
      { name: 'Body', class: 'text-base', example: 'The quick brown fox jumps over the lazy dog' },
      { name: 'Body Small', class: 'text-sm', example: 'The quick brown fox jumps over the lazy dog' },
      { name: 'Caption', class: 'text-xs', example: 'The quick brown fox jumps over the lazy dog' },
    ],
    spacing: [
      { name: 'xs', value: '4px', class: 'p-1' },
      { name: 'sm', value: '8px', class: 'p-2' },
      { name: 'md', value: '16px', class: 'p-4' },
      { name: 'lg', value: '24px', class: 'p-6' },
      { name: 'xl', value: '32px', class: 'p-8' },
      { name: '2xl', value: '48px', class: 'p-12' },
    ],
    colors: [
      { name: 'Primary', value: '#3B82F6', class: 'bg-blue-500' },
      { name: 'Secondary', value: '#6B7280', class: 'bg-gray-500' },
      { name: 'Success', value: '#10B981', class: 'bg-green-500' },
      { name: 'Warning', value: '#F59E0B', class: 'bg-yellow-500' },
      { name: 'Error', value: '#EF4444', class: 'bg-red-500' },
      { name: 'Info', value: '#06B6D4', class: 'bg-cyan-500' },
    ],
    numbers: [
      { name: 'Font Weight', values: ['300', '400', '500', '600', '700', '800'] },
      { name: 'Border Radius', values: ['4px', '8px', '12px', '16px', '24px', '32px'] },
      { name: 'Shadows', values: ['sm', 'md', 'lg', 'xl', '2xl'] },
    ]
  };

  const colorThemes = [
    { id: 'blue', name: 'Blue', color: 'bg-blue-500', ring: 'ring-blue-500', description: 'Professional blue theme' },
    { id: 'gray', name: 'Gray', color: 'bg-gray-500', ring: 'ring-gray-500', description: 'Neutral gray theme' },
    { id: 'brown', name: 'Brown', color: 'bg-amber-600', ring: 'ring-amber-500', description: 'Warm brown theme' },
    { id: 'yellow', name: 'Yellow', color: 'bg-yellow-500', ring: 'ring-yellow-500', description: 'Bright yellow theme' },
  ];

  // Theme management
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('weaver-dark-mode');
    const savedColorTheme = localStorage.getItem('weaver-color-theme');
    if (savedDarkMode) setIsDarkMode(savedDarkMode === 'true');
    if (savedColorTheme) setColorTheme(savedColorTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('weaver-dark-mode', isDarkMode.toString());
    localStorage.setItem('weaver-color-theme', colorTheme);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-color-theme', colorTheme);
  }, [isDarkMode, colorTheme]);

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
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950/20 rounded-2xl p-12 mb-12">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Noon Supply Chain Design System
            </div>
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Weaver Design System
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
              A comprehensive design system built for Noon's supply chain operations. 
              Consistent, accessible, and scalable components for our internal tools and applications.
            </p>
            <div className="flex gap-4">
              <WeaverButton 
                style="primary" 
                size="lg" 
                label="Get Started" 
                showLeadingIcon={true}
                leadingIcon={<ChevronRight className="w-5 h-5" />}
                onClick={() => setCurrentPage('components')}
              />
              <WeaverButton 
                style="outline-blue" 
                size="lg" 
                label="View Figma Library" 
                showLeadingIcon={true}
                leadingIcon={<ExternalLink className="w-5 h-5" />}
                onClick={() => setCurrentPage('figma')}
              />
            </div>
          </div>
          <div className="hidden lg:block ml-12">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Zap className="w-32 h-32 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border">
          <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Components</div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border">
          <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Accessible</div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border">
          <div className="text-3xl font-bold text-purple-600 mb-2">RTL</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Language Support</div>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border">
          <div className="text-3xl font-bold text-orange-600 mb-2">v1.0</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Production Ready</div>
        </div>
      </div>

      {/* Design System Overview */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border">
          <h3 className="text-2xl font-bold mb-4">Design Tokens</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Consistent typography, colors, spacing, and other design elements across all our applications.
          </p>
          <WeaverButton 
            style="primary" 
            size="md" 
            label="Explore Design Tokens" 
            onClick={() => setCurrentPage('design-tokens')}
          />
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border">
          <h3 className="text-2xl font-bold mb-4">Component Library</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Reusable React components built with accessibility and performance in mind.
          </p>
          <WeaverButton 
            style="primary" 
            size="md" 
            label="Browse Components" 
            onClick={() => setCurrentPage('components')}
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Built by Noon Supply Chain Design Team</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
            This design system is created and maintained by our internal design team to ensure 
            consistency across all supply chain applications and tools.
          </p>
          <div className="flex justify-center gap-4">
            <WeaverButton 
              style="outline-blue" 
              size="md" 
              label="View Documentation" 
              onClick={() => setCurrentPage('documentation')}
            />
            <WeaverButton 
              style="outline-blue" 
              size="md" 
              label="See Examples" 
              onClick={() => setCurrentPage('examples')}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const DesignTokensPage = () => (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Design Tokens</h1>
        <p className="text-xl text-muted-foreground">
          Consistent design elements used across all Noon Supply Chain applications.
        </p>
      </div>

      {/* Typography */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Typography</h2>
        <div className="bg-white dark:bg-slate-800 rounded-xl border p-6">
          <div className="space-y-6">
            {designTokens.typography.map((type, index) => (
              <div key={index} className="flex items-center justify-between py-4 border-b last:border-b-0">
                <div className="flex-1">
                  <div className="text-sm font-medium text-muted-foreground mb-2">{type.name}</div>
                  <div className={`${type.class} text-slate-900 dark:text-white`}>{type.example}</div>
                </div>
                <div className="text-sm text-muted-foreground font-mono bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded">
                  {type.class}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Colors */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Colors</h2>
        <div className="bg-white dark:bg-slate-800 rounded-xl border p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {designTokens.colors.map((color, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-lg ${color.class} shadow-sm`}></div>
                <div>
                  <div className="font-medium">{color.name}</div>
                  <div className="text-sm text-muted-foreground font-mono">{color.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacing */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Spacing</h2>
        <div className="bg-white dark:bg-slate-800 rounded-xl border p-6">
          <div className="space-y-4">
            {designTokens.spacing.map((space, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-20 text-sm font-medium">{space.name}</div>
                <div className="text-sm text-muted-foreground font-mono">{space.value}</div>
                <div className={`${space.class} bg-blue-100 dark:bg-blue-900/30 rounded`}>
                  <div className="w-4 h-4 bg-blue-500 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Numbers */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Numbers & Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {designTokens.numbers.map((category, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 rounded-xl border p-6">
              <h3 className="font-semibold mb-4">{category.name}</h3>
              <div className="space-y-2">
                {category.values.map((value, valueIndex) => (
                  <div key={valueIndex} className="flex items-center justify-between">
                    <span className="text-sm">{value}</span>
                    <span className="text-xs text-muted-foreground font-mono">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
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
              {/* Breadcrumbs */}
              <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="hover:text-foreground transition-colors"
                >
                  Home
                </button>
                <ChevronRight className="w-4 h-4" />
                <button 
                  onClick={() => setCurrentPage('components')}
                  className="hover:text-foreground transition-colors"
                >
                  Components
                </button>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground font-medium">Button</span>
              </nav>
              
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
                    <Copy className="w-4 h-4" />
                    Copy Code
                  </button>
                </div>
                <div className="relative">
                  <pre className="bg-muted/50 border p-6 rounded-lg text-sm overflow-x-auto border">
                    <code className="text-foreground">{generateCode()}</code>
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
                <pre className="bg-muted/50 border p-4 rounded-lg text-sm overflow-x-auto border">
                  <code className="text-foreground">npm install @weaver/design-system</code>
                </pre>
                <button 
                  onClick={() => navigator.clipboard.writeText('npm install @weaver/design-system')}
                  className="absolute top-2 right-2 p-2 bg-background border hover:bg-accent text-foreground shadow-sm rounded-md transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">yarn</h3>
              <div className="relative">
                <pre className="bg-muted/50 border p-4 rounded-lg text-sm overflow-x-auto border">
                  <code className="text-foreground">yarn add @weaver/design-system</code>
                </pre>
                <button 
                  onClick={() => navigator.clipboard.writeText('yarn add @weaver/design-system')}
                  className="absolute top-2 right-2 p-2 bg-background border hover:bg-accent text-foreground shadow-sm rounded-md transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">pnpm</h3>
              <div className="relative">
                <pre className="bg-muted/50 border p-4 rounded-lg text-sm overflow-x-auto border">
                  <code className="text-foreground">pnpm add @weaver/design-system</code>
                </pre>
                <button 
                  onClick={() => navigator.clipboard.writeText('pnpm add @weaver/design-system')}
                  className="absolute top-2 right-2 p-2 bg-background border hover:bg-accent text-foreground shadow-sm rounded-md transition-colors"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="rounded-xl border bg-card p-8">
          <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
          <div className="relative">
            <pre className="bg-muted/50 border p-4 rounded-lg text-sm overflow-x-auto border">
              <code className="text-foreground">{`import { WeaverButton } from '@weaver/design-system';

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
              className="absolute top-2 right-2 p-2 bg-background border hover:bg-accent text-foreground shadow-sm rounded-md transition-colors"
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
              <pre className="bg-muted/50 border p-4 rounded-lg text-sm overflow-x-auto border">
                <code className="text-foreground">{`<WeaverButton style="primary" size="md" label="Save Changes" />
<WeaverButton style="secondary" size="md" label="Cancel" />`}</code>
              </pre>
              <button 
                onClick={() => navigator.clipboard.writeText(`<WeaverButton style="primary" size="md" label="Save Changes" />
<WeaverButton style="secondary" size="md" label="Cancel" />`)}
                className="absolute top-2 right-2 p-2 bg-background border hover:bg-accent text-foreground shadow-sm rounded-md transition-colors"
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
              <pre className="bg-muted/50 border p-4 rounded-lg text-sm overflow-x-auto border">
                <code className="text-foreground">{`<WeaverButton 
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
                className="absolute top-2 right-2 p-2 bg-background border hover:bg-accent text-foreground shadow-sm rounded-md transition-colors"
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

  const FigmaPage = () => (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Figma Library</h1>
        <p className="text-xl text-muted-foreground">
          Access our complete design system in Figma for your design workflows.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white dark:bg-slate-800 rounded-xl border p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
              <ExternalLink className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Figma Library</h3>
              <p className="text-muted-foreground">Complete design system</p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Access all components, design tokens, and guidelines in our Figma library. 
            Perfect for designers working on Noon Supply Chain applications.
          </p>
          <WeaverButton 
            style="primary" 
            size="md" 
            label="Open Figma Library" 
            showLeadingIcon={true}
            leadingIcon={<ExternalLink className="w-4 h-4" />}
            onClick={() => window.open('https://figma.com', '_blank')}
          />
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl border p-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
              <Download className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Download Assets</h3>
              <p className="text-muted-foreground">Icons, illustrations, and more</p>
            </div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Download individual assets, icons, and design resources for your projects.
          </p>
          <WeaverButton 
            style="outline-blue" 
            size="md" 
            label="Download Assets" 
            showLeadingIcon={true}
            leadingIcon={<Download className="w-4 h-4" />}
          />
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-4">Getting Started with Figma</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h4 className="font-semibold mb-2">Open Library</h4>
            <p className="text-sm text-muted-foreground">Access our Figma library through the link above</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h4 className="font-semibold mb-2">Copy Components</h4>
            <p className="text-sm text-muted-foreground">Copy any component or design token to your project</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h4 className="font-semibold mb-2">Start Designing</h4>
            <p className="text-sm text-muted-foreground">Use consistent components in your designs</p>
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
      case 'design-tokens':
        return <DesignTokensPage />;
      case 'button-demo':
        return <ButtonDemoPage />;
      case 'documentation':
        return <DocumentationPage />;
      case 'examples':
        return <ExamplesPage />;
      case 'figma':
        return <FigmaPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <button 
              className="flex items-center space-x-3"
              onClick={() => setCurrentPage('home')}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">Weaver</span>
            </button>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  currentPage === item.id 
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Theme</span>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Noon Supply Chain Design System
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        {/* Top Header */}
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="hidden sm:block">
                <h1 className="text-xl font-semibold">
                  {navigationItems.find(item => item.id === currentPage)?.name || 'Weaver Design System'}
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                  v1.0.0
                </span>
                <span className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800 hover:bg-green-200">
                  Production Ready
                </span>
              </div>
              
              {/* Color Theme Switcher */}
              <div className="relative">
                <button
                  onClick={() => setShowColorMenu(!showColorMenu)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md border bg-background hover:bg-accent transition-colors"
                >
                  <Palette className="w-4 h-4" />
                  <span className="text-sm capitalize">{colorTheme}</span>
                </button>
                
                {showColorMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-popover border rounded-md shadow-lg z-50">
                    <div className="p-3">
                      <div className="text-xs font-medium text-muted-foreground mb-3">Color Theme</div>
                      <div className="grid grid-cols-2 gap-2">
                        {colorThemes.map((themeOption) => (
                          <button
                            key={themeOption.id}
                            onClick={() => { setColorTheme(themeOption.id); setShowColorMenu(false); }}
                            className={`flex items-center space-x-2 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors ${
                              colorTheme === themeOption.id ? 'bg-accent' : ''
                            }`}
                          >
                            <div className={`w-4 h-4 rounded-full ${themeOption.color} ring-2 ${themeOption.ring} ring-offset-2`} />
                            <span>{themeOption.name}</span>
                            {colorTheme === themeOption.id && <Check className="w-4 h-4 ml-auto" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          {renderCurrentPage()}
        </main>

      {/* Footer */}
      <footer className="border-t bg-muted/50 mt-16">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
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