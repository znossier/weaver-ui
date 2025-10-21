import { WeaverButton } from './components/weaver/Button';

export default function App() {
  return (
    <div className="min-h-screen bg-weaver-bg-default">
      {/* Header */}
      <header className="border-b border-weaver-border-default bg-weaver-white">
        <div className="max-w-7xl mx-auto px-weaver-6xl py-weaver-4xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-weaver-text-default">Weaver Design System</h1>
              <p className="text-weaver-text-muted mt-weaver-xs">Professional React Component Library</p>
            </div>
            <div className="flex items-center gap-weaver-4xl">
              <span className="px-weaver-4xl py-weaver-xs bg-weaver-green-100 text-weaver-green-800 text-sm rounded-weaver-sm">
                v1.0.0
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-weaver-6xl py-weaver-8xl">
        {/* Introduction */}
        <div className="mb-weaver-8xl">
          <h2 className="text-4xl font-bold text-weaver-text-default mb-weaver-4xl">
            Button Components
          </h2>
          <p className="text-lg text-weaver-text-muted max-w-3xl">
            Professional button components built with shadcn/ui and Tailwind CSS. 
            Featuring 10 different styles, 4 sizes, RTL support, and comprehensive accessibility features.
          </p>
        </div>

        {/* Button Styles Section */}
        <section className="mb-weaver-8xl">
          <div className="mb-weaver-6xl">
            <h3 className="text-2xl font-semibold text-weaver-text-default mb-weaver-2xl">Button Styles</h3>
            <p className="text-weaver-text-muted mb-weaver-4xl">
              Choose from 10 carefully crafted button styles for different use cases and contexts.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-weaver-4xl">
              <div className="space-y-weaver-2xl">
                <WeaverButton style="primary" label="Primary" />
                <p className="text-sm text-weaver-text-muted">Primary</p>
              </div>
              <div className="space-y-weaver-2xl">
                <WeaverButton style="secondary" label="Secondary" />
                <p className="text-sm text-weaver-text-muted">Secondary</p>
              </div>
              <div className="space-y-weaver-2xl">
                <WeaverButton style="soft" label="Soft" />
                <p className="text-sm text-weaver-text-muted">Soft</p>
              </div>
              <div className="space-y-weaver-2xl">
                <WeaverButton style="outline" label="Outline" />
                <p className="text-sm text-weaver-text-muted">Outline</p>
              </div>
              <div className="space-y-weaver-2xl">
                <WeaverButton style="ghost" label="Ghost" />
                <p className="text-sm text-weaver-text-muted">Ghost</p>
              </div>
              <div className="space-y-weaver-2xl">
                <WeaverButton style="danger" label="Danger" />
                <p className="text-sm text-weaver-text-muted">Danger</p>
              </div>
              <div className="space-y-weaver-2xl">
                <WeaverButton style="ghost-primary" label="Ghost Primary" />
                <p className="text-sm text-weaver-text-muted">Ghost Primary</p>
              </div>
              <div className="space-y-weaver-2xl">
                <WeaverButton style="soft-danger" label="Soft Danger" />
                <p className="text-sm text-weaver-text-muted">Soft Danger</p>
              </div>
              <div className="space-y-weaver-2xl">
                <WeaverButton style="white" label="White" />
                <p className="text-sm text-weaver-text-muted">White</p>
              </div>
              <div className="space-y-weaver-2xl">
                <WeaverButton style="dashed" label="Dashed" />
                <p className="text-sm text-weaver-text-muted">Dashed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Button Sizes Section */}
        <section className="mb-weaver-8xl">
          <div className="mb-weaver-6xl">
            <h3 className="text-2xl font-semibold text-weaver-text-default mb-weaver-2xl">Button Sizes</h3>
            <p className="text-weaver-text-muted mb-weaver-4xl">
              Four carefully designed sizes to fit any interface requirement.
            </p>
            <div className="flex flex-wrap items-center gap-weaver-4xl">
              <div className="space-y-weaver-2xl">
                <WeaverButton size="xs" label="Extra Small" />
                <p className="text-sm text-weaver-text-muted">32px height</p>
              </div>
              <div className="space-y-weaver-2xl">
                <WeaverButton size="sm" label="Small" />
                <p className="text-sm text-weaver-text-muted">36px height</p>
              </div>
              <div className="space-y-weaver-2xl">
                <WeaverButton size="md" label="Medium" />
                <p className="text-sm text-weaver-text-muted">40px height</p>
              </div>
              <div className="space-y-weaver-2xl">
                <WeaverButton size="lg" label="Large" />
                <p className="text-sm text-weaver-text-muted">48px height</p>
              </div>
            </div>
          </div>
        </section>

        {/* RTL Support Section */}
        <section className="mb-weaver-8xl">
          <div className="mb-weaver-6xl">
            <h3 className="text-2xl font-semibold text-weaver-text-default mb-weaver-2xl">RTL Support</h3>
            <p className="text-weaver-text-muted mb-weaver-4xl">
              Built-in support for right-to-left languages with automatic icon and text positioning.
            </p>
            <div className="flex flex-wrap gap-weaver-4xl">
              <div className="space-y-weaver-2xl">
                <WeaverButton 
                  rtl={false} 
                  label="English Button" 
                  showLeadingIcon={true}
                  leadingIcon="←"
                  showTrailingIcon={true}
                  trailingIcon="→"
                />
                <p className="text-sm text-weaver-text-muted">LTR (English)</p>
              </div>
              <div className="space-y-weaver-2xl">
                <WeaverButton 
                  rtl={true} 
                  label="Arabic Button" 
                  ARlabel="زر عربي"
                  showLeadingIcon={true}
                  leadingIcon="←"
                  showTrailingIcon={true}
                  trailingIcon="→"
                />
                <p className="text-sm text-weaver-text-muted">RTL (Arabic)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Example */}
        <section className="mb-weaver-8xl">
          <div className="bg-weaver-bg-subtle rounded-weaver-lg p-weaver-6xl">
            <h3 className="text-2xl font-semibold text-weaver-text-default mb-weaver-4xl">Usage Example</h3>
            <div className="bg-weaver-white rounded-weaver-md p-weaver-4xl border border-weaver-border-default">
              <pre className="text-sm text-weaver-text-muted overflow-x-auto">
{`import { WeaverButton } from '@weaver/design-system';

function MyComponent() {
  return (
    <WeaverButton 
      style="primary" 
      size="md" 
      label="Click me"
      showLeadingIcon={true}
      leadingIcon={<PlusIcon />}
    />
  );
}`}
              </pre>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-weaver-border-default bg-weaver-bg-subtle">
        <div className="max-w-7xl mx-auto px-weaver-6xl py-weaver-4xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-weaver-text-muted">© 2024 Weaver Design System</p>
            </div>
            <div className="flex items-center gap-weaver-4xl">
              <span className="text-sm text-weaver-text-muted">Ready for production</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}