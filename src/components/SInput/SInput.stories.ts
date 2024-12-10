import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import SInput from './SInput.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'SInput',
  component: SInput,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
    primary: true,
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
    label: 'Button',
  },
} satisfies Meta<typeof SInput>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    value: 'Hello',
    prependIcon: "Prepend",
    appendIcon: "Append"
  },
  render: (args) => ({
    components: { SInput },
    setup() {
      return { args };
    },
    template: '<SInput v-model="args.value" v-bind="args" /><br />{{ args.value }}',
  }),
};
