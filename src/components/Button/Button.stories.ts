import { Meta, StoryObj } from '@storybook/react';
import './../../../tailwind-button.css';

// Define the component metadata
const meta: Meta = {
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

// Define the button types and variations
type Story = StoryObj;

const ButtonTemplate: Story = {
  render: (args) => (
    <button 
      className={`btn ${args.variant} ${args.size} ${args.disabled ? 'btn-disabled' : ''}`}
      disabled={args.disabled}
    >
      {args.label}
    </button>
  ),
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'btn-primary', 'btn-secondary', 'btn-success', 'btn-danger', 
        'btn-warning', 'btn-info', 'btn-light', 'btn-dark', 'btn-link'
      ],
    },
    size: {
      control: { type: 'radio' },
      options: ['btn-sm', 'btn-md', 'btn-lg'],
    },
    label: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

// Define the stories
export const Primary: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'btn-primary',
    size: 'btn-md',
    label: 'Primary Button',
    disabled: false,
  },
};

export const Secondary: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'btn-secondary',
    size: 'btn-md',
    label: 'Secondary Button',
    disabled: false,
  },
};

export const Success: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'btn-success',
    size: 'btn-md',
    label: 'Success Button',
    disabled: false,
  },
};

export const Danger: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'btn-danger',
    size: 'btn-md',
    label: 'Danger Button',
    disabled: false,
  },
};

export const Warning: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'btn-warning',
    size: 'btn-md',
    label: 'Warning Button',
    disabled: false,
  },
};

export const Info: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'btn-info',
    size: 'btn-md',
    label: 'Info Button',
    disabled: false,
  },
};

export const Light: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'btn-light',
    size: 'btn-md',
    label: 'Light Button',
    disabled: false,
  },
};

export const Dark: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'btn-dark',
    size: 'btn-md',
    label: 'Dark Button',
    disabled: false,
  },
};

export const Link: Story = {
  ...ButtonTemplate,
  args: {
    variant: 'btn-link',
    size: 'btn-md',
    label: 'Link Button',
    disabled: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-4">
        <button className="btn btn-primary btn-sm">Small</button>
        <button className="btn btn-primary btn-md">Medium</button>
        <button className="btn btn-primary btn-lg">Large</button>
      </div>
      <div className="flex space-x-4">
        <button className="btn btn-secondary btn-sm">Small</button>
        <button className="btn btn-secondary btn-md">Medium</button>
        <button className="btn btn-secondary btn-lg">Large</button>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-4">
        <button className="btn btn-primary">Normal</button>
        <button className="btn btn-primary btn-hover">Hover</button>
        <button className="btn btn-primary btn-active">Active</button>
        <button className="btn btn-primary btn-disabled" disabled>Disabled</button>
      </div>
      <div className="flex space-x-4">
        <button className="btn btn-secondary">Normal</button>
        <button className="btn btn-secondary btn-hover">Hover</button>
        <button className="btn btn-secondary btn-active">Active</button>
        <button className="btn btn-secondary btn-disabled" disabled>Disabled</button>
      </div>
    </div>
  ),
};

export const SpecialVariants: Story = {
  render: () => (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex space-x-4">
        <button className="btn btn-primary btn-outline">Outline</button>
        <button className="btn btn-secondary btn-outline">Outline</button>
        <button className="btn btn-success btn-outline">Outline</button>
        <button className="btn btn-danger btn-outline">Outline</button>
      </div>
      <div className="flex space-x-4">
        <button className="btn btn-primary btn-ghost">Ghost</button>
        <button className="btn btn-secondary btn-ghost">Ghost</button>
        <button className="btn btn-success btn-ghost">Ghost</button>
        <button className="btn btn-danger btn-ghost">Ghost</button>
      </div>
      <div className="flex space-x-4">
        <button className="btn btn-primary btn-link">Link</button>
        <button className="btn btn-secondary btn-link">Link</button>
        <button className="btn btn-success btn-link">Link</button>
        <button className="btn btn-danger btn-link">Link</button>
      </div>
    </div>
  ),
};