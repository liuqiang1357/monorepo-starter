interface ColorBlockProps {
  name: string;
  variable: string;
  className: string;
}

const ColorBlock = ({ name, className }: ColorBlockProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`h-16 w-16 rounded-md shadow-md ${className}`} />
      <p className="mt-2 text-sm font-medium">{name}</p>
      <p className="text-xs opacity-70">{className}</p>
    </div>
  );
};

interface ColorPairProps {
  background: { name: string; variable: string; className: string };
  foreground: { name: string; variable: string; className: string };
}

const ColorPair = ({ background, foreground }: ColorPairProps) => {
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
};

interface ColorPairSectionProps {
  title: string;
  pairs: ColorPairProps[];
  className?: string;
}

const ColorPairSection = ({ title, pairs, className }: ColorPairSectionProps) => {
  return (
    <div className={className ?? ''}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pairs.map((pair, index) => (
          <ColorPair key={index} {...pair} />
        ))}
      </div>
    </div>
  );
};

interface ColorSectionProps {
  title: string;
  colors: { name: string; variable: string; className: string }[];
  className?: string;
}

const ColorSection = ({ title, colors, className }: ColorSectionProps) => {
  return (
    <div className={className ?? ''}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
        {colors.map(color => (
          <ColorBlock key={color.variable} {...color} />
        ))}
      </div>
    </div>
  );
};

interface BorderRadiusBlockProps {
  name: string;
  variable: string;
  className: string;
}

const BorderRadiusBlock = ({ name, className }: BorderRadiusBlockProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`h-16 w-16 border-2 border-border bg-primary ${className}`} />
      <p className="mt-2 text-sm font-medium">{name}</p>
      <p className="text-xs opacity-70">{className}</p>
    </div>
  );
};

interface BorderRadiusSectionProps {
  title: string;
  radii: BorderRadiusBlockProps[];
  className?: string;
}

const BorderRadiusSection = ({ title, radii, className }: BorderRadiusSectionProps) => {
  return (
    <div className={className ?? ''}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4 grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
        {radii.map(radius => (
          <BorderRadiusBlock key={radius.variable} {...radius} />
        ))}
      </div>
    </div>
  );
};

export function ThemeShowcase() {
  // Color pairs with background and foreground classNames
  const backgroundForegroundPairs = [
    {
      background: { name: 'Background', variable: 'background', className: 'bg-background' },
      foreground: { name: 'Foreground', variable: 'foreground', className: 'text-foreground' },
    },
    {
      background: { name: 'Card', variable: 'card', className: 'bg-card' },
      foreground: {
        name: 'Card Foreground',
        variable: 'card-foreground',
        className: 'text-card-foreground',
      },
    },
    {
      background: { name: 'Popover', variable: 'popover', className: 'bg-popover' },
      foreground: {
        name: 'Popover Foreground',
        variable: 'popover-foreground',
        className: 'text-popover-foreground',
      },
    },
    {
      background: { name: 'Primary', variable: 'primary', className: 'bg-primary' },
      foreground: {
        name: 'Primary Foreground',
        variable: 'primary-foreground',
        className: 'text-primary-foreground',
      },
    },
    {
      background: { name: 'Secondary', variable: 'secondary', className: 'bg-secondary' },
      foreground: {
        name: 'Secondary Foreground',
        variable: 'secondary-foreground',
        className: 'text-secondary-foreground',
      },
    },
    {
      background: { name: 'Accent', variable: 'accent', className: 'bg-accent' },
      foreground: {
        name: 'Accent Foreground',
        variable: 'accent-foreground',
        className: 'text-accent-foreground',
      },
    },
    {
      background: { name: 'Muted', variable: 'muted', className: 'bg-muted' },
      foreground: {
        name: 'Muted Foreground',
        variable: 'muted-foreground',
        className: 'text-muted-foreground',
      },
    },
    {
      background: { name: 'Destructive', variable: 'destructive', className: 'bg-destructive' },
      foreground: {
        name: 'Destructive Foreground',
        variable: 'destructive-foreground',
        className: 'text-destructive-foreground',
      },
    },
  ];

  // Sidebar color pairs
  const sidebarPairs = [
    {
      background: { name: 'Sidebar', variable: 'sidebar', className: 'bg-sidebar' },
      foreground: {
        name: 'Sidebar Foreground',
        variable: 'sidebar-foreground',
        className: 'text-sidebar-foreground',
      },
    },
    {
      background: {
        name: 'Sidebar Primary',
        variable: 'sidebar-primary',
        className: 'bg-sidebar-primary',
      },
      foreground: {
        name: 'Sidebar Primary Foreground',
        variable: 'sidebar-primary-foreground',
        className: 'text-sidebar-primary-foreground',
      },
    },
    {
      background: {
        name: 'Sidebar Accent',
        variable: 'sidebar-accent',
        className: 'bg-sidebar-accent',
      },
      foreground: {
        name: 'Sidebar Accent Foreground',
        variable: 'sidebar-accent-foreground',
        className: 'text-sidebar-accent-foreground',
      },
    },
  ];

  // Single colors with className
  const singleColors = [
    { name: 'Border', variable: 'border', className: 'bg-border' },
    { name: 'Input', variable: 'input', className: 'bg-input' },
    { name: 'Ring', variable: 'ring', className: 'bg-ring' },
  ];

  // Sidebar single colors
  const sidebarSingleColors = [
    { name: 'Sidebar Border', variable: 'sidebar-border', className: 'bg-sidebar-border' },
    { name: 'Sidebar Ring', variable: 'sidebar-ring', className: 'bg-sidebar-ring' },
  ];

  const chartColors = [
    { name: 'Chart 1', variable: 'chart-1', className: 'bg-chart-1' },
    { name: 'Chart 2', variable: 'chart-2', className: 'bg-chart-2' },
    { name: 'Chart 3', variable: 'chart-3', className: 'bg-chart-3' },
    { name: 'Chart 4', variable: 'chart-4', className: 'bg-chart-4' },
    { name: 'Chart 5', variable: 'chart-5', className: 'bg-chart-5' },
  ];

  const borderRadii = [
    { name: 'Radius SM', variable: 'radius-sm', className: 'rounded-sm' },
    { name: 'Radius MD', variable: 'radius-md', className: 'rounded-md' },
    { name: 'Radius LG', variable: 'radius-lg', className: 'rounded-lg' },
    { name: 'Radius XL', variable: 'radius-xl', className: 'rounded-xl' },
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
