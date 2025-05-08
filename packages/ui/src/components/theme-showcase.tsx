'use client';

function ColorBlock({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`h-16 w-16 rounded-md shadow-md ${className}`} />
      <p className="mt-2 text-sm font-medium">{name}</p>
      <p className="text-xs opacity-70">{className}</p>
    </div>
  );
}

function ColorPair({
  background,
  foreground,
}: {
  background: { name: string; className: string };
  foreground: { name: string; className: string };
}) {
  return (
    <div className="flex flex-col">
      <div
        className={`flex h-16 w-full items-center justify-center rounded-md shadow-md ${background.className}`}
      >
        <span className={`font-medium ${foreground.className}`}>Text Sample</span>
      </div>
      <div className="mt-2 flex flex-col space-y-1">
        <p className="text-sm font-medium">
          {background.name} / {foreground.name}
        </p>
        <p className="text-xs opacity-70">{background.className}</p>
        <p className="text-xs opacity-70">{foreground.className}</p>
      </div>
    </div>
  );
}

function ColorPairSection({
  title,
  pairs,
  ...props
}: React.ComponentProps<'div'> & {
  title: string;
  pairs: React.ComponentProps<typeof ColorPair>[];
}) {
  return (
    <div {...props}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pairs.map((pair, index) => (
          <ColorPair key={index} {...pair} />
        ))}
      </div>
    </div>
  );
}

function ColorSection({
  title,
  colors,
  ...props
}: React.ComponentProps<'div'> & {
  title: string;
  colors: { name: string; className: string }[];
}) {
  return (
    <div {...props}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
        {colors.map(color => (
          <ColorBlock key={color.name} {...color} />
        ))}
      </div>
    </div>
  );
}

function BorderRadiusBlock({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className={`h-16 w-16 border-2 border-border bg-primary ${className}`} />
      <p className="mt-2 text-sm font-medium">{name}</p>
      <p className="text-xs opacity-70">{className}</p>
    </div>
  );
}

function BorderRadiusSection({
  title,
  radii,
  ...props
}: React.ComponentProps<'div'> & {
  title: string;
  radii: React.ComponentProps<typeof BorderRadiusBlock>[];
}) {
  return (
    <div {...props}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
        {radii.map(radius => (
          <BorderRadiusBlock key={radius.name} {...radius} />
        ))}
      </div>
    </div>
  );
}

export function ThemeShowcase() {
  // Color pairs with background and foreground classNames
  const backgroundForegroundPairs = [
    {
      background: { name: 'Background', className: 'bg-background' },
      foreground: { name: 'Foreground', className: 'text-foreground' },
    },
    {
      background: { name: 'Card', className: 'bg-card' },
      foreground: { name: 'Card Foreground', className: 'text-card-foreground' },
    },
    {
      background: { name: 'Popover', className: 'bg-popover' },
      foreground: { name: 'Popover Foreground', className: 'text-popover-foreground' },
    },
    {
      background: { name: 'Primary', className: 'bg-primary' },
      foreground: { name: 'Primary Foreground', className: 'text-primary-foreground' },
    },
    {
      background: { name: 'Secondary', className: 'bg-secondary' },
      foreground: { name: 'Secondary Foreground', className: 'text-secondary-foreground' },
    },
    {
      background: { name: 'Accent', className: 'bg-accent' },
      foreground: { name: 'Accent Foreground', className: 'text-accent-foreground' },
    },
    {
      background: { name: 'Muted', className: 'bg-muted' },
      foreground: { name: 'Muted Foreground', className: 'text-muted-foreground' },
    },
    {
      background: { name: 'Destructive', className: 'bg-destructive' },
      foreground: { name: 'Destructive Foreground', className: 'text-destructive-foreground' },
    },
  ];

  // Sidebar color pairs
  const sidebarPairs = [
    {
      background: { name: 'Sidebar', className: 'bg-sidebar' },
      foreground: { name: 'Sidebar Foreground', className: 'text-sidebar-foreground' },
    },
    {
      background: { name: 'Sidebar Primary', className: 'bg-sidebar-primary' },
      foreground: {
        name: 'Sidebar Primary Foreground',
        className: 'text-sidebar-primary-foreground',
      },
    },
    {
      background: { name: 'Sidebar Accent', className: 'bg-sidebar-accent' },
      foreground: {
        name: 'Sidebar Accent Foreground',
        className: 'text-sidebar-accent-foreground',
      },
    },
  ];

  // Single colors with className
  const singleColors = [
    { name: 'Border', className: 'bg-border' },
    { name: 'Input', className: 'bg-input' },
    { name: 'Ring', className: 'bg-ring' },
  ];

  // Sidebar single colors
  const sidebarSingleColors = [
    { name: 'Sidebar Border', className: 'bg-sidebar-border' },
    { name: 'Sidebar Ring', className: 'bg-sidebar-ring' },
  ];

  const chartColors = [
    { name: 'Chart 1', className: 'bg-chart-1' },
    { name: 'Chart 2', className: 'bg-chart-2' },
    { name: 'Chart 3', className: 'bg-chart-3' },
    { name: 'Chart 4', className: 'bg-chart-4' },
    { name: 'Chart 5', className: 'bg-chart-5' },
  ];

  const borderRadii = [
    { name: 'Radius SM', className: 'rounded-sm' },
    { name: 'Radius MD', className: 'rounded-md' },
    { name: 'Radius LG', className: 'rounded-lg' },
    { name: 'Radius XL', className: 'rounded-xl' },
  ];

  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold">Theme Showcase</h1>
      <p className="mt-4 text-muted-foreground">
        Visual representation of all theme variables in the design system.
      </p>

      <ColorPairSection
        title="Background & Foreground Pairs"
        pairs={backgroundForegroundPairs}
        className="mt-8"
      />
      <ColorSection title="Other UI Colors" colors={singleColors} className="mt-8" />
      <ColorSection title="Chart Colors" colors={chartColors} className="mt-8" />
      <BorderRadiusSection title="Border Radius" radii={borderRadii} className="mt-8" />

      {/* Sidebar specific section */}
      <div className="mt-12 border-t pt-8">
        <ColorPairSection title="Sidebar Color Pairs" pairs={sidebarPairs} className="mt-0" />
        <ColorSection
          title="Sidebar Utility Colors"
          colors={sidebarSingleColors}
          className="mt-8"
        />
      </div>

      <div className="mt-12 border-t pt-8 text-center">
        <p className="text-muted-foreground">
          Visit{' '}
          <a
            href="https://tweakcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            tweakcn.com
          </a>{' '}
          for more examples
        </p>
      </div>
    </div>
  );
}
